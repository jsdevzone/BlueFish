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
        let img = null;

        img =<Image source={require('../../../resource/images/mufti.jpeg')} style={styles.cover} />

        let title = ""

        if(this.props.type == 'author') {
            title = PropertyExtractor.getProperty(this.props.author, 'preacher_title');
            let coverImage = "http://bhatkallys.com/wp-content/uploads/sermons/images/" + PropertyExtractor.getProperty(this.props.author, 'image');
            img =<Image source={{uri:coverImage}} style={styles.cover} />;
        }

        return (
            <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur3.png')}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {img}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{this.props.count} Audios</Text>
                    <View style={styles.subscribe}>
                        <Text style={{color:'#FFF',marginBottom:3}}>subscribe</Text>
                    </View>

                </View>

                </View>

            </Image>
        );
    }

}
/**

 * @style
 */
const styles = StyleSheet.create({
    container: {
        width:null,
        height:100,
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: '#FFF',
        paddingBottom: 10
    },
    cover: {
        height: 80,
        width: 80,
        borderColor:'#FFF',
        borderWidth:3,
        borderRadius:50
    },
    titleContainer: {
        flexDirection: 'column',
        marginLeft: 35,
        flex: 1
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize:20,
        marginBottom:4
    },
    subTitle: {
        color: '#CCC',
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
   },
   subscribe: {
       marginTop:2,
       borderWidth:3,
       borderColor:'rgba(123,32,42,0.5)',
       marginRight:12,
       backgroundColor:'rgba(255,255,255,0.5)',
       alignItems:'center',
       width:80,
       borderRadius:35
   },
});
