package com.darkkeeper.minecraft.mods.entity;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Environment;
import android.util.Log;

import com.darkkeeper.minecraft.mods.BlockLauncherOperations;
import com.darkkeeper.minecraft.mods.Help2Activity;
import com.darkkeeper.minecraft.mods.HelpActivity;
import com.darkkeeper.minecraft.mods.MainActivity;
import com.darkkeeper.minecraft.mods.R;
import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by Dark Keeper on 13.04.2016.
 */
public class Expansion {
    private String objectId;

    public String   category;
    public String   name;
    public List<Description> description;

    public double downloadsCount;


    public Bitmap icon;

    private String location;

    private BlockLauncherOperations blockLauncherOperations;

    public Expansion (){
    }

    public boolean isVersionReleased ( Context context ){
        try {
            PackageInfo pInfo = context.getPackageManager().getPackageInfo("com.mojang.minecraftpe", 0);
            String mcpeVersionString = pInfo.versionName.substring(0,pInfo.versionName.indexOf(".",2));
            Log.d("MY_LOGS", "versionName = " + mcpeVersionString );

            if ( Double.valueOf( mcpeVersionString ) > 0.15 ){

                Log.d("MY_LOGS", "versionName SUPPORTED ");
                return true;

            }


        } catch (PackageManager.NameNotFoundException e) {
            Log.d("MY_LOGS", "versionCode = " + "ERROR");
            e.printStackTrace();
        }
        return false;
    }


