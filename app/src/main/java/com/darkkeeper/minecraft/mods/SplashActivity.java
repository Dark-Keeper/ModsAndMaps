package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

import com.appodeal.ads.Appodeal;
import com.backendless.Backendless;

import java.util.Locale;

/**
 * Created by Dark Keeper on 17.04.2016.
 */
public class SplashActivity extends BaseActivity {


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash);

        getSystemLanguage();

        Thread welcomeThread = new Thread() {

            @Override
            public void run() {
                try {
                    super.run();
                    sleep(2000);
                } catch (Exception e) {

                } finally {

                    Intent i = new Intent(SplashActivity.this,
                            MainActivity.class);
                    if ( getIntent().getStringExtra(INTENT_UPDATE)!=null){
                        //          Log.d( "MY_LOGS", "UPDATE INTENT" );
                        i.putExtra(INTENT_UPDATE, INTENT_UPDATE);
                    }
                    startActivity(i);
                    finish();
                }
            }
        };

        initAds();
       // initDatabase();
        initGoogleAnalytics(this);

        welcomeThread.start();

    }

}
