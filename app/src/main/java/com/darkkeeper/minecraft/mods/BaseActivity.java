package com.darkkeeper.minecraft.mods;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.appodeal.ads.Appodeal;
/*import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;*/

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

//import com.google.firebase.analytics.FirebaseAnalytics;
import com.appodeal.ads.InterstitialCallbacks;
import com.backendless.Backendless;
import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;

/**
 * Created by Dark Keeper on 29.03.2016.
 */
public class BaseActivity extends AppCompatActivity {

    /*    private Tracker globalTracker;*/
    public final static String BACKENDLESS_ID = "CB0EF57E-5CF2-1505-FF6A-C070AF81DA00";
    public final static String BACKENDLESS_SECRET_KEY = "091E1EA1-2543-89FC-FF96-A3EFF6815500";
    public final static String APP_VERSION = "v1";
    public final static String DEFAULT_LANGUAGE = "en";
    public static String CURRENT_LANGUAGE = "en";


    private Tracker globalTracker;

    public final static String INTENT_UPDATE = "UPDATE_APP";

    protected boolean canShowCommercial = false;
    private boolean isBannerShowing = false;

   // private static FirebaseAnalytics mFirebaseAnalytics;
    private static int backPressedCount = 1;

    private Toast toast = null;


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        switch ( item.getItemId() ){
            case android.R.id.home:
                logFirebaseEvent("back");
                onBackPressed();
                return true;
            case R.id.action_share:
                logFirebaseEvent( "share" );
                canShowCommercial = true;
                showInterestial( this );
                share( this );
                return true;
            case R.id.action_rate:
                logFirebaseEvent( "rate" );
                canShowCommercial = true;
                showInterestial( this );
                rate( this );
                return true;
            case R.id.action_help:
                logFirebaseEvent( "help" );
/*                canShowCommercial = true;
                showInterestial( this );*/
                help( this );
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }


    @Override
    public void onBackPressed(){
        canShowCommercial = true;
        showInterestial( this );
        super.onBackPressed();
/*        backPressedCount++;
        if ( (3 + backPressedCount)%3 == 0 ){
            canShowCommercial = true;
            showInterestial( this );
        }
        super.onBackPressed();*/
    }

