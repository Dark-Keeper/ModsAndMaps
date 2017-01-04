package com.darkkeeper.minecraft.mods;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.NotificationManager;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Environment;
import android.os.Parcelable;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.NotificationCompat;
import android.support.v4.content.ContextCompat;
import android.support.v4.view.GestureDetectorCompat;
import android.support.v4.widget.NestedScrollView;
import android.support.v7.app.ActionBar;
import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.GestureDetector;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageSwitcher;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.ViewSwitcher;

import com.appodeal.ads.Appodeal;
import com.appodeal.ads.InterstitialCallbacks;
import com.backendless.Backendless;
import com.backendless.BackendlessCollection;
import com.backendless.async.callback.AsyncCallback;
import com.backendless.exceptions.BackendlessFault;
import com.backendless.files.FileInfo;
import com.backendless.persistence.BackendlessDataQuery;
import com.darkkeeper.minecraft.mods.entity.Description;
import com.darkkeeper.minecraft.mods.entity.Expansion;
import com.google.android.gms.analytics.GoogleAnalytics;
import com.google.android.gms.analytics.HitBuilders;
import com.google.android.gms.analytics.Tracker;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.jar.Manifest;
import java.util.logging.Handler;
import java.util.logging.LogRecord;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class MainActivity extends BaseActivity implements ViewSwitcher.ViewFactory, View.OnClickListener, AdapterView.OnItemSelectedListener {


    private String _location;

  //  ProgressBar progressBarInetChecker;


    private Expansion expansion;
    private DownloadDatabaseTask downloadDatabaseTask;

    private TextView nameTV, descriptionTV;

    private ImageSwitcher imageSwitcher;
    private int position = 0;
    private ArrayList<Bitmap> bitmaps;
    private GestureDetectorCompat mGestureDetector;
    private View.OnTouchListener gestureListener;
    private static final int SWIPE_MIN_DISTANCE = 120;
    private static final int SWIPE_MAX_OFF_PATH = 250;
    private static final int SWIPE_THRESHOLD_VELOCITY = 100;
    
    private static final int HANDLERS_DELAY = 4000;

    private DownloadExpansionFileTask downloadExpansionFileTask;

    private ProgressBar progressBar;
    private LinearLayout progressLL;
    private TextView progressTV;
    private Button installBtn;

    private NotificationManager notificationManager;
    private NotificationCompat.Builder builder;
    private static final int NOTIFY_ID = 101;

    private boolean isInstalling = false;
    private boolean isNeedUpdate = false;
    private boolean isInstalled = false;

    private Spinner spinner;
    private TextView spinnerTV;
    private String spinnerChoice;

    private ProgressBar progressBarNetwork;
    private BlockLauncherOperations bop;
    
    private android.os.Handler handlerTimer = new android.os.Handler();
    
    private Runnable getExpansionVersionsRunnable = new Runnable() {
        @Override
        public void run() {
            getExpansionVersions();
        }
    };
    private Runnable setImagesSwitcherRunnable = new Runnable() {
        @Override
        public void run() {
            setImagesSwitcher();
        }
    };
    private Runnable increaseDownloadsCountRunnable = new Runnable() {
        @Override
        public void run() {
            increaseDownloadsCount();
        }
    };
    private Runnable getExpansionFilesRunnable = new Runnable() {
        @Override
        public void run() {
            getExpansionFiles();
        }
    };
    private Runnable downloadDatabaseTaskRunnable = new Runnable() {
        @Override
        public void run() {
            downloadDatabaseTask = (DownloadDatabaseTask) new DownloadDatabaseTask().execute();
        }
    };

    private Runnable imageSwitcherRunnable = new Runnable() {
        int i = 0;

        public void run() {
            if (bitmaps.size() != 0) {
                setPositionNext();
                imageSwitcher.setImageDrawable(new BitmapDrawable(getResources(), bitmaps.get(position)));
            }
            imageSwitcher.postDelayed(this, 2000);
        }
    };

    private void setPositionNext() {
        imageSwitcher.setInAnimation(AnimationUtils.loadAnimation(getApplicationContext(), R.anim.slide_in_right));
        imageSwitcher.setOutAnimation(AnimationUtils.loadAnimation(getApplicationContext(), R.anim.slide_out_left));
        position++;
        if (position > bitmaps.size() - 1) {
            position = 0;
        }
    }

    private void setPositionPrev() {
        imageSwitcher.setInAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_in_left));
        imageSwitcher.setOutAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_out_right));
        position--;
        if (position < 0) {
            position = bitmaps.size() - 1;
        }
    }

    @Override
    public View makeView() {
        ImageView imageView = new ImageView(this);
        imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
        imageView.setLayoutParams(new
                ImageSwitcher.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 650));
        imageView.setBackgroundColor(0xFF000000);
        return imageView;
    }


    @Override
    public void onBackPressed() {
        showExitDialog(this);
    }


    @Override
    public void onRequestPermissionsResult(int requestCode,
                                           String permissions[], int[] grantResults) {
        switch (requestCode) {
            case 1: {
                // If request is cancelled, the result arrays are empty.
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    loadExpansionFiles();
                } else {
                    showPermissionDialog( this );
                    // permission denied, boo! Disable the
                    // functionality that depends on this permission.
                }
                return;
            }

            // other 'case' lines to check for other
            // permissions this app might request
        }
    }

    @Override
    public void onStart() {
        super.onStart();
        GoogleAnalytics.getInstance(this).reportActivityStart(this);
        // ...
    }

    @Override
    public void onStop() {
        try {
            handlerTimer.removeCallbacks(getExpansionVersionsRunnable);
            handlerTimer.removeCallbacks(setImagesSwitcherRunnable);
            handlerTimer.removeCallbacks(increaseDownloadsCountRunnable);
            handlerTimer.removeCallbacks(getExpansionFilesRunnable);
            handlerTimer.removeCallbacks(downloadDatabaseTaskRunnable);
            imageSwitcher.removeCallbacks(imageSwitcherRunnable);
        } catch (Exception e){

        }
        super.onStop();
        // ...
        GoogleAnalytics.getInstance(this).reportActivityStop(this);
    }

    @Override
    protected void onResume() {

        try {
            if ( ( progressLL.getVisibility() == View.VISIBLE && progressTV.getText().equals("0%") ) ) {
                initAds();
                initDatabase();
                initGoogleAnalytics(this);

                handlerTimer.postDelayed(downloadDatabaseTaskRunnable, HANDLERS_DELAY);

                resetGui();
            }
        }   catch (Exception e){

        }
        super.onResume();  // Always call the superclass method first

        // Appodeal.hide( this, Appodeal.BANNER_BOTTOM );
 //       Log.d("MY_LOGS", "CAN_SHOW_COMMERCIAL = " + canShowCommercial);
        showInterestial(this);
/*        try {
            getExpansionVersions();
        }   catch (Exception e){

        }*/
    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setAppodealCallbacks(this);
        canShowCommercial = true;
      //  showInterestial(this);

        initGoogleAnalytics(this);
        

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitle(getResources().getString(R.string.title));
        setSupportActionBar(toolbar);

        bop = new BlockLauncherOperations(this);

       //initGoogleAnalytics(this);

      //  progressBarInetChecker = (ProgressBar) findViewById( R.id.progress_bar_inet_main );


        ImageView ivCheckGuide = (ImageView) findViewById( R.id.ivCheckGuide );
        LinearLayout linearLayoutOpenCommunity = (LinearLayout) findViewById(R.id.llCheckGuide);
        String strCheckGuideLink = "https://www.facebook.com/";
        if ( BaseActivity.CURRENT_LANGUAGE == "ru" ){
            ivCheckGuide.setImageDrawable( ContextCompat.getDrawable(this, R.drawable.vk_icon) );
            strCheckGuideLink = "https://www.vk.com/";
        }
        final Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(strCheckGuideLink + getString(R.string.vkPageName)));

        final String finalStrCheckGuideLink = strCheckGuideLink;
        linearLayoutOpenCommunity.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("SocialNetworks")
                        .setAction( "MainActivity Button SocialNetwork Clicked" )
                        .setLabel(finalStrCheckGuideLink)
                        .build());

                startActivity(i);
                canShowCommercial = true;
            }
        });


        LinearLayout linearLayoutHelp = (LinearLayout) findViewById(R.id.llHelp);
        linearLayoutHelp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("Help")
                        .setAction( "MainActivity Layout Help Clicked" )
                        .setLabel( "Starting HelpActivity" )
                        .build());
                startActivity(new Intent(MainActivity.this, HelpActivity.class));
            }
        });



        nameTV = (TextView) findViewById( R.id.description_expansion_name );
        descriptionTV = (TextView) findViewById( R.id.description_expansion_description );
        ImageView iconIV = (ImageView) findViewById( R.id.description_icon_image );
        imageSwitcher = (ImageSwitcher) findViewById( R.id.imageSwitcher);
        installBtn = (Button) findViewById( R.id.installBtn );


        spinner = (Spinner) findViewById( R.id.spinner );
        spinnerTV = (TextView) findViewById( R.id.spinnerTV );
        spinner.setOnItemSelectedListener( this );

        progressLL = (LinearLayout) findViewById( R.id.progressBarLL );
        progressBar = (ProgressBar) findViewById( R.id.progressBar );
        progressTV = (TextView) findViewById( R.id.progressBarTV );

        progressBar.setMax(100);


        imageSwitcher.setFactory(this);


        imageSwitcher.setInAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_in_left));
        imageSwitcher.setOutAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_out_right));

        bitmaps = new ArrayList<>(8);

        downloadDatabaseTask = (DownloadDatabaseTask) new DownloadDatabaseTask().execute();


        mGestureDetector = new GestureDetectorCompat(this, new MyGestureListener() );
        gestureListener = new View.OnTouchListener() {
            public boolean onTouch(View v, MotionEvent event) {
                return mGestureDetector.onTouchEvent(event);
            }
        };

        NestedScrollView nestedScrollView = (NestedScrollView) findViewById( R.id.scrollViewDescription );
        nestedScrollView.setOnTouchListener(new View.OnTouchListener() {

            @Override
            public boolean onTouch(View v, MotionEvent event) {
                mGestureDetector.onTouchEvent(event);
                return false;
            }
        });



        progressBarNetwork = (ProgressBar) findViewById( R.id.progress_bar_inet_expansion_description );


    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    private void getExpansionVersions () {

        Backendless.Files.listing( expansion.category + "/" + expansion.name + "/version/", "*", false, new AsyncCallback<BackendlessCollection<FileInfo>>()
        {
            @Override
            public void handleResponse( BackendlessCollection<FileInfo> response )
            {
                progressBarNetwork.setVisibility(View.GONE);
                List<String> versionsList = new ArrayList<String>();

                Iterator<FileInfo> filesIterator = response.getCurrentPage().iterator();
                while( filesIterator.hasNext() )
                {
                    versionsList.add( filesIterator.next().getName() );
                }

                Collections.sort(versionsList, new Comparator<String>() {
                    @Override
                    public int compare(String str1, String str2) {
                        int res = String.CASE_INSENSITIVE_ORDER.compare(str2, str1);
                        if (res == 0) {
                            res = str2.compareTo(str1);
                        }
                        return res;
                    }
                });

                ArrayAdapter<String> spinnerAdapter = new ArrayAdapter<String>( MainActivity.this, android.R.layout.simple_spinner_item, versionsList );
                spinnerAdapter.setDropDownViewResource( android.R.layout.simple_spinner_dropdown_item );
                spinner.setAdapter(spinnerAdapter);

                Log.d("MY_LOGS", "SETTING SPINNER CHOICE");
                spinnerChoice = spinnerAdapter.getItem(0);



            }

            @Override
            public void handleFault( BackendlessFault fault )
            {
                //   Log.d("LOGS", fault.toString());
                if (fault.getMessage().contains("Unable to resolve host")) {
                    progressBarNetwork.setVisibility(View.VISIBLE);
                    showInetRequirementMessage(MainActivity.this);
                }

                sendBackendlessFaultToAnalytics(globalTracker, "GetExpansionVersions", fault );

                handlerTimer.postDelayed(getExpansionVersionsRunnable, HANDLERS_DELAY );

            }
        });

    }



    private void setImagesSwitcher (){
        Backendless.Files.listing(expansion.category + "/" + expansion.name + "/images", "*.jpg", true, new AsyncCallback<BackendlessCollection<FileInfo>>() {
            @Override
            public void handleResponse(BackendlessCollection<FileInfo> response) {
                //  Log.d("LOGS", response.toString());
                progressBarNetwork.setVisibility(View.GONE);
                Iterator<FileInfo> filesIterator = response.getCurrentPage().iterator();
                while (filesIterator.hasNext()) {
                    FileInfo file = filesIterator.next();
                    String string = "https://api.backendless.com/" + SplashActivity.BACKENDLESS_ID + "/" + SplashActivity.APP_VERSION + "/files/" + expansion.category + "/" + expansion.name + "/images/" + file.getName();
                    new DownloadImageTask().execute(string);
                }
                imageSwitcher.postDelayed(imageSwitcherRunnable, 2000);
            }

            @Override
            public void handleFault(BackendlessFault fault) {
                //Log.d("LOGS", fault.toString());
                if (fault.getMessage().contains("Unable to resolve host")) {
                    progressBarNetwork.setVisibility(View.VISIBLE);
                    showInetRequirementMessage(MainActivity.this);
                }

                sendBackendlessFaultToAnalytics(globalTracker, "SetImagesSwitcher", fault );

                handlerTimer.postDelayed(setImagesSwitcherRunnable, HANDLERS_DELAY );

            }
        });

    }




    private class DownloadImageTask extends AsyncTask<String, Void, Bitmap> {

        public DownloadImageTask() {
        }

        protected Bitmap doInBackground(String... urls) {
            String urldisplay = urls[0];
            Bitmap mIcon11 = null;
            try {
                InputStream in = new java.net.URL(urldisplay).openStream();
                mIcon11 = BitmapFactory.decodeStream(in);
            } catch (Exception e) {
                Log.e("Error", e.getMessage());
                e.printStackTrace();
            }
            return mIcon11;
        }

        protected void onPostExecute(Bitmap result) {
            //  Log.d("MY_LOGS", "image_downloaded");
            bitmaps.add(result);
/*            if (imageSwitcher.getDisplayedChild()==0) {
                imageSwitcher.setImageDrawable(new BitmapDrawable(getResources(), bitmaps.get(0)));
            }*/
        }
    }



