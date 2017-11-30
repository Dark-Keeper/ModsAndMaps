package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.View;
import android.widget.LinearLayout;

import com.google.android.gms.analytics.HitBuilders;

/**
 * Created by Dark Keeper on 16.06.2016.
 */
public class HelpActivity extends BaseActivity {

    @Override
    public void onResume (){
        super.onResume();
        showBanner(this);
    }

    @Override
    protected void onPause(){
        super.onPause();
        hideBanner(this);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_help);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbarHelp);
        toolbar.setTitle(getString(R.string.action_bar_help));
        toolbar.setNavigationIcon(R.drawable.ic_back);
        setSupportActionBar(toolbar);

        initGoogleAnalytics(this);

     //   Appodeal.show(this, Appodeal.BANNER_VIEW);
/*        showBanner( this );*/
/*        isBa
        Appodeal.show(this, Appodeal.BANNER_BOTTOM);*/
       // Appodeal.show(this, Appodeal.BANNER_BOTTOM);

       // showBanner( this );

/*        try {
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

        LinearLayout linearLayoutRateOnPlayStore = (LinearLayout) findViewById( R.id.rate_on_play_store );
        linearLayoutRateOnPlayStore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("Rate")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("Rate" + " Clicked from Help")
                        .build());

                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=" + getPackageName()));

                startActivity(i);
            }
        });

        LinearLayout linearLayoutCheckBestModsAndMapsOnPlayStore = (LinearLayout) findViewById( R.id.check_best_mods_and_maps_on_play_store );
        linearLayoutCheckBestModsAndMapsOnPlayStore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("Check")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("Check" + " Clicked from Help")
                        .build());

                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.minecraft.bestmodsandmaps"));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutMcpeDownload = (LinearLayout) findViewById( R.id.get_minecraft_ll );
        linearLayoutMcpeDownload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("Download")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("Mcpe Download" + " Clicked from Help")
                        .build());

                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutBlockLauncherDownload = (LinearLayout) findViewById( R.id.get_block_launcher_ll );
        linearLayoutBlockLauncherDownload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("Download")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("BlockLauncher Download" + " Clicked from Help")
                        .build());

                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://play.google.com/store/apps/details?id=net.zhuoweizhang.mcpelauncher"));
                startActivity(i);
            }
        });

        try {
            LinearLayout linearLayoutOpenVKCommunity = (LinearLayout) findViewById(R.id.open_vk_community);
            linearLayoutOpenVKCommunity.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    globalTracker.send(new HitBuilders.EventBuilder()
                            .setCategory("SocialNetworks")
                            .setAction( "HelpActivity Button Clicked" )
                            .setLabel("https://www.vk.com/")
                            .build());

                    Intent i = new Intent(Intent.ACTION_VIEW);
                    i.setData(Uri.parse("https://www.vk.com/" + getString(R.string.vkPageName)));
                    startActivity(i);
                }
            });
        }   catch (Exception e){

        }

        LinearLayout linearLayoutOpenFacebookCommunity = (LinearLayout) findViewById( R.id.open_facebook_community );
        linearLayoutOpenFacebookCommunity.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("SocialNetworks")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("https://www.facebook.com/")
                        .build());

                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse("https://www.facebook.com/" + getString(R.string.facebookPageName)));
                startActivity(i);
            }
        });

        LinearLayout linearLayoutSendMessage = (LinearLayout) findViewById( R.id.send_message_ll );
        linearLayoutSendMessage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                globalTracker.send(new HitBuilders.EventBuilder()
                        .setCategory("SendEmail")
                        .setAction( "HelpActivity Button Clicked" )
                        .setLabel("SendEmailToDeveloper")
                        .build());

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
