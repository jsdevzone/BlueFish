package com.bluefish.modules;

import android.media.AudioManager;
import android.media.MediaPlayer;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by itse4 on 1/26/2016.
 */
public class MediaModule extends ReactContextBaseJavaModule {

    private MediaPlayer mediaPlayer = null;

    public MediaModule(ReactApplicationContext reactContext) {
        super(reactContext);

        if (mediaPlayer == null) {
            mediaPlayer = new MediaPlayer();
        }

    }

    @Override
    public String getName() {
        return "MediaHelper";
    }

    @ReactMethod
    public void play(String url, Callback callback) {
        try {
            mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
            mediaPlayer.setDataSource(url);
            mediaPlayer.prepareAsync();

            mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {

                    mediaPlayer.start();
                }
            });

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    @ReactMethod
    public void stop() {
        if (mediaPlayer != null && mediaPlayer.isPlaying()) {
            mediaPlayer.stop();
        }
    }
}
