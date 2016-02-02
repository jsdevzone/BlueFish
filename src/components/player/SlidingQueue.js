/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, ListView, Image, ToastAndroid,
     TouchableWithoutFeedback, NativeModules } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

//stores
import { CategoryStore } from '../../stores/CategoryStore';
import { AppStore } from '../../stores/AppStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { AppConfig } from '../../constants/AppConfig';
import { Player } from './Player';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;

 /**
  * @class SlidingQueue
  * @extends React.Component
  */
export class SlidingQueue extends React.Component {

     /**
      * @constructor
      */
    constructor() {
        super();

        // ListView data source object
        this.listDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
            return r1 !== r2;
        }});

        /**
         * @state
         */
        this.state = {
            dataSource: this.listDataSource.cloneWithRows([]),
            currentPlayback: null,
            currentPlaybackId: 0,
            data: []
        };
    }

    componentDidMount() {
        CategoryStore.getLatestAlbums().then(json => {
            this.setState({ data: json.Audios.Audio, dataSource: this.listDataSource.cloneWithRows(json.Audios.Audio)});
        });
    }

    playQueue(playback) {
        let playbackUrl = AppConfig.PLAYBACK_BASE_PATH + encodeURIComponent(PropertyExtractor.getProperty(playback, 'filename'));
        //AppStore.startBuffering();
        this.state.data.map(item => {
            if(PropertyExtractor.getProperty(playback, 'id') == PropertyExtractor.getProperty(item, 'id'))
                item.isPlaying = true;
            else
                item.isPlaying = false;
        });
        this.setState({
            currentPlayback: playback,
            currentPlaybackId: PropertyExtractor.getProperty(playback, 'id'),
            dataSource: this.listDataSource.cloneWithRows(this.state.data)
        });
        NativeModules.MediaHelper.playMedia(playbackUrl, duration => AppStore.startPlayback(playback));
    }


    onPopoutQueue(idx) {
    }

    /**
     * Transforms each row of list view. [See ListView for more details]
     *
     * @param {Object} rowData
     * @param {Number} sectionID
     * @param {Number} rowID
     */
    renderRow(rowData, sectionID: number, rowID: number) {
        let playIcon = "ios-play";
        let coverImage = AppConfig.IMAGE_BASE_PATH + PropertyExtractor.getProperty(rowData, 'image');
        let playbackId = PropertyExtractor.getProperty(rowData, 'id');
        let title = PropertyExtractor.getProperty(rowData,'audio_title');
        let preacher = PropertyExtractor.getProperty(rowData, 'preacher_name');
        let seprator = require('../../../resource/images/dashedline.png');

        if(rowData.isPlaying) {
            playIcon = 'ios-pause';
        }

        return (
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Image style={styles.cover} source={{uri: coverImage}}>
                        <TouchableWithoutFeedback onPress={() => { this.playQueue(rowData) }}>
                            <View style={this.playBtn}>
                                <Icon name={playIcon} style={[styles.playerIcon]} size={23} color="#FFF" />
                            </View>
                        </TouchableWithoutFeedback>
                    </Image>
                    <View style={styles.queueItemWrapper}>
                        <Text style={styles.queueItemTitle}>{title}</Text>
                        <Text style={styles.queueItemPreacher}>{preacher}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.onPopoutQueue(rowID)}>
                        <View style={styles.queueItemDeleteBtn}>
                            <Icon name="trash-b" style={[styles.playerIcon]} size={23} color="#FFF" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Image source={seprator} />
            </View>
        );
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        let backgroundImageUrl = 'http://wiki-fx.net/wp-content/uploads/2013/08/Black-Background-Collapsar-1080x1920.jpg';
        return (
            <Image source={{uri:backgroundImageUrl}} style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    style={{flex: 1}} />
            </Image>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: DEVICE_WIDTH,
        backgroundColor: '#3E3E3E',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    row: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    cover: {
        width: 40,
        height: 40,
        margin: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playerIcon: {
        marginLeft: 8
    },
    playBtn: {
        width:30,
        height: 30,
        borderRadius: 15,
        borderColor:'#FFF',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    queueItemWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    queueItemTitle: {
        fontSize: 14,
        color: '#fff'
    },
    queueItemPreacher: {
        color: '#E1E1E1'
    },
    queueItemDeleteBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
});
