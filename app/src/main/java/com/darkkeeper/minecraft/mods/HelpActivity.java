package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.View;
import android.widget.LinearLayout;

import com.appodeal.ads.Appodeal;

/**
 * Created by Dark Keeper on 16.06.2016.
 */
public class HelpActivity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_help);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbarHelp);
        toolbar.setTitle("Help");
        toolbar.setNavigationIcon(R.drawable.ic_back);
        setSupportActionBar(toolbar);

        Appodeal.show(this, Appodeal.BANNER_BOTTOM);

        LinearLayout linearLayoutRateOnPlayStore = (LinearLayout) findViewById( R.id.rate_on_play_store );
        linearLayoutRateOnPlayStore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=" + getPackageName()));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutCheckBestModsAndMapsOnPlayStore = (LinearLayout) findViewById( R.id.check_best_mods_and_maps_on_play_store );
        linearLayoutCheckBestModsAndMapsOnPlayStore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.minecraft.bestmodsandmaps"));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutMcpeDownload = (LinearLayout) findViewById( R.id.get_minecraft_ll );
        linearLayoutMcpeDownload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutBlockLauncherDownload = (LinearLayout) findViewById( R.id.get_block_launcher_ll );
        linearLayoutBlockLauncherDownload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher"));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutOpenFacebookCommunity = (LinearLayout) findViewById( R.id.open_facebook_community );
        linearLayoutOpenFacebookCommunity.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://www.facebook.com/" + getString(R.string.facebookPageName)));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutSendMessage = (LinearLayout) findViewById( R.id.send_message_ll );
        linearLayoutSendMessage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                sendEmail( HelpActivity.this );
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_help, menu);
        return true;
    }
/*
    @Override
    public boolean onSupportNavigateUp(){
        finish();
        return true;
    }*/

}