    protected boolean isOnline() {
        ConnectivityManager cm =
                (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return netInfo != null && netInfo.isConnectedOrConnecting();
    }

    protected void getSystemLanguage (){
        CURRENT_LANGUAGE = Locale.getDefault().getLanguage();
    }

    protected void initDatabase () {
        Backendless.initApp(this, BACKENDLESS_ID, BACKENDLESS_SECRET_KEY, APP_VERSION);
    }


    protected void initAds () {
        String appKey = getResources().getString( R.string.appodeal_id );
        Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
        Appodeal.disableNetwork(this, "cheetah");
     //   Appodeal.disableNetwork(this, "yandex");
        Appodeal.disableNetwork(this, "unity_ads");
        Appodeal.initialize(this, appKey, Appodeal.BANNER_BOTTOM | Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO);

    }

    protected void initGoogleAnalytics ( Context context ) {
      //  mFirebaseAnalytics = FirebaseAnalytics.getInstance( context );

        GoogleAnalytics analytics = GoogleAnalytics.getInstance(context);
        globalTracker = analytics.newTracker( R.xml.global_tracker );

        globalTracker.setScreenName(getPackageName());
        globalTracker.send(new HitBuilders.ScreenViewBuilder().build());
    }
    private void logFirebaseEvent ( String event ){
/*        Bundle bundle = new Bundle();
        bundle.putString(FirebaseAnalytics.Param.ITEM_ID, event);
        // bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, event);
        mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle);*/
    }




    protected void showInterestial ( Context context ) {
  //      Log.d("MY_LOGS2", "CAN_SHOW = " + canShowCommercial );
        if (canShowCommercial) {
            Appodeal.show((Activity) context, Appodeal.INTERSTITIAL);
        }
    }

    protected void setAppodealCallbacks ( final Context context ) {
        Appodeal.setInterstitialCallbacks(new InterstitialCallbacks() {
            private Toast mToast;

            @Override
            public void onInterstitialLoaded(boolean isPrecache) {
                canShowCommercial = false;
                if ( !isBannerShowing && Appodeal.isLoaded(Appodeal.BANNER_BOTTOM)){
                    Appodeal.show((Activity) context, Appodeal.BANNER_BOTTOM);
                    isBannerShowing = true;
                }
                //   Log.d("LOG_D", "CanShowCommercial = " + canShowCommercial);
            }

            @Override
            public void onInterstitialFailedToLoad() {
                canShowCommercial = false;
                //    Log.d("LOG_D", "CanShowCommercial = " + canShowCommercial);
            }

            @Override
            public void onInterstitialShown() {
                canShowCommercial = false;
                //    Log.d("LOG_D", "CanShowCommercial = " + canShowCommercial);
            }

            @Override
            public void onInterstitialClicked() {
                canShowCommercial = false;
                //    Log.d("LOG_D", "CanShowCommercial = " + canShowCommercial);
            }

            @Override
            public void onInterstitialClosed() {
                canShowCommercial = false;
                //   Log.d("LOG_D", "CanShowCommercial = " + canShowCommercial);
            }
        });
    }

/*    protected void showAdsOnStart ( Context context ) {
        Appodeal.show((Activity) context, Appodeal.INTERSTITIAL);
        Appodeal.show((Activity) context, Appodeal.BANNER_BOTTOM);
    }*/

    protected void showPermissionDialog ( final Context context ) {

        AlertDialog.Builder permissions = new AlertDialog.Builder( context );
        permissions.setMessage("To use this mod you have to grant the permission to install it on your external storage! You can find mod files in your SDCARD 'games' folder!")
                .setTitle("Notification")
                .setCancelable(false)
                .setPositiveButton("Ok",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                ActivityCompat.requestPermissions((MainActivity) context, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1);

                                return;
                            }
                        }
                );
        AlertDialog alert = permissions.create();
        alert.show();

    }

    protected void showOffer ( final Context mContext, String spinnerChoice ){
        if ( spinnerChoice != null ) {
            AlertDialog.Builder rate = new AlertDialog.Builder(mContext);
            String helpMessage = "Thank you for downloading " + mContext.getResources().getString(R.string.app_name) + "!" + "\n" + "\n" +

                    "YOU NEED BLOCKLAUNCHER TO INSTALL THIS!" + "\n" + "\n" +
                    "Install it and retry!";
            rate.setMessage(helpMessage)
                    .setTitle("Download")
                    .setCancelable(false)
                    .setNegativeButton("Cancel!",
                            new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog, int id) {
                                    return;
                                }
                            }
                    )
                    .setPositiveButton("OK",
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
        }   else {
            Toast toast = Toast.makeText( mContext, "No version selected", Toast.LENGTH_LONG );
            toast.show();
        }
    }


    protected void showInetRequirementMessage ( final Context context ) {

/*        if ()
        AlertDialog.Builder permissions = new AlertDialog.Builder( context );
        permissions.setMessage("You need Internet Connection to use this application. Enable your Internet and try again!")
                .setTitle("Notification")
                .setCancelable(false)
                .setPositiveButton("Ok",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                System.exit(0);
                                return;
                            }
                        }
                );
        AlertDialog alert = permissions.create();
        alert.show();*/

        try{
            toast.getView().isShown();
        }   catch (Exception e){
            toast = Toast.makeText(context, "Network is unavailable", Toast.LENGTH_SHORT);
        }
        toast.show();


/*        if ( toast==null || toast.getView().getWindowVisibility() != View.GONE ) {

            toast = Toast.makeText(context, "Network is Unnavailable", Toast.LENGTH_SHORT);
            toast.show();
            Log.d("LOGS", "" + toast + " VISIBILITY = " + toast.getView().getWindowVisibility() + " isShown = " + toast.getView().isShown() + " getWindowToken = " + toast.getView().getWindowToken());

        }*/

    }

    protected void showExitDialog ( Context context ) {

        Appodeal.show((Activity) context, Appodeal.SKIPPABLE_VIDEO | Appodeal.INTERSTITIAL);
        AlertDialog.Builder exit = new AlertDialog.Builder( context );
        exit.setMessage("Are you sure you want to exit?")
                .setTitle("Exit?")
                .setCancelable(false)
                .setPositiveButton("Yes",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                System.exit(0);
                            }
                        }
                )
                .setNegativeButton("No",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {

                                return;
                            }
                        }
                );
        AlertDialog alert = exit.create();
        alert.show();
    }


    protected void showUpdateDialog ( final Context context ) {
        AlertDialog.Builder alert = new AlertDialog.Builder( context );
        alert.setMessage("New Update is Available. Check it NOW!")
                .setTitle("Notification!")
                .setCancelable(false)
                .setPositiveButton("INSTALL NOW",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                finish();

                                Intent i = new Intent( Intent.ACTION_VIEW );
                                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=" + context.getPackageName()));
                                context.startActivity(i);
                            }
                        }
                )
                .setNegativeButton("Later",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                finish();
                                return;
                            }
                        }
                );
        AlertDialog alertDialog = alert.create();
        alertDialog.show();
    }

    protected void rate ( Context context ) {
        Intent i = new Intent( Intent.ACTION_VIEW );
        i.setData(Uri.parse("https://play.google.com/store/apps/details?id=" + context.getPackageName()));
        context.startActivity(i);
    }

    protected void share ( Context context ) {
        PackageManager pm = context.getPackageManager();

        Intent sendIntent = new Intent(Intent.ACTION_SEND);
        sendIntent.setType("text/plain");
        List<Intent> targetedShareIntents = new ArrayList<Intent>();
        List<ResolveInfo> resInfo = pm.queryIntentActivities(sendIntent, 0);

        if (!resInfo.isEmpty()) {
            for (ResolveInfo info : resInfo) {
                Intent targetedShare = new Intent(android.content.Intent.ACTION_SEND);
                targetedShare.setType("text/plain");
                if (info.activityInfo.packageName.toLowerCase().contains("facebook") || info.activityInfo.name.toLowerCase().contains("facebook") || info.activityInfo.packageName.toLowerCase().contains("twitter") || info.activityInfo.name.toLowerCase().contains("twitter") || info.activityInfo.packageName.toLowerCase().contains("vk") || info.activityInfo.name.toLowerCase().contains("vk")) {
                    targetedShare.putExtra(Intent.EXTRA_TEXT, context.getString( context.getApplicationInfo().labelRes) + " NOW ON GOOGLE PLAY " + "https://play.google.com/store/apps/details?id=" + context.getPackageName());
                    targetedShare.setPackage(info.activityInfo.packageName);
                    targetedShareIntents.add(targetedShare);
                }
            }
            Intent chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), "Select app to share");
            chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[]{}));
            context.startActivity(chooserIntent);
        }
    }

    protected void help ( final Context context ) {

        Intent i = new Intent( context, HelpActivity.class );
        context.startActivity(i);

/*        AlertDialog.Builder rate = new AlertDialog.Builder( context );
        String helpMessage = "Thank you for downloading " + context.getResources().getString( R.string.app_name ) + "!" + "\n" + "\n" +

                "Report any bug to apiatosin@gmail.com and leave five stars on the store! " + "\n" + "\n" +
                "Have fun!" + "\n" + "\n" +
                "Developer: Andrei Piatosin"
                ;

        rate.setMessage( helpMessage )
                .setTitle("Help")
                .setCancelable(false)
                .setNegativeButton("Rate me!",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                Intent i = new Intent( Intent.ACTION_VIEW );
                                i.setData( Uri.parse( "https://play.google.com/store/apps/details?id=" + context.getPackageName() ) );
                                context.startActivity(i);
                            }
                        }
                )
                .setNeutralButton("Report",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                sendEmail( context );
                                return;
                            }
                        }
                )
                .setPositiveButton("OK",
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                return;
                            }
                        }
                );

        AlertDialog alert = rate.create();
        alert.show();*/

    }

    protected void sendEmail( Context context ){

        Intent myIntent1 = new Intent(android.content.Intent.ACTION_SEND);
        myIntent1.putExtra(android.content.Intent.EXTRA_EMAIL, new String[]{"apiatosin@gmail.com"});
        final String my1 = Settings.Secure.getString( context.getContentResolver(), Settings.Secure.ANDROID_ID);
        final String my2 = android.os.Build.DEVICE;
        final String my3 = android.os.Build.MANUFACTURER;
        final String my4 = android.os.Build.MODEL;
        final String my5 = android.os.Build.VERSION.RELEASE;
        final int my6 = android.os.Build.VERSION.SDK_INT;
        final String my7 = android.os.Build.BRAND;
        final String my8 = android.os.Build.VERSION.INCREMENTAL;
        final String my9 = android.os.Build.PRODUCT;
        myIntent1.putExtra(android.content.Intent.EXTRA_SUBJECT, "Support Request: " + my1 + " Application: " + context.getPackageName() + " Device: " + my2 + " Manufacturer: " + my3 + " Model: " + my4 + " Version: " + my5 + " SDK: " + my6 + " Brand: " + my7 + " Incremental: " + my8 + " Product: " + my9);
        myIntent1.setType("text/plain");
//IN CASE EMAIL APP FAILS, THEN DEFINE THE OPTION TO LAUNCH SUPPORT WEBSITE
        String url2 = "";
        Intent myIntent2 = new Intent(Intent.ACTION_VIEW);
        myIntent2.setData(Uri.parse(url2));
//IF USER CLICKS THE OK BUTTON, THEN DO THIS
        try {
// TRY TO LAUNCH TO EMAIL APP
            context.startActivity(Intent.createChooser(myIntent1, "Send email to Developer"));
//                                                          startActivity(myIntent1);
        } catch (ActivityNotFoundException ex) {
// ELSE LAUNCH TO WEB BROWSER
            //   activity.startActivity(myIntent2);
        }

    }

}
