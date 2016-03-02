package com.bluefish.modules;

import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.AsyncTask;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.support.v7.app.NotificationCompat;
import android.util.Log;
import android.view.SoundEffectConstants;
import android.view.View;
import android.widget.Toast;

import com.bluefish.R;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import com.squareup.okhttp.ResponseBody;
import android.support.v7.app.NotificationCompat.Builder;


import java.io.File;
import java.io.IOException;

import okio.BufferedSink;
import okio.BufferedSource;
import okio.Okio;

/**
 * Created by nasif on 1/30/2016.
 */

public class MediaModule extends ReactContextBaseJavaModule {

    private MediaPlayer mediaPlayer;
    NotificationManager mNotifyManager;
    Builder mBuilder;


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
    public void share()
    {
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_SEND);
        intent.createChooser(intent,"share");
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        mReactApplicationContext.startActivity(intent);
    }

    @ReactMethod
    public void loopStart(){
        mediaPlayer.setLooping(true);
    }
    @ReactMethod
    public void loopStop(){
        mediaPlayer.setLooping(false);
    }
    @ReactMethod
    public void forwordSeek(){
        mediaPlayer.seekTo(mediaPlayer.getCurrentPosition() + 5000);
    }
    @ReactMethod
    public void rewindSeek(){
        mediaPlayer.seekTo(mediaPlayer.getCurrentPosition() - 5000);
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
    public void Volume()
    {
        AudioManager am = (AudioManager)mReactApplicationContext.getSystemService(Context.AUDIO_SERVICE);
        am.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_SAME, AudioManager.FLAG_SHOW_UI);
    }

    @ReactMethod
    public void downloadMedia(String URL, Callback callback) {
        DownloadTask task = new DownloadTask();
        task.setCallback(callback);
        task.execute(URL);
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

    private class DownloadTask extends AsyncTask<String, Void, Void> {

        private Callback callback;

        public Callback getCallback() {
            return callback;
        }

        public void setCallback(Callback callback) {
            this.callback = callback;
        }

        @Override
        protected Void doInBackground(String... URL) {
            try{
                // Chunk Size
                int DOWNLOAD_CHUNK_SIZE = 2048;
                int progress;

                mNotifyManager = (NotificationManager) mReactApplicationContext.getSystemService(Context.NOTIFICATION_SERVICE);
                mBuilder = new NotificationCompat.Builder(getReactApplicationContext());
                mBuilder.setContentTitle("URUDU AUDIO")
                        .setContentText("Download processing")
                        .setSmallIcon(R.mipmap.ic_launcher);
                mBuilder.setOngoing(true);
                mNotifyManager.notify(0,mBuilder.build());

                // Url of the file to be downloaded
                // String URL = URL_BASE + String.valueOf(meetingId) + "/Sketches/" + String.valueOf(attachmentId) + ".png";

                // Create OkHttpClient instance


                OkHttpClient client = new OkHttpClient();

                try {
                    // Build simple request object
                    Request request = new Request.Builder().url(URL[0]).build();

                    // Configure Response
                    Response response = client.newCall(request).execute();
                    ResponseBody body = response.body();
                    long contentLength = body.contentLength();
                    BufferedSource source = body.source();

                    // Compose local file name
                    String strDirName = Environment.getExternalStorageDirectory().getAbsolutePath()
                            + "/UruduRadio";
                    String strFileName = strDirName + "/audio.mp3";

                    // Create local dirs if it does not exists
                    File dir = new File(strDirName);
                    if (!dir.exists())
                        dir.mkdirs();

                    File file = new File(strFileName);
                    BufferedSink sink = Okio.buffer(Okio.sink(file));

                    long bytesRead = 0;
                    while (source.read(sink.buffer(), DOWNLOAD_CHUNK_SIZE) != -1) {
                        bytesRead += DOWNLOAD_CHUNK_SIZE;
                        progress = (int) ((bytesRead * 100) / contentLength);

                        //publishProgress(progress);
                    }

                    // wrire to local file
                    sink.writeAll(source);

                    //close stream
                    sink.close();
                    //publishProgress(FileInfo.FULL);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                this.callback.invoke();

            } catch (Exception ex) {
                ex.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            //progressDialog = ProgressDialog.show(mReactContext,"Uploading", "Uploading to server, please wait");
        }

        @Override
        protected void onPostExecute(Void aVoid) {
            super.onPostExecute(aVoid);
            //progressDialog.dismiss();
            mNotifyManager.cancel(0);
        }
    }


    @ReactMethod
    public void downloadCompleteNotification(){

        mNotifyManager = (NotificationManager) mReactApplicationContext.getSystemService(Context.NOTIFICATION_SERVICE);
        mBuilder = new NotificationCompat.Builder(getReactApplicationContext());
        mBuilder.setContentTitle("URUDU AUDIO")
                .setContentText("Download Complete")
                .setSmallIcon(R.mipmap.ic_launcher);
        mNotifyManager.notify(0,mBuilder.build());

    }

    @ReactMethod
    public void touch(){
        AudioManager am = (AudioManager)mReactApplicationContext.getSystemService(Context.AUDIO_SERVICE);
        am.playSoundEffect(SoundEffectConstants.CLICK);
    }

}
