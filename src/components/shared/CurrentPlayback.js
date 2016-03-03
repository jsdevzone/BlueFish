/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */

'use strict';

import React, { Text, View, StyleSheet, TouchableWithoutFeedback,Image,TouchableOpacity, ToastAndroid ,NativeModules} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { AppStore } from '../../stores/AppStore';
/**
 * @class Titlebar
 * @extends React.Component
 */

 export class CurrentPlayback extends React.Component {
     /**
      * @constructor
      */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {
            playback: {},
            isPlaying: false,
            isPaused: false
        };

        if(AppStore.playback != null) {
            this.state.isPlaying = true;
            this.state.playback = AppStore.playback;
        }

        AppStore.on('playbackresumed', this.onPlaybackResumed.bind(this));
        AppStore.on('playbackpaused', this.onPlaybackPaused.bind(this));
        AppStore.on('playbackstarted', this.onPlaybackStarted.bind(this));
    }

    onPlaybackStarted(playback) {
        this.setState({ playback: playback });
    }

    onPlaybackResumed(playback) {
        this.setState({ isPlaying: true, isPaused: true });
    }

    onPlaybackPaused(playback) {
        this.setState({ isPlaying: false, isPaused: true });
    }
    onSong(){
        let playback = this.props.playback;

        if(!this.state.isPaused) {
            NativeModules.MediaHelper.resume();
            this.setState({ isPlaying: true, isPaused: true });
            AppStore.resumePlayback(playback);
            ToastAndroid.show('resumed',ToastAndroid.LONG);
        }
        else {
            NativeModules.MediaHelper.pause();
            this.setState({ isPlaying: false, isPaused: false });
            AppStore.pausePlayback(playback);
            ToastAndroid.show('Pused',ToastAndroid.LONG);
        }
    }

    render() {
        let icon = this.state.isPlaying ? "ios-pause": "ios-play";
        return (
            <View style={styles.container} >
            <View style={{flexDirection:'row',height:45,backgroundColor:'#FFF'}}>
                <TouchableOpacity onPress={this.onSong.bind(this)}>
                    <Icon style={{marginTop:9,marginLeft:15}} name={icon} size={30} color="#999" />
                </TouchableOpacity>
                <Image style={{height:35,width:40,marginLeft:10,marginTop:5}} source={require('../../../resource/images/mufti.jpeg')}/>
                <View style={{flexDirection:'column',flex: 1,alignItems:'center'}}>
                    <Text style={{color:'#555',fontWeight:'bold',fontSize:12,marginTop:5}} numberOfLines={1}>{PropertyExtractor.getProperty(this.state.playback,'audio_title')}</Text>
                    <Text style={{color:'#999',fontSize:10,marginTop:3 }} numberOfLines={1}>{PropertyExtractor.getProperty(this.state.playback,'preacher_name')}</Text>
                </View>
                <Icon style={{marginTop:9,marginLeft:20, marginRight: 10}} name="android-menu" size={25} color="#D33065" />
            </View>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
     container: {
         alignItems: 'stretch'
     },

});
