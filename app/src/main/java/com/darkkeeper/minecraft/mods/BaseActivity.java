package com.darkkeeper.minecraft.mods;

import android.app.ActionBar;
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
import android.support.v4.content.ContextCompat;
import android.support.v4.widget.NestedScrollView;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.appodeal.ads.Appodeal;
/*import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;*/

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Locale;
import java.util.Random;

//import com.google.firebase.analytics.FirebaseAnalytics;
import com.appodeal.ads.BannerCallbacks;
import com.appodeal.ads.BannerView;
import com.appodeal.ads.InterstitialCallbacks;
import com.backendless.Backendless;
import com.backendless.exceptions.BackendlessFault;
import com.darkkeeper.minecraft.mods.entity.DatabaseManager;
import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;

/**
 * Created by Dark Keeper on 29.03.2016.
 */
public class BaseActivity extends AppCompatActivity {

    /*    private Tracker globalTracker;*/
    public static String BACKENDLESS_ID = "918BBE49-41A3-F430-FF7A-C08FC9404A00";
    public static String BACKENDLESS_SECRET_KEY = "B5480EA7-C95B-9DBF-FF73-9F6F5AAC0700";
    public static String BACKENDLESS_REST_KEY = "0E032D19-9B84-69D0-FF72-83D19A8F1D00";
    public final static String DEFAULT_LANGUAGE = "en";
    public static String CURRENT_LANGUAGE = "en";

    private String[] backendlessIds = {
            "918BBE49-41A3-F430-FF7A-C08FC9404A00",
            "37C19C4A-242C-21F9-FF9E-45EED2745000",
            "0C25C203-286D-A5CB-FFA7-095D6B013600",
            "3E0E08A1-732F-8207-FF48-94A648FA6200",
            "B9084ACE-574D-4115-FF7B-09AC734A6100",
            "8627312C-DDDF-62A4-FF06-79B9A1F81E00",
            "692CA5F1-D000-A744-FFA9-6D63EBD51100",
            "A401EF37-F400-7D79-FFC7-BAE81514C200",
            "7681EF14-B8F9-AFB6-FF39-301C2A8ACA00",
            "ADCCB67A-19B1-65E9-FF45-B3F74807B100",
            "D20CB563-E214-92DE-FF98-5A8E0CB21800",
            "47A3BC54-4EA8-B408-FF80-69B582F8F300",
            "BEBCBC7D-D6D2-69CD-FFE4-E7DEDDBB6E00",
            "01408E9F-E96C-EBCB-FF7E-C5CE9B80EF00",
            "C06B6F1F-5C53-4AA3-FFFB-D57AD4B66600",
            "57F372F2-7BA8-8D55-FFEE-81413854AD00",
            "A5219442-D316-2D84-FF8C-773D9E267D00",
            "4D29A7AF-92CF-CE3C-FF15-23A9DB1A2200",
            "96F4F7EB-090C-8B8E-FFD2-413FA8670F00",
            "65DB385D-C465-AAC4-FF18-E6CF5E0F5000",
    };

    protected Tracker globalTracker;

    public final static String INTENT_UPDATE = "UPDATE_APP";

    protected boolean canShowCommercial = false;
    private boolean isBannerShowing = false;

   // private static FirebaseAnalytics mFirebaseAnalytics;
    private static int backPressedCount = 1;

    private Toast toast = null;

    private static boolean isActivityVisible;

    private List<DatabaseManager> databaseManagers;
    private int currentDatabaseManager;