    public void install ( ArrayList<File> files, Context context ) {

/*        String[] fileNames = new String[files.size()];
        int i = 0;
        Iterator<File> filesIterator = files.iterator();
        while( filesIterator.hasNext() )
        {
            File file = filesIterator.next();
            fileNames[i] = file.getName();
        }*/

        try {
            BlockLauncherOperations blockLauncherOperations = new BlockLauncherOperations( context );

            InputStream is = null;
            File dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/mods/");
            dir.mkdirs();

            //String[] f = getAssets().list("");

            String f1 = "";
            for ( int i = 0; i < files.size(); i++ ){

                f1 = files.get(i).getName();
                if ( f1.contains( ".js" ) || f1.contains( ".modpkg" ) ){
                    if ( blockLauncherOperations.isAPIAvailable() != false ) {
                        dir.mkdirs();
                        is = new FileInputStream("/sdcard/games/" + f1);
                        File jsFile = new File(dir, f1);
                        jsFile.createNewFile();
                        writeBytesToFile(is, jsFile);
                        blockLauncherOperations.installScript(jsFile);
                        is.close();
                    }   else {

                        showOffer( context );
                        return;
                    }

                }   else if ( f1.contains( ".mcpack" ) ) {
                    if (isVersionReleased(context)) {

                        if (f1.contains("resource")) {
                            dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/resource_packs/");
                            is = new FileInputStream("/sdcard/games/" + f1);

                            File modFile = new File(dir, f1);
                            modFile.createNewFile();
                            writeBytesToFile(is, modFile);
                            is.close();
                        } else if (f1.contains("behavior")) {
                            dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/behavior_packs/");
                            is = new FileInputStream("/sdcard/games/" + f1);

                            File modFile = new File(dir, f1);
                            modFile.createNewFile();
                            writeBytesToFile(is, modFile);
                            is.close();
                        }

/*                    is = new FileInputStream("/sdcard/games/" + f1);

                    File modFile = new File(dir, f1);
                    modFile.createNewFile();
                    writeBytesToFile(is, modFile);

                    Intent myIntent = new Intent(Intent.ACTION_VIEW);
                    myIntent.setData(Uri.fromFile(modFile));
                    myIntent.setType("application/mcpack");

                    myIntent.setPackage("minecraft");
                    context.startActivity(Intent.createChooser(myIntent, "Choose app"));*/


                    } else {
                        updateMinecraftVersion(context);
                        return;
                    }
                }
                else if ( f1.contains( ".mcworld" ) ){
                    dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/world_templates/");
                    is = new FileInputStream("/sdcard/games/]" + f1);
                    File modFile = new File(dir, f1 );
                    modFile.createNewFile();
                    writeBytesToFile( is, modFile );

/*                    Intent myIntent = new Intent(Intent.ACTION_VIEW);
                    myIntent.setData(Uri.fromFile(modFile));
                    myIntent.setType("application/mcpack");
                    *//*
                    myIntent.setPackage("minecraft");*//*
                    context.startActivity(Intent.createChooser(myIntent, "Choose app"));*/

                    is.close();
                }  else if ( f1.contains( "_addfiles" )){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    unpackZip(f1.replace("_addfiles", ""), false, is );
                    is.close();
                }   else if ( f1.contains( "map" )){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    unpackZip( f1, true, is );
                    is.close();
                } else if ( f1.contains( ".zip" ) ){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    File texturePackFile = new File(dir, f1 );
                    texturePackFile.createNewFile();
                    writeBytesToFile( is, texturePackFile );
                    blockLauncherOperations.installTexturepack( texturePackFile );
                    is.close();
                }
               // files.get(i).delete();
            }

            if ( f1.contains( ".mcpack" ) ) {
                askForHelp( context, true );
            }

        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    protected void showOffer ( final Context mContext ){
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(mContext);
        Tracker globalTracker = analytics.newTracker( R.xml.global_tracker );
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("Notifications")
                .setAction( "Install BlockLauncher" )
                .build());

        AlertDialog.Builder rate = new AlertDialog.Builder(mContext);
        String helpMessage = mContext.getString(R.string.offerMessage1) + mContext.getResources().getString(R.string.app_name) + "!" + "\n" + "\n" +

                mContext.getString(R.string.offerMessage2) + "\n" + "\n" +
                mContext.getString(R.string.offerMessage3);
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
                .setPositiveButton(mContext.getString(R.string.answerOk),
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

    public void uninstall ( ArrayList<File> files ){

    }

    private static void writeBytesToFile(InputStream is, File file) throws IOException {
        FileOutputStream fos = null;
        try {
            byte[] data = new byte[2048];
            int nbread = 0;
            fos = new FileOutputStream(file);
            while ((nbread = is.read(data)) > -1) {
                fos.write(data, 0, nbread);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            if (fos != null) {
                fos.close();
            }
        }
    }


    private void _dirChecker(String dir) {
        File f = new File( location + dir);

        if (!f.isDirectory()) {
            f.mkdirs();
        }
    }


    private boolean unpackZip( String fileName, boolean isMap, InputStream stream ) {

        if ( isMap )
            location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";
        else location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/";

        _dirChecker("");
        ZipInputStream zis;
        try {
            // InputStream stream = getAssets().open(fileName);
            zis = new ZipInputStream(stream);
            ZipEntry ze;

            while ((ze = zis.getNextEntry()) != null) {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                byte[] buffer = new byte[1024];
                int count;


                if (ze.isDirectory()) {
                    _dirChecker(ze.getName());
                } else {
                    FileOutputStream fout = new FileOutputStream( location + ze.getName() );
                    while ((count = zis.read(buffer)) != -1) {
                        baos.write(buffer, 0, count);
                        byte[] bytes = baos.toByteArray();
                        fout.write(bytes);
                        baos.reset();
                    }
                    fout.close();
                }

                zis.closeEntry();
            }

            zis.close();


        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }


        //  tpReady = true;
        return true;
    }

    private void askForHelp (final Context context, final boolean isReleaseVersion ) {
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(context);
        Tracker globalTracker = analytics.newTracker( R.xml.global_tracker );
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("Notifications")
                .setAction( "Check how to Use" )
                .build());

        AlertDialog.Builder alert = new AlertDialog.Builder( context );
        alert.setMessage(R.string.askForHelpText)
                .setTitle(R.string.updateTitle)
                .setCancelable(false)
                .setPositiveButton(R.string.answerOk,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                if ( isReleaseVersion ) {
                                    context.startActivity(new Intent(context, Help2Activity.class));
                                }   else {
                                    context.startActivity(new Intent(context, HelpActivity.class));
                                }
                                return;
                            }
                        }
                )
                .setNegativeButton(R.string.answerNo,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                return;
                            }
                        }
                );
        AlertDialog alertDialog = alert.create();
        alertDialog.show();
    }

    private void updateMinecraftVersion (final Context context ){
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(context);
        Tracker globalTracker = analytics.newTracker( R.xml.global_tracker );
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("Notifications")
                .setAction( "Update Minecraft" )
                .build());

        AlertDialog.Builder alert = new AlertDialog.Builder( context );
        alert.setMessage("You need to update Minecraft Pocket Edition to use this mod!")
                .setTitle(R.string.updateTitle)
                .setCancelable(false)
                .setPositiveButton(R.string.answerOk,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                Intent i = new Intent(Intent.ACTION_VIEW);
                                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"));
                                context.startActivity(i);
                                return;
                            }
                        }
                )
                .setNegativeButton(R.string.answerNo,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                return;
                            }
                        }
                );
        AlertDialog alertDialog = alert.create();
        alertDialog.show();
    }



    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }


/*    private void showCompletedDialog (){

        AlertDialog.Builder exit = new AlertDialog.Builder(this);
        exit.setMessage("Congratulation, your map had been successfully installed! Open Minecraft and try it!")
                .setTitle("Done!")
                .setCancelable(false)
                .setPositiveButton("Ok",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {

                            }
                        }
                );
        AlertDialog alert = exit.create();
        alert.show();

    }*/

}
