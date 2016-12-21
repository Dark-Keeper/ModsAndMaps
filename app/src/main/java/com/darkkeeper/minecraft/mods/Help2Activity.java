package com.darkkeeper.minecraft.mods;

import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;

/**
 * Created by AndreiPiatosin on 12-Dec-16.
 */

public class Help2Activity extends BaseActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_help2);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbarHelp);
        toolbar.setTitle(getString(R.string.action_bar_help));
        toolbar.setNavigationIcon(R.drawable.ic_back);
        setSupportActionBar(toolbar);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_help, menu);
        return true;
    }
}