    @Override
    protected void onResume() {
        super.onResume();
        isActivityVisible = true;
        isBannerShowing = false;
        try {
            BannerView bannerView1 = (BannerView) findViewById( R.id.appodealBannerView );
            bannerView1.setVisibility(View.GONE);
        } catch (Exception e){

        }
        try {
            BannerView bannerView2 = (BannerView) findViewById( R.id.appodealBannerView2 );
            bannerView2.setVisibility(View.GONE);
        } catch (Exception e){

        }
        showBanner(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        isActivityVisible = false;
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        switch ( item.getItemId() ){
            case android.R.id.home:
                logFirebaseEvent("Back");
                onBackPressed();
                return true;
            case R.id.action_share:
                logFirebaseEvent( "Share" );
                canShowCommercial = true;
                showInterestial( this );
                share( this );
                return true;
            case R.id.action_rate:
                logFirebaseEvent( "Rate" );
                canShowCommercial = true;
                showInterestial( this );
                rate( this );
                return true;
            case R.id.action_help:
                logFirebaseEvent( "Help" );
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
        super.onBackPressed();
        canShowCommercial = true;
        showInterestial( this );
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

    protected void setDatabaseManagers() {
        databaseManagers = new ArrayList<>(20);

        for (int i = 0; i < backendlessIds.length; i++){
            databaseManagers.add( new DatabaseManager( backendlessIds[i], BACKENDLESS_SECRET_KEY ));
        }

        Random r = new Random();
        currentDatabaseManager = r.nextInt(databaseManagers.size())-1;  //should give a number between -1 inclusive and 3 inclusive (3 variants)
    }



    protected void initNextDatabase (){

        if ( currentDatabaseManager < (databaseManagers.size()-1) ) {
            currentDatabaseManager++;
            BACKENDLESS_ID = databaseManagers.get(currentDatabaseManager).getDatabaseID();
            BACKENDLESS_SECRET_KEY = databaseManagers.get(currentDatabaseManager).getDatabaseSecretKey();
            Backendless.initApp(this, BACKENDLESS_ID, BACKENDLESS_SECRET_KEY);
        }   else {
            currentDatabaseManager=0;  //should be 0
            BACKENDLESS_ID = databaseManagers.get(currentDatabaseManager).getDatabaseID();
            BACKENDLESS_SECRET_KEY = databaseManagers.get(currentDatabaseManager).getDatabaseSecretKey();
            Backendless.initApp(this, BACKENDLESS_ID, BACKENDLESS_SECRET_KEY);
        }
       // Log.d("MY_LOGS", "ChangeDatabase to " + currentDatabaseManager );

    }

/*    protected void initDatabase () {
        Backendless.initApp(this, BACKENDLESS_ID, BACKENDLESS_SECRET_KEY, APP_VERSION);
    }*/


    protected void initAds () {
        String appKey = getResources().getString(R.string.appodeal_id);
        Appodeal.disableLocationPermissionCheck();
        Appodeal.setBannerViewId(R.id.appodealBannerView);
      //  Appodeal.confirm(Appodeal.SKIPPABLE_VIDEO);
     //   Appodeal.disableNetwork(this, "cheetah");
/*        Appodeal.disableNetwork(this, "yandex");
        Appodeal.disableNetwork(this, "unity_ads");
        Appodeal.disableNetwork(this, "chartboost");*/
     //   Appodeal.disableNetwork(this, "adcolony");
        Appodeal.initialize(this, appKey, Appodeal.BANNER_BOTTOM | Appodeal.INTERSTITIAL );


    }

    protected void initGoogleAnalytics ( Context context ) {
      //  mFirebaseAnalytics = FirebaseAnalytics.getInstance( context );

        GoogleAnalytics analytics = GoogleAnalytics.getInstance(context);
        globalTracker = analytics.newTracker( R.xml.global_tracker );

        globalTracker.setScreenName(getPackageName());
        globalTracker.send(new HitBuilders.ScreenViewBuilder().build());

/*        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("BackendlessFault")
                .setAction( "test" )
                .setLabel( "test" )
                .build());*/
    }
    private void logFirebaseEvent ( String event ){

        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory(event)
                .setAction( "Toolbar Button Clicked" )
                .setLabel(event + " Clicked from Toolbar")
                .build());

/*        Bundle bundle = new Bundle();
        bundle.putString(FirebaseAnalytics.Param.ITEM_ID, event);
        // bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, event);
        mFirebaseAnalytics.logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle);*/
    }




    protected void showInterestial ( Context context ) {
  //      Log.d("MY_LOGS2", "CAN_SHOW = " + canShowCommercial );
        if (canShowCommercial) {
            Appodeal.show((Activity) context, Appodeal.INTERSTITIAL );
        }
    }

    protected void showBanner ( Context context ) {
        //      Log.d("MY_LOGS2", "CAN_SHOW = " + canShowCommercial );
         //   isBannerShowing = false;
            Appodeal.show((Activity) context, Appodeal.BANNER_BOTTOM);
    }

    protected void setAppodealCallbacks ( final Context context ) {
        Appodeal.setInterstitialCallbacks(new InterstitialCallbacks() {
            private Toast mToast;

            @Override
            public void onInterstitialLoaded(boolean isPrecache) {
                canShowCommercial = false;

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

        Appodeal.setBannerCallbacks(new BannerCallbacks() {
            private Toast mToast;

            @Override
            public void onBannerLoaded(int height, boolean isPrecache) {
          //      showToast(String.format("onBannerLoaded, %ddp" + isBannerShowing, height));


/*                if ( !isBannerShowing && Appodeal.isLoaded(Appodeal.BANNER_BOTTOM)){
                    Appodeal.show((Activity) context, Appodeal.BANNER_BOTTOM);
                    isBannerShowing = true;
                }*/
            }

            @Override
            public void onBannerFailedToLoad() {
              //  showToast("onBannerFailedToLoad");
            }

            @Override
            public void onBannerShown() {

/*                try {
                    BannerView bannerView1 = (BannerView) findViewById( R.id.appodealBannerView );
                    bannerView1.setVisibility(View.VISIBLE);
                } catch (Exception e){

                }
                try {
                    BannerView bannerView2 = (BannerView) findViewById( R.id.appodealBannerView2 );
                    bannerView2.setVisibility(View.VISIBLE);

                    NestedScrollView nestedScrollView = (NestedScrollView) findViewById(R.id.nestedScrollView2);
                    Log.d("MY_LOGS", "heights = " + nestedScrollView.getLayoutParams().height);
                    nestedScrollView.getLayoutParams().height += 50;
                    Log.d("MY_LOGS", "heights = " + nestedScrollView.getLayoutParams().height);
                    nestedScrollView.invalidate();
                } catch (Exception e){

                    Log.d("MY_LOGS", "ERROR = " + e.toString());
                    e.printStackTrace();

                }*/
              //  showToast("onBannerShown");
            }

            @Override
            public void onBannerClicked() {
            //    showToast("onBannerClicked");
            }

            void showToast(final String text) {
                if (mToast == null) {
                    mToast = Toast.makeText(context, text, Toast.LENGTH_SHORT);
                }
                mToast.setText(text);
                mToast.setDuration(Toast.LENGTH_SHORT);
                mToast.show();
            }
        });
    }


/*    protected void showAdsOnStart ( Context context ) {
        Appodeal.show((Activity) context, Appodeal.INTERSTITIAL);
        Appodeal.show((Activity) context, Appodeal.BANNER_BOTTOM);
    }*/

    protected void showPermissionDialog ( final Context context ) {

        AlertDialog.Builder permissions = new AlertDialog.Builder( context );
        permissions.setMessage(R.string.showPermissionMessage)
                .setTitle(R.string.notificationMessage)
                .setCancelable(false)
                .setPositiveButton(R.string.answerOk,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                ActivityCompat.requestPermissions((MainActivity) context, new String[]{android.Manifest.permission.WRITE_EXTERNAL_STORAGE,android.Manifest.permission.READ_EXTERNAL_STORAGE}, 1);

                                return;
                            }
                        }
                );
        AlertDialog alert = permissions.create();
        alert.show();

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

        if (isActivityVisible) {
            try {
                toast.getView().isShown();
                toast.setText(R.string.networkReq);
            } catch (Exception e) {
                toast = Toast.makeText(context, R.string.networkReq, Toast.LENGTH_SHORT);
            }
            toast.show();
        }


/*        if ( toast==null || toast.getView().getWindowVisibility() != View.GONE ) {

            toast = Toast.makeText(context, "Network is Unnavailable", Toast.LENGTH_SHORT);
            toast.show();
            Log.d("LOGS", "" + toast + " VISIBILITY = " + toast.getView().getWindowVisibility() + " isShown = " + toast.getView().isShown() + " getWindowToken = " + toast.getView().getWindowToken());

        }*/

    }

    protected void showErrorDialog ( final Context context ) {

        AlertDialog.Builder builder = new AlertDialog.Builder( context );
        builder.setMessage(R.string.errorMessage)
                .setTitle(R.string.errorTitle)
                .setCancelable(false)
                .setPositiveButton(R.string.answerOk,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                return;
                            }
                        }
                );
        AlertDialog alert = builder.create();
        alert.show();

    }

    protected void showExitDialog ( Context context ) {

        Appodeal.show((Activity) context, Appodeal.NON_SKIPPABLE_VIDEO | Appodeal.INTERSTITIAL );
        AlertDialog.Builder exit = new AlertDialog.Builder( context );
        exit.setMessage(R.string.exitText)
                .setTitle(R.string.exitQuestion)
                .setCancelable(false)
                .setPositiveButton(R.string.answerYes,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                System.exit(0);
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
        AlertDialog alert = exit.create();
        alert.show();
    }


    protected void showUpdateDialog ( final Context context ) {
        AlertDialog.Builder alert = new AlertDialog.Builder( context );
        alert.setMessage(R.string.updateMessage)
                .setTitle(R.string.updateTitle)
                .setCancelable(false)
                .setPositiveButton(R.string.answerInstallNow,
                        new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int id) {
                                finish();

                                Intent i = new Intent( Intent.ACTION_VIEW );
                                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=" + context.getPackageName()));
                                context.startActivity(i);
                            }
                        }
                )
                .setNegativeButton(R.string.answerLater,
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

        String urlToShare = context.getString( context.getApplicationInfo().labelRes) + getString(R.string.shareMessage) + "https://play.google.com/store/apps/details?id=" + context.getPackageName();
        Intent chooserIntent;
        boolean isTargetsFound = false;
        if (!resInfo.isEmpty()) {
            for (ResolveInfo info : resInfo) {
                Intent targetedShare = new Intent(android.content.Intent.ACTION_SEND);
                targetedShare.setType("text/plain");
                if (info.activityInfo.packageName.toLowerCase().contains("facebook") || info.activityInfo.name.toLowerCase().contains("facebook") || info.activityInfo.packageName.toLowerCase().contains("twitter") || info.activityInfo.name.toLowerCase().contains("twitter") || info.activityInfo.packageName.toLowerCase().contains("vk") || info.activityInfo.name.toLowerCase().contains("vk") || info.activityInfo.packageName.toLowerCase().contains("kate") || info.activityInfo.name.toLowerCase().contains("kate")) {
                    targetedShare.putExtra(Intent.EXTRA_TEXT, urlToShare );
                    targetedShare.setPackage(info.activityInfo.packageName);
                    targetedShareIntents.add(targetedShare);
                    isTargetsFound = true;
                }
            }


            if ( isTargetsFound ) {
                chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), getString(R.string.sharePickApp));
                chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[]{}));

            }   else
            {
                /*String sharerUrl = "https://www.facebook.com/sharer/sharer.php?u=" + urlToShare;
                chooserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(sharerUrl));*/


                for (ResolveInfo info : resInfo) {
                    Intent targetedShare = new Intent(android.content.Intent.ACTION_SEND);
                    targetedShare.setType("text/plain");
                    targetedShare.putExtra(Intent.EXTRA_TEXT, urlToShare );
                    targetedShare.setPackage(info.activityInfo.packageName);
                    targetedShareIntents.add(targetedShare);
                }
                chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), getString(R.string.sharePickApp));
                chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[]{}));

            }
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


    protected boolean isPermissionGranted (){
        if ( ContextCompat.checkSelfPermission(this, android.Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED &&
        ContextCompat.checkSelfPermission(this, android.Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED )
        {
            return true;
        }
        else return false;
    }



    protected void sendBackendlessFaultToAnalytics (Tracker globalTracker, String action, BackendlessFault fault){
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("BackendlessFault")
                .setAction( action )
                .setLabel( fault.getMessage() )
                .build());
    }

}
