package com.darkkeeper.minecraft.mods.entity;

/**
 * Created by AndreiPiatosin on 17-Jan-17.
 */

public class DatabaseManager {
    private String databaseID;
    private String databaseSecretKey;

    public DatabaseManager(String databaseID, String databaseSecretKey){
        this.databaseID = databaseID;
        this.databaseSecretKey = databaseSecretKey;
    }

    public String getDatabaseSecretKey() {
        return databaseSecretKey;
    }

    public String getDatabaseID() {
        return databaseID;
    }
}
