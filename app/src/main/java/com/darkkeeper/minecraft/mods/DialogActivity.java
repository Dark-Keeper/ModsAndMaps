package com.darkkeeper.minecraft.mods;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import com.appodeal.ads.Appodeal;
import com.darkkeeper.minecraft.mods.R;

public class DialogActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dialog);
        Appodeal.show(this, Appodeal.BANNER_BOTTOM);
    }

    @Override
    public void onBackPressed() {
        showMainMenu();
    }

    private void showMainMenu (){
        Intent i = new Intent(DialogActivity.this, MainActivity.class);
        startActivity(i);
        finish();
    }

    public void onSuccessClick ( View v ){
        showMainMenu();
    }


}
