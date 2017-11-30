package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.appodeal.ads.Appodeal;
import com.google.android.gms.analytics.HitBuilders;

public class MyCommercialActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_commercial);
        initGoogleAnalytics(this);

        Appodeal.hide(this, Appodeal.BANNER_BOTTOM);
    }

    public void install (View v){
        globalTracker.send(new HitBuilders.EventBuilder()
                .setCategory("Check")
                .setAction( "MyCommercial Button Clicked" )
                .setLabel("Check" + " Clicked from MyCommercial")
                .build());

        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.minecraft.bestmodsandmaps"));
        startActivity(i);
        finish();
    }

    public void close (View v){
        finish();
    }
}