/*    protected void initGoogleAnalytics () {
        GoogleAnalytics analytics = GoogleAnalytics.getInstance(this);
        globalTracker = analytics.newTracker( R.xml.global_tracker );

        globalTracker.setScreenName(getPackageName());
        globalTracker.send(new HitBuilders.AppViewBuilder().build());
    }*/


    public void showSuccessActivity(){
        Intent i = new Intent(MainActivity.this, DialogActivity.class);
        startActivity(i);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        showInterestial(this);
    }



    private void _dirChecker(String dir) {
        File f = new File(_location + dir);

        if (!f.isDirectory()) {
            f.mkdirs();
        }
    }

    private boolean unpackZip( String fileName, boolean isMap ) {

        if ( isMap )
            _location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";
        else _location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/";

        _dirChecker("");
        ZipInputStream zis;
        try {
            InputStream stream = getAssets().open(fileName);
            zis = new ZipInputStream(stream);
            ZipEntry ze;

            while ((ze = zis.getNextEntry()) != null) {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                byte[] buffer = new byte[1024];
                int count;


                if (ze.isDirectory()) {
                    _dirChecker(ze.getName());
                } else {
                    FileOutputStream fout = new FileOutputStream(_location + ze.getName());
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
       //     loadingListener.loadingFinished();

            if ( getResources().getBoolean( R.bool.isMap ) ) {
                showCompletedDialog();
            }


        } catch (IOException e) {
         //   loadingListener.onFailure();
            e.printStackTrace();
            return false;
        }


      //  tpReady = true;
        return true;
    }

    private void showCompletedDialog (){

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

    }

    /*private void install () {

        //ActivityCompat.requestPermissions( this, new String[] {android.Manifest.permission.WRITE_EXTERNAL_STORAGE}, 1 );

        try {
            BlockLauncherOperations blockLauncherOperations = new BlockLauncherOperations( this );

            InputStream is = null;
            File dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/mods/");
            dir.mkdirs();
            String[] f = getAssets().list("");

            showSuccessActivity();

            for ( String f1 : f ){

                Log.d("MY_LOGS", f1);
                if ( f1.contains( ".js" ) || f1.contains( ".modpkg" ) ){
                    Log.d("MY_LOGS", "current = " + f1);
                    is = getAssets().open( f1 );
                    File jsFile = new File(dir, f1 );
                    jsFile.createNewFile();
                    writeBytesToFile( is, jsFile );
                    blockLauncherOperations.installScript(jsFile);
                    is.close();
                }   else if ( f1.contains( "_addfiles" )){
                    Log.d("MY_LOGS", "current = " + f1);
                    unpackZip(f1, false);
                }   else if ( f1.contains( "map" )){
                    unpackZip( f1, true );
                } else if ( f1.contains( ".zip" ) ){
                    Log.d("MY_LOGS", "current = " + f1);
                    is = getAssets().open( f1 );
                    File texturePackFile = new File(dir, f1 );
                    texturePackFile.createNewFile();
                    writeBytesToFile( is, texturePackFile );
                    blockLauncherOperations.installTexturepack( texturePackFile );
                    is.close();
                }

               // Log.v( "names", f1 );
            }


        }
        catch (IOException e) {
            e.printStackTrace();
        }

    }*/

    public static void writeBytesToFile(InputStream is, File file) throws IOException {
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

    private boolean isVersionChoosed () {

/*        Log.d( "MY_LOGS", "CATEGORY = " + expansion.category ) ;
        Log.d( "MY_LOGS", "IS_API_AVAILABLE = " + bop.isAPIAvailable() ) ;
        Log.d( "MY_LOGS", "SPINNER_CHOICE = " + spinnerChoice ) ;*/

        if ( spinnerChoice == null ) {
            return false;
        }   else {
            return true;
        }
    }

    private void setSpinnerVisible ( boolean setVisible ){
        if (setVisible){
            spinner.setVisibility( View.VISIBLE );
            spinnerTV.setText (getString( R.string.tvSpinnerChoose ));
        }   else {
            spinner.setVisibility( View.INVISIBLE );
            spinnerTV.setText (getString( R.string.tvSpinnerWait ));
        }
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()){
            case R.id.installBtn:

                //check if needs a permission then show dialog
                if ( !isPermissionGranted() ){
                    showPermissionDialog(this);
                    break;
                }

                //check if spinner is set
                if ( !isVersionChoosed() ){
                    break;
                }

                //if Inet available then start loading else show inetReq message
                if ( isOnline() ){
                    loadExpansionFiles();
                }   else {
                    showInetRequirementMessage(this);
                }

                break;





             /*

                if ( !isInstalled ) {

                    if (!isInstalling) {

                        if ( canInstall() ) {*//*
                            isInstalling = true;
                            installBtn.setText(R.string.btnStop);*//*
                            if (!isPermissionGranted()) {
                                showPermissionDialog(this);
                            } else if ( isOnline() ) {
                                loadExpansionFiles();
                            } else {
                                showInetRequirementMessage(this);
                            }
                        }   else {
                            return;
                          //  showOffer( MainActivity.this );
                        }
                    } else {
                        //Pushing stop button
                        isInstalling = false;
                        setSpinnerVisible( true );
                        installBtn.setText(R.string.btnInstall);
                        progressBar.setProgress(0);
                        progressBar.setSecondaryProgress(0);
                        downloadExpansionFileTask.cancel(true);
                        Log.d("MY_LOGS", "CANCELL!");

                        progressLL.setVisibility(View.GONE);
                        builder.setContentText(getString( R.string.tvDownloadCanceled))
                                // Removes the progress bar
                                .setProgress(0, 0, false);
                        notificationManager.notify(NOTIFY_ID, builder.build());
                    }

                }   else if ( isNeedUpdate ){

                }   else {
                   // Log.d( "MY_LOGS", "ALREADY INSTALLED!");
                }
                checkIfInstalled();

                break;
                */



        }
    }


    private void loadExpansionFiles (){
/*        isInstalling = true;
        installBtn.setText(R.string.btnStop);*/

        setSpinnerVisible( false );
        installBtn.setVisibility(View.GONE);

        progressLL.setVisibility(View.VISIBLE);

        increaseDownloadsCount();
        getExpansionFiles();
    }

    private void increaseDownloadsCount (){
        Backendless.Persistence.of( Expansion.class ).findById(expansion.getObjectId(), new AsyncCallback<Expansion>() {
            @Override
            public void handleResponse(Expansion response) {
                response.downloadsCount += 1;

                Backendless.Persistence.save( response, new AsyncCallback<Expansion>() {
                    @Override
                    public void handleResponse(Expansion response) {
                    }

                    @Override
                    public void handleFault(BackendlessFault fault) {
                        sendBackendlessFaultToAnalytics(globalTracker, "IncreaseDownloadsCountSave", fault );

                    }
                });
            }

            @Override
            public void handleFault(BackendlessFault fault) {

                sendBackendlessFaultToAnalytics(globalTracker, "IncreaseDownloadsCount", fault );
                //Log.d( "MY_LOGS2", fault.getMessage() + " " + fault.getDetail() );

                handlerTimer.postDelayed(increaseDownloadsCountRunnable, HANDLERS_DELAY );
            }
        });
    }


    private void getExpansionFiles (){
        Backendless.Files.listing( expansion.category + "/" + expansion.name + "/version/" + spinnerChoice + "/", "*", false, new AsyncCallback<BackendlessCollection<FileInfo>>()
        {
            @Override
            public void handleResponse( BackendlessCollection<FileInfo> response )
            {
                ArrayList<String> urls= new ArrayList<String>(4);
                String url;
                Iterator<FileInfo> filesIterator = response.getCurrentPage().iterator();
                while( filesIterator.hasNext() )
                {
                    FileInfo file = filesIterator.next();

                    if ( file.getName().endsWith(".zip") || file.getName().endsWith(".js")  || file.getName().endsWith(".modpkg") || file.getName().endsWith(".mcpack") || file.getName().endsWith(".mcworld") ) {
                        url = "https://api.backendless.com/" + SplashActivity.BACKENDLESS_ID + "/" + SplashActivity.APP_VERSION + "/files/" + expansion.category + "/" + expansion.name + "/version/" + spinnerChoice + "/" + file.getName();
                        urls.add(url);
                    }
                }
                urls.trimToSize();
                downloadExpansionFileTask = (DownloadExpansionFileTask) new DownloadExpansionFileTask().execute(urls);
            }

            @Override
            public void handleFault( BackendlessFault fault )
            {
                Log.d( "MY_LOGS", fault.getMessage() + " " + fault.getDetail() );
                sendBackendlessFaultToAnalytics(globalTracker, "GetFilesToDownload", fault );

                handlerTimer.postDelayed(getExpansionFilesRunnable, HANDLERS_DELAY );


            }
        });
    }


   /* private void checkIfInstalled () {

     //   Log.d("MY_LOGS", "CHECKING IF ISTALLED");
        Backendless.Files.listing(expansion.category + "/" + expansion.name + "/version/" + spinnerChoice + "/", "*", false, new AsyncCallback<BackendlessCollection<FileInfo>>() {
            @Override
            public void handleResponse(BackendlessCollection<FileInfo> response) {

                progressBarNetwork.setVisibility( View.GONE );
                String fileName = null;
                Iterator<FileInfo> filesIterator = response.getCurrentPage().iterator();
                while( filesIterator.hasNext() )
                {
                    String name = filesIterator.next().getName();
                    if ( name.endsWith(".js") || name.endsWith(".modpkg") || name.endsWith(".mcpack") ){
                        fileName = name;
                    }
                }

                File dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/");
                dir.mkdirs();
                File file = new File(dir +"/" + fileName);
                Log.d("MY_LOGS", file.getAbsolutePath());
                Log.d("MY_LOGS", "file existstance = " + file.exists());
                if (file.exists()) {
                    isInstalled = true;
                    isInstalling = false;
                    installBtn.setVisibility(View.VISIBLE);
                    installBtn.setText(R.string.btnInstalled);
                    installBtn.setBackgroundResource(R.drawable.installed_button_bg);
                    installBtn.setTextColor(ContextCompat.getColor(MainActivity.this, android.R.color.holo_green_dark));
                } else {
                    isInstalled = false;
                    isInstalling = false;
                    installBtn.setVisibility(View.VISIBLE);
                    installBtn.setText(R.string.btnInstall);
                    installBtn.setBackgroundResource(android.R.color.holo_green_dark);
                    installBtn.setTextColor(ContextCompat.getColor(MainActivity.this, android.R.color.white));
                }

            }

            @Override
            public void handleFault(BackendlessFault fault) {
                //Log.d("LOGS", fault.toString());
                if (fault.getMessage().contains("Unable to resolve host")) {
                    progressBarNetwork.setVisibility(View.VISIBLE);
                    showInetRequirementMessage(MainActivity.this);
                }
                Log.d("MY_LOGS", fault.getMessage().toString());

                android.os.Handler handlerTimer = new android.os.Handler();
                handlerTimer.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        checkIfInstalled();
                    }
                }, HANDLERS_DELAY );

            }
        });
    }*/


    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {

        if ( !isInstalling ) {
            spinnerChoice = (String) parent.getItemAtPosition(position);

            installBtn.setText(R.string.btnInstall);
            installBtn.setBackgroundResource(android.R.color.holo_green_dark);
            installBtn.setTextColor(ContextCompat.getColor(MainActivity.this, android.R.color.white));
            installBtn.setVisibility(View.VISIBLE);
            //checkIfInstalled();
        }


    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }



    private class DownloadExpansionFileTask extends AsyncTask<ArrayList<String>, Integer, ArrayList<File>> {

        @Override
        protected ArrayList<File> doInBackground( ArrayList<String>... urls ) {

            ArrayList<File> files = null;

            Log.d( "MY_LOGS", "INSTALLING!");
            try {
                int count = 0;
                int lengthOfFiles = 0;
                long totalSum = 0;

                for ( int i = 0; i < urls[0].size(); i++ ){
                    URL url = new URL( urls[0].get(i) );
                    URLConnection connection = null;
                    connection = url.openConnection();
                    connection.connect();
                    lengthOfFiles += connection.getContentLength();
                }

                files = new ArrayList<File>( urls[0].size() );

                for ( int i = 0; i < urls[0].size(); i++ ) {
                    File file = new File( "/sdcard/games/" + urls[0].get(i).substring( urls[0].get(i).lastIndexOf("/") ) );
                    files.add( file );
                    URL url = new URL( urls[0].get(i) );
                    URLConnection connection = null;
                    connection = url.openConnection();
                    connection.connect();
                    int lengthOfFile = connection.getContentLength();
                    // input stream to read file - with 8k buffer
                    InputStream input = new BufferedInputStream(url.openStream(), 8192);

                    // Output stream to write file
                    OutputStream output = new BufferedOutputStream( new FileOutputStream( file ));

                    byte data[] = new byte[1024];

                    long total = 0;


                    while ((count = input.read(data)) > 0) {
                        total += count;
                        totalSum += count;
                        int progress = (int) (totalSum * 100) / lengthOfFiles;
                        publishProgress(progress, (int) (total * 100) / lengthOfFile);
                        builder.setProgress(100, progress, false);
                        notificationManager.notify(NOTIFY_ID, builder.build() );
                        output.write(data, 0, count);
                    }

                    output.flush();
                    output.close();
                    input.close();
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
            return files;
        }

        @Override
        protected void onProgressUpdate(final Integer... progress) {
            // setting progress percentage
            progressBar.setProgress(progress[0]);
            progressBar.setSecondaryProgress(progress[1]);
            progressTV.setText(progress[0].toString() + "%");
        }

        @Override
        protected void onPostExecute(ArrayList<File> files ){

            resetGui();

            builder.setContentText(getString( R.string.tvDownloadComplete ))
                    // Removes the progress bar
                    .setProgress(0, 0, false);
            notificationManager.notify(NOTIFY_ID, builder.build());

/*            Intent i = new Intent(MainActivity.this, DialogActivity.class);
            startActivity(i);*/

/*            canShowCommercial = true;
            showInterestial(MainActivity.this);*/

            expansion.install(files, MainActivity.this);

        }

    }

    private void resetGui(){
        progressLL.setVisibility(View.GONE);
        progressTV.setText("0%");
        progressBar.setProgress(0);
        progressBar.setSecondaryProgress(0);
/*            isInstalling = false;
            isInstalled = true;*/
        setSpinnerVisible( true );
        installBtn.setText(R.string.btnReInstall);
        installBtn.setBackgroundResource(R.drawable.installed_button_bg);
        installBtn.setTextColor(ContextCompat.getColor(MainActivity.this, android.R.color.holo_green_dark));
        installBtn.setVisibility(View.VISIBLE);
    }


    private class DownloadDatabaseTask extends AsyncTask<Void, Void, ArrayList<BackendlessCollection<Expansion>>>{

        @Override
        protected ArrayList<BackendlessCollection<Expansion>> doInBackground(Void... voids) {
            ArrayList<BackendlessCollection<Expansion>> expansions = new ArrayList<>(1);



            try {
                String whereClause = "name = '" + getResources().getString(R.string.appDbName) + "'";
                BackendlessDataQuery dataQuery = new BackendlessDataQuery();
                dataQuery.setWhereClause(whereClause);
                BackendlessCollection<Expansion> requestedExpansion = Backendless.Persistence.of(Expansion.class).find(dataQuery);

                expansions.add(requestedExpansion);
            }
            catch (Exception e){
                //      Log.d("MY LOGS", "EXCEPTION " + e);
            }

            return expansions;
        }

        @Override
        protected void onPostExecute ( ArrayList<BackendlessCollection<Expansion>> expansions ){

            if (expansions.size()!=0) {
                //progressBarInetChecker.setVisibility(View.GONE);

                expansion = expansions.get(0).getCurrentPage().get(0);

                nameTV.setText(expansion.name.replaceAll("_", " "));

                for ( Description description: expansion.description ){
                    if ( description.getLanguage().equals( SplashActivity.DEFAULT_LANGUAGE) ){
                        descriptionTV.setText( description.getFullDescription() );
                    }
                }
                for ( Description description: expansion.description ){
                    if ( description.getLanguage().equals( SplashActivity.CURRENT_LANGUAGE ) ){
                        descriptionTV.setText( description.getFullDescription() );
                    }
                }

                notificationManager =
                        (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                builder = new NotificationCompat.Builder(MainActivity.this);
                builder.setContentTitle(expansion.name + getString( R.string.tvDownload ))
                        .setContentText(getString( R.string.tvDownloadInProgress))
                        .setSmallIcon(android.R.drawable.arrow_down_float);

                getExpansionVersions();
                setImagesSwitcher();

            }   else {
                downloadDatabaseTask.cancel(true);
                showInetRequirementMessage(MainActivity.this);
                
                handlerTimer.postDelayed(downloadDatabaseTaskRunnable, HANDLERS_DELAY );

            }

        }
    }







    class MyGestureListener extends GestureDetector.SimpleOnGestureListener {
/*        private static final String DEBUG_TAG = "Gestures";

        @Override
        public boolean onDown(MotionEvent event) {
            return true;
        }

        @Override
        public boolean onFling(MotionEvent event1, MotionEvent event2,
                               float velocityX, float velocityY) {
            Log.d(DEBUG_TAG, "onFling: " + event1.toString()+event2.toString());
        //    Log.d( "LOL", "FLING");
            try {
                if (Math.abs(event1.getY() - event2.getY()) > SWIPE_MAX_OFF_PATH)
                    return false;
                // справа налево
                if (event1.getX() - event2.getX() > SWIPE_MIN_DISTANCE
                        && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    setPositionNext();
                    imageSwitcher.setImageDrawable(new BitmapDrawable( getResources(), bitmaps.get(position) ));
                } else if (event2.getX() - event1.getX() > SWIPE_MIN_DISTANCE
                        && Math.abs(velocityX) > SWIPE_THRESHOLD_VELOCITY) {
                    // слева направо
                    setPositionPrev();
                    imageSwitcher.setImageDrawable(new BitmapDrawable(getResources(), bitmaps.get(position)));
                }
            } catch (Exception e) {
                // nothing
                return true;
            }
            return true;
        }*/
    }

}



