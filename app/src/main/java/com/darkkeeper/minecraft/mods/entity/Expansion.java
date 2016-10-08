package com.darkkeeper.minecraft.mods.entity;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import com.darkkeeper.minecraft.mods.BlockLauncherOperations;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by Dark Keeper on 13.04.2016.
 */
public class Expansion {
    private String objectId;

    public String   category;
    public String   name;
    public List<Description> description;

    public double downloadsCount;


    public Bitmap icon;

    private String location;

    public Expansion (){
    }


    public void install ( ArrayList<File> files, Context context ) {

/*        String[] fileNames = new String[files.size()];
        int i = 0;
        Iterator<File> filesIterator = files.iterator();
        while( filesIterator.hasNext() )
        {
            File file = filesIterator.next();
            fileNames[i] = file.getName();
        }*/

        try {
            BlockLauncherOperations blockLauncherOperations = new BlockLauncherOperations( context );

            InputStream is = null;
            File dir = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/mods/");
            dir.mkdirs();
            //String[] f = getAssets().list("");

            for ( int i = 0; i < files.size(); i++ ){

                String f1 = files.get(i).getName();
                if ( f1.contains( ".js" ) || f1.contains( ".modpkg" ) ){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    File jsFile = new File(dir, f1 );
                    jsFile.createNewFile();
                    writeBytesToFile( is, jsFile );
                    blockLauncherOperations.installScript( jsFile );
                    is.close();
                }   else if ( f1.contains( "_addfiles" )){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    unpackZip(f1.replace("_addfiles", ""), false, is );
                    is.close();
                }   else if ( f1.contains( "map" )){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    unpackZip( f1, true, is );
                    is.close();
                } else if ( f1.contains( ".zip" ) ){
                    is = new FileInputStream("/sdcard/games/" + f1 );
                    File texturePackFile = new File(dir, f1 );
                    texturePackFile.createNewFile();
                    writeBytesToFile( is, texturePackFile );
                    blockLauncherOperations.installTexturepack( texturePackFile );
                    is.close();
                }
                files.get(i).delete();
            }
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void uninstall ( ArrayList<File> files ){

    }

    private static void writeBytesToFile(InputStream is, File file) throws IOException {
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


    private void _dirChecker(String dir) {
        File f = new File( location + dir);

        if (!f.isDirectory()) {
            f.mkdirs();
        }
    }


    private boolean unpackZip( String fileName, boolean isMap, InputStream stream ) {

        if ( isMap )
            location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";
        else location = Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/";

        _dirChecker("");
        ZipInputStream zis;
        try {
            // InputStream stream = getAssets().open(fileName);
            zis = new ZipInputStream(stream);
            ZipEntry ze;

            while ((ze = zis.getNextEntry()) != null) {
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                byte[] buffer = new byte[1024];
                int count;


                if (ze.isDirectory()) {
                    _dirChecker(ze.getName());
                } else {
                    FileOutputStream fout = new FileOutputStream( location + ze.getName() );
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


        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }


        //  tpReady = true;
        return true;
    }

    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }


/*    private void showCompletedDialog (){

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

    }*/

}
