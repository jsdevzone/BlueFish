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
        AppStore.on('playbackloaded',this.onPlaybackStarted.bind(this));
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

    onPlaybackLoaded(playback) {
        this.setState({ playback: playback });
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
        let icon = "ios-download"
        let backgroundImageUrl = 'http://supercolortuts.com/Tuts_Files/Tutorials/Perfect_iOS_7_Style_Blur_Background/Perfect_iOS_7_Style_Blur_Background_010.jpg';

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: coverImage}} style={styles.cover} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{PropertyExtractor.getProperty(this.state.playback, 'audio_title')}</Text>
                    <Text style={styles.subTitle}>{PropertyExtractor.getProperty(this.state.playback, 'preacher_name')}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.processMedia.bind(this)}>
                    <View style={styles.buttonContainer}>
                        <Icon name={icon} color="#999" size={25} />
                    </View>
                </TouchableWithoutFeedback>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Text>00:00</Text>
                <Slider style={{flex: 1, marginLeft: 10, marginRight: 10 }}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor='#30a935'
          />
          <Text>00:00</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="ios-shuffle-strong" color="#999" size={25} />
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
                            <Icon name="ios-rewind" color="#999" size={35} />
                            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                <Icon name="ios-play" color="#30B55A" size={45} style={{marginRight: 15, marginLeft: 15}} />
                            </View>
                            <Icon name="ios-fastforward" color="#999" size={35} />
                        </View>
                    <Icon name="ios-infinite" color="#999" size={25} />
                </View>
            </View>
        );
    }

}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: '#FFF',
        paddingBottom: 10,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1
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
        color: '#999',
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#CCC'
    },
    buttonContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center'
    },
    button: {
        color: '#999'
    },
    track: {
    height: 2,
    borderRadius: 4,
    backgroundColor: '#999',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});
