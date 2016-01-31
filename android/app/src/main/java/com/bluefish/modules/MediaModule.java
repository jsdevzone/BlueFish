package com.bluefish.modules;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.IOException;

/**
 * Created by nasif on 1/30/2016.
 */

public class MediaModule extends ReactContextBaseJavaModule {

    private MediaPlayer mediaPlayer;

    private ReactApplicationContext mReactApplicationContext;



    public MediaModule(ReactApplicationContext context) {
        super(context);
        mReactApplicationContext = context;
        mediaPlayer = new MediaPlayer();
    }

    @Override
    public String getName() {
        return "MediaHelper";
    }

    @ReactMethod
    public void pause() {
        if(mediaPlayer.isPlaying()) {
            mediaPlayer.pause();
        }
    }

    @ReactMethod
    public void stop() {
        if(mediaPlayer.isPlaying()) {
            mediaPlayer.stop();
            mediaPlayer.reset();

            mReactApplicationContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("mediaplayerstopped", null);
        }
    }

    @ReactMethod
    public void resume() {
        if(isPaused()) {
            mediaPlayer.start();
        }
    }

    private boolean isPaused() {
        return !mediaPlayer.isPlaying() && mediaPlayer.getCurrentPosition() > 1;
    }

    @ReactMethod
    public void playMedia(String url, final Callback callback) {
         if(mediaPlayer == null)
            mediaPlayer = new MediaPlayer();

        if(mediaPlayer.isPlaying()) {
            mediaPlayer.stop();
            mediaPlayer.reset();
        }

        if(isPaused()) {
            mediaPlayer.stop();
            mediaPlayer.reset();
        }

        try {
            mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
            mediaPlayer.setDataSource(url);
            mediaPlayer.prepareAsync();

            mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    mediaPlayer.start();
                    callback.invoke(mediaPlayer.getDuration());
                }

            });

            mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                @Override
                public void onCompletion(MediaPlayer mp) {
                    mReactApplicationContext
                            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                            .emit("mediaplayerstopped", null);
                }
            });

        }catch(IOException ex) {
            ex.printStackTrace();
        }
    }
}