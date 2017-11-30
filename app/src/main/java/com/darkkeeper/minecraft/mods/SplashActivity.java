package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ProgressBar;

import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by Dark Keeper on 17.04.2016.
 */
public class SplashActivity extends BaseActivity {

    private ProgressBar progressBar;

    private android.os.Handler handlerTimer = new android.os.Handler();

    private Runnable openMainActivityRunnable = new Runnable() {

        public void run() {
            Intent i = new Intent(SplashActivity.this,
                    MainActivity.class);
            if ( getIntent().getStringExtra(INTENT_UPDATE)!=null){
                //          Log.d( "MY_LOGS", "UPDATE INTENT" );
                i.putExtra(INTENT_UPDATE, INTENT_UPDATE);
            }
            startActivity(i);
            finish();
        }
    };

    private int currentProgress=0;

    private Runnable progressUpdateRunnable = new Runnable() {
        @Override
        public void run() {
            currentProgress+=20;
            progressBar.setProgress(currentProgress);
            handlerTimer.postDelayed(progressUpdateRunnable,1000);
        }
    };


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash);

        progressBar = (ProgressBar) findViewById(R.id.splashPprogressBar);

        getSystemLanguage();

        initAds();
        cacheInterestial();

        handlerTimer.postDelayed(openMainActivityRunnable, 9000);

        handlerTimer.postDelayed(progressUpdateRunnable, 1700);

/*        new Timer().scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                progressBar.setProgress(progressBar.getProgress()+20);
            }
        }, 0, 1000);*/

/*        for (int i = 0; i < 100; i++){
            handlerTimer.postDelayed(progressUpdateRunnable,5*i);
        }*/

        // initDatabase();
        //initGoogleAnalytics(this);

        //welcomeThread.start();

    }

    @Override
    protected void onStop(){
        super.onStop();
        handlerTimer.removeCallbacks(openMainActivityRunnable);
        handlerTimer.removeCallbacks(progressUpdateRunnable);
    }

}
