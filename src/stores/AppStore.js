/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import { AsyncStorage, ToastAndroid, } from 'react-native';
import { EventEmitter } from 'events';
import { AppConfig } from '../constants/AppConfig';
import { PropertyExtractor } from '../core/PropertyExtractor';
/**
 * App Store is flux store. This store serves as skeleton for server side data  service
 * for the application.
 *
 * @class AppStore
 * @extends EventEmitter
 * @store
 * @singleton
 */
export var AppStore = Object.assign({}, EventEmitter.prototype, {

    playback: null,
    /**
     * Load the settings from local storage.
     * @return {Promise} promise
     */
    getSettings: function() {

    },

    /**
     * Start playback
     * @param {Playback} playback
     * @return {Void} undefined
     */
    startPlayback: function(playback) {
        this.playback = playback;
        this.emit('playbackstarted', playback);
    },

    loadPlayback: function(playback) {
        this.emit('playbackloaded', playback);
    },

    pausePlayback: function(playback) {
        this.emit('playbackpaused', playback)
    },

    resumePlayback: function(playback) {
        this.emit('playbackresumed', playback)
    },

    /**
     * Start buffering new  playback
     * @param {Playback} playback
     * @return {Void} undefined
     */
    startBuffering: function(playback) {
        this.emit('playbackstarted', playback);
    },

    /**
     * @return {Void} undefined
     */
    openDrawer: function() {
        this.emit('draweropen');
    },

    addToPlaylist: function(playback) {
        let key = '@UruduAudio:playlist';
        AsyncStorage.getItem(key).then(playlist => {
            if(!playlist)
                playlist = new Array();
            else
                playlist = JSON.parse(playlist);

            playlist.push(playback);
            AsyncStorage.setItem(key, JSON.stringify(playlist));
        });
    },

    getPlaylist: function(callback) {
        let key = '@UruduAudio:playlist';
        AsyncStorage.getItem(key).then(playlist => {
            var favourites = JSON.parse(playlist);
            callback(favourites);
        });
    },

    tes: function(){},

    deletePlayback: function(playback, callback) {
        let key = '@UruduAudio:playlist';
        AsyncStorage.getItem(key).then(playlist => {
            let $playList = JSON.parse(playlist);
            let idx = null;
            $playList.map((item, index) => {
                if(PropertyExtractor.getProperty(playback, 'id') == PropertyExtractor.getProperty(item, 'id')) {
                    idx = index;
                }
            });
            $playList.splice(idx,1);
            AsyncStorage.setItem(key, JSON.stringify($playList)).then(()=>{
                callback();
            })
        });
    }
});
