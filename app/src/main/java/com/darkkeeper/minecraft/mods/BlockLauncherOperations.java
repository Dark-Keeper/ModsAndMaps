package com.darkkeeper.minecraft.mods;

/**
 * Created by Dark Keeper on 13.04.2016.
 */

import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.StrictMode;
import android.support.v4.content.FileProvider;
import android.widget.Toast;

import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;

import java.io.File;
import java.lang.reflect.Method;


public class BlockLauncherOperations {


    public static final String pkg_free = "net.zhuoweizhang.mcpelauncher";
    public static final String cls_free = "net.zhuoweizhang.mcpelauncher.LauncherAppActivity";
    public static final String pkg = "net.zhuoweizhang.mcpelauncher.pro";
    public static final String cls = "net.zhuoweizhang.mcpelauncher.pro.LauncherProActivity";
    public static final String pkg_api = pkg_free + ".api";


    public BlockLauncherOperations(Context context){
        this.mContext = context;
    }

    /**
     * Installs ModPE Script. Uses new API. Detects BL version.
     *
     * @param object file with script
     */
    public void installScript(File object) {
        if (!isAPIAvailable()){
            showOffer();
            return;
        }
        final String clsImportPatch = pkg_api + ".ImportScriptActivity";
        try {
            if(Build.VERSION.SDK_INT>=24){
                try{
                    Method m = StrictMode.class.getMethod("disableDeathOnFileUriExposure");
                    m.invoke(null);
                }catch(Exception e){
                    e.printStackTrace();
                }
            }

            // ((BaseActivity)mContext).showSuccessActivity();
            Intent bl = new Intent("net.zhuoweizhang.mcpelauncher.action.IMPORT_SCRIPT");
            bl.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            bl.setData(Uri.fromFile(object));
           // bl.setData(FileProvider.getUriForFile(mContext,"kek.lol.my.provider", object));
            bl.setClassName(isPro() ? pkg : pkg_free, clsImportPatch);
            ((MainActivity)mContext).startActivityForResult(bl, 9999);
        } catch (ActivityNotFoundException e) {
            showOffer();
/*            if (BuildConfig.DEBUG)
                e.printStackTrace();
            Toast.makeText(mContext, R.string.blocklauncher_failed, Toast.LENGTH_LONG).show();*/
        }
    }

    private void showOffer (){
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(mContext);
        Tracker globalTracker = analytics.newTracker( R.xml.global_tracker );
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("Notifications")
                .setAction( "Check how to Use" )
                .build());

        AlertDialog.Builder rate = new AlertDialog.Builder( mContext );
        String helpMessage = mContext.getResources().getString(R.string.offerMessage1) + mContext.getResources().getString(R.string.app_name) + "!" + "\n" + "\n" +

                mContext.getResources().getString(R.string.offerMessage2) + "\n" + "\n" +
                mContext.getResources().getString(R.string.offerMessage3);
        rate.setMessage(helpMessage)
                .setTitle(R.string.offerTitle)
                .setCancelable(false)
                .setNegativeButton(R.string.answerCancel,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                return;
                            }
                        }
                )
                .setPositiveButton(mContext.getResources().getString(R.string.answerOk),
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                Intent i = new Intent(Intent.ACTION_VIEW);
                                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher"));
                                mContext.startActivity(i);
                            }
                        }
                );

        AlertDialog alert = rate.create();
        alert.show();
    }

    /**
     * Installs texturepack. Uses new API. Detects BL version.
     *
     * @param object file with texturepack
     */
    public void installTexturepack(File object) {
        if (!isAPIAvailable()) return;
        final String clsImportPatch = pkg_api + ".ImportTexturepackActivity";
        try {
            Intent bl = new Intent("android.intent.action.VIEW");
            bl.setData(Uri.fromFile(object));
            bl.setClassName(isPro() ? pkg : pkg_free, clsImportPatch);
            ((MainActivity)mContext).startActivityForResult(bl, 9998);
        } catch (ActivityNotFoundException e) {
            if (BuildConfig.DEBUG)
                e.printStackTrace();
            Toast.makeText(mContext, R.string.blocklauncher_failed, Toast.LENGTH_LONG).show();
        }
    }


    // ================================================
    // ==
    // == RUN AND CHECK BlockLauncher ==
    // ==
    // ================================================


    /**
     * Checks, is full public BlockLauncher's API available or not.
     *
     * @return result of check
     */
    public boolean isAPIAvailable() {
        // Is BL installed?
        if (!isInstalled())
            return false;
        // Is BL new?
        int version = getVersion();
        if (version == -1)
            return false;
        if (version < 47)
            return false;
        return true;
    }

    private Context mContext;

    /**
     * Check, is any type of BL installed or not.
     *
     * @return result of check
     */
    public boolean isInstalled() {
        PackageManager pm = mContext.getPackageManager();
        try {
            pm.getPackageInfo(pkg, 0);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            try {
                pm.getPackageInfo(pkg_free, 0);
                return true;
            } catch (PackageManager.NameNotFoundException e1) {
                return false;
            }
        }
    }

    /**
     * Check, is BL Pro installed.
     *
     * @return result of check
     */
    public boolean isPro() {
        PackageManager pm = mContext.getPackageManager();
        try {
            PackageInfo pi = pm.getPackageInfo(pkg, 0);
            if (pi != null)
                return true;
            else
                return false;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }

    /**
     * Run any kind of BlockLauncher
     *
     * @return is successful
     */
    public boolean run() {
        if (!isInstalled())
            return false;
        if (isPro()) {
            if (!runPro())
                return runFree();
            else
                return true;
        } else
            return runFree();
    }

    /**
     * Run BlockLauncher Pro
     *
     * @return is successful
     */
    protected boolean runPro() {
        Intent in = new Intent("android.intent.action.MAIN").addCategory("android.intent.category.LAUNCHER");
        in.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            in.setComponent(new ComponentName(pkg, cls));
            mContext.startActivity(in);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * Run BlockLauncher Free
     *
     * @return is successful
     */
    protected boolean runFree() {
        Intent in = new Intent("android.intent.action.MAIN").addCategory("android.intent.category.LAUNCHER");
        in.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        try {
            in.setComponent(new ComponentName(pkg_free, cls_free));
            mContext.startActivity(in);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * Get BlockLauncher version. Useful for checking features.
     *
     * @return int - versionCode of BL
     */
    public int getVersion() {
        if (!isInstalled())
            return -1;
        PackageManager pm = mContext.getPackageManager();
        try {
            PackageInfo pi = pm.getPackageInfo(isPro() ? pkg : pkg_free, 0);
            return pi.versionCode;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return -1;
        }
    }




}
