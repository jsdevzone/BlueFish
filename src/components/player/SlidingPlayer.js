/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, TouchableHighlight, ToastAndroid,
    TouchableWithoutFeedback, NativeModules, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import { AppStore } from '../../stores/AppStore';
import { AppConfig } from '../../constants/AppConfig';
import { PropertyExtractor } from '../../core/PropertyExtractor';
 /**
  * @class SlidingPlayer
  * @extends React.Component
  */
export class SlidingPlayer extends React.Component {

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
            isPlaying: false
        };

        AppStore.on('playbackstarted', this.onPlaybackStarted.bind(this));
    }

    processMedia() {
        if(this.state.isPlaying) {
            NativeModules.MediaHelper.pause();
            this.setState({ isPlaying: false });
        }
        else{
            NativeModules.MediaHelper.resume();
            this.setState({ isPlaying: true });
        }
    }

    onPlaybackStarted(playback) {
        this.setState({ playback: playback, isPlaying: true });
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        let coverImage = AppConfig.IMAGE_BASE_PATH + PropertyExtractor.getProperty(this.state.playback, 'image');
        let icon = this.state.isPlaying ? "ios-pause" : "ios-play";
        let backgroundImageUrl = 'http://supercolortuts.com/Tuts_Files/Tutorials/Perfect_iOS_7_Style_Blur_Background/Perfect_iOS_7_Style_Blur_Background_010.jpg';

        return (
            <Image source={{uri: backgroundImageUrl}} style={styles.container}>
                <Image source={{uri: coverImage}} style={styles.cover} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{PropertyExtractor.getProperty(this.state.playback, 'audio_title')}</Text>
                    <Text style={styles.subTitle}>{PropertyExtractor.getProperty(this.state.playback, 'preacher_name')}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.processMedia.bind(this)}>
                    <View style={styles.buttonContainer}>
                        <Icon name={icon} color="#FFF" size={25} />
                    </View>
                </TouchableWithoutFeedback>
            </Image>
        );
    }

}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    cover: {
        height: 40,
        width: 40,
        backgroundColor: '#FFF'
    },
    titleContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        flex: 1
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#E1E1E1'
    },
    buttonContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center'
    },
    button: {
        color: '#FFF'
    }
});
