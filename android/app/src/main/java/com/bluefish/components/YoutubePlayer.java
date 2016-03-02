package com.bluefish.components;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.google.android.youtube.player.YouTubePlayer;
import com.google.android.youtube.player.YouTubePlayerView;

/**
 * Created by nasif on 3/1/2016.
 */
public class YoutubePlayer extends SimpleViewManager<YouTubePlayerView>{
    @Override
    public String getName() {
        return "RCTYoutubePlayer";
    }

    @Override
    protected YouTubePlayerView createViewInstance(ThemedReactContext reactContext) {
        YouTubePlayerView view = new YouTubePlayerView(reactContext);

        return view;
    }
}
