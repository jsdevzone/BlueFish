/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, ScrollView ,Image, TouchableOpacity,NativeModules,ToastAndroid} from 'react-native';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { Titlebar } from '../shared/Titlebar';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppStore } from '../../stores/AppStore';
import { Advertisement } from '../landing/Advertisement';
import CircularProgressDisplay  from 'react-native-progress-circular';
import { AppConfig } from '../../constants/AppConfig';
import moment from 'moment';
/**
 * @class NewRelease
 * @extends React.Component
 */
export class Player extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {
            isPlaying:false,
            dataSource: [],
            duration: 0,
            isPaused: false,
            isRepeat:false
        };
    }

    componentDidMount() {
        CategoryStore.getCategories().then(json => this.categoryLoaded.bind(this));
    }

    categoryLoaded(json) {
        this.setState({ dataSource: json.Categories.Category });
    }

    onCategoryPress(category) {
        this.props.navigator.push({ id:'', title: '', component: null, props: { category: category } });
    }
    onSong(){
        NativeModules.MediaHelper.touch();
        let playIcon = "ios-play";
        let playback = this.props.playback;


        let playbackUrl = AppConfig.PLAYBACK_BASE_PATH + encodeURIComponent(PropertyExtractor.getProperty(playback, 'filename'));


        if(!this.state.isPlaying && !this.state.isPaused) {
            NativeModules.MediaHelper.playMedia(playbackUrl, duration => {
                AppStore.startPlayback(playback);
                this.setState({ isPlaying: true, duration: duration });
                this.updateTimer();
            });
        }
        else if(this.state.isPaused) {
            NativeModules.MediaHelper.resume();
            this.updateTimer();
            this.setState({ isPaused: false, isPlaying: true });
            AppStore.resumePlayback(playback);
        }
        else {
            NativeModules.MediaHelper.pause();
            clearInterval(this.interval);
            this.setState({ isPlaying: false, isPaused: true });
            AppStore.pausePlayback(playback);
        }
    }

    updateTimer() {
        this.interval = setInterval(() => {
            let duration = this.state.duration - 100;
            this.setState({ duration: duration });
        }, 100);
    }

    onVolume(){
        NativeModules.MediaHelper.touch();
        NativeModules.MediaHelper.Volume();
    }
    onRepeat()
    {
        if(!this.state.isRepeat)
        {
            NativeModules.MediaHelper.loopStart();
            this.setState({ isRepeat:true });
            ToastAndroid.show('loop', ToastAndroid.LONG);
        }
        else {
            NativeModules.MediaHelper.loopStop();
            this.setState({ isRepeat:false });
            ToastAndroid.show('not loop', ToastAndroid.LONG);
        }
    }
    onForword(){
        NativeModules.MediaHelper.forwordSeek();
    }
    onRewind(){
        NativeModules.MediaHelper.rewindSeek();
    }
    download(playback) {
        let playbackUrl = AppConfig.PLAYBACK_BASE_PATH + encodeURIComponent(PropertyExtractor.getProperty(playback, 'filename'));
        NativeModules.MediaHelper.downloadMedia(playbackUrl, function(){
            AppStore.addToPlaylist(playback);
            ToastAndroid.show('Downloaded', ToastAndroid.LONG);
            NativeModules.MediaHelper.downloadCompleteNotification();
        });
    }



    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderCategories() {
        return this.state.dataSource.map((item, index) => {
            return (
                <TouchableWithoutFeedback onPress={() => this.onCategoryPress(item) }>
                    <View key={index} style={styles.categoryItem}>
                        <Text>{PropertyExtractor.getProperty(item, 'category_name')}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }




    /**
     * @render
     * @return {View} container
     */
    render() {

        var progress = 50;
        let coverImage = AppConfig.IMAGE_BASE_PATH + PropertyExtractor.getProperty(this.props.playback, 'image');
        let playbackId = PropertyExtractor.getProperty(this.props.playback, 'id');
        let title = PropertyExtractor.getProperty(this.props.playback,'audio_title');
        let preacher = PropertyExtractor.getProperty(this.props.playback, 'preacher_name');

        let playIcon = this.state.isPlaying ? "ios-pause" : "ios-play";
        //let coverImage = AppConfig.IMAGE_BASE_PATH + PropertyExtractor.getProperty(rowData, 'image');;
        let color =this.state.isRepeat ? "#4285F4" : "#FFF";


        return (
            <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur2.png')}>
                <Titlebar />
                <View style={{height:2}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHead}>{title}</Text>
                    <Text style={styles.titleSub}>{preacher}</Text>
                </View>
                <View style={styles.albumContainer}>
                    <Image style={styles.albumImage} source={{ uri: coverImage}} />
                    <Text style={styles.albumDuration}>{moment.utc(this.state.duration).format("mm:ss")}</Text>
                </View>
                <View style={styles.playerContainer}>
                    <TouchableOpacity onPress={this.download.bind(this)}>
                        <Image style={{width:24,height:24,marginLeft:45}} source={require('../../../resource/images/addplaylist.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onRepeat.bind(this)}>
                        <Icon name="arrow-swap" style={{marginLeft:20}} size={23} color={color} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onRewind.bind(this)}>
                        <Icon name="ios-rewind" style={{marginLeft:20}} size={23} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.onSong.bind(this)}>
                        <Icon name={playIcon} style={{marginLeft:20}} size={23} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onForword.bind(this)}>
                        <Icon name="ios-fastforward" style={{marginLeft:20}} size={23} color="#FFF" />
                    </TouchableOpacity>
                    <Icon name="shuffle" style={{marginLeft:20}} size={23} color="#FFF" />
                    <TouchableOpacity  onPress={this.onVolume.bind(this)}>
                        <Icon name="volume-high" style={{marginLeft:20}} size={23} color="#FFF" />
                    </TouchableOpacity>
                </View>
                <Image style={styles.detailContainer} source={require('../../../resource/images/gradient-diamond-blur5.png')}>
                    <View style={{flexDirection:'row',width:null,margin:5}}>
                        <Icon name="thumbsup" style={{width:22,height:22,marginLeft:30,marginTop:2.5}} size={23} color="#FFF" />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5}}>30,000</Text>
                        <Icon name="headphone" style={{width:22,height:22,marginLeft:30,marginTop:2.5}} size={23} color="#FFF" />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5,borderRightColor:'#000',borderLeftWidth:2}}>200,000</Text>
                        <Icon name="android-share-alt" style={{width:22,height:22,marginLeft:30,marginTop:2.5}} size={23} color="#FFF" />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5,borderRightColor:'#000',borderLeftWidth:2}}>500</Text>
                    </View>
                </Image>
                <View style={{flex:1}}></View>
                <Advertisement/>
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
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex:1,
        backgroundColor: '#FFF'
    },
    titleWrapper: {
        marginLeft: 10,
    },
    title: {
        color: '#999'
    },
    categoryItem: {
        width: 150,
        margin: 10,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    advetisement:{
        fontSize:15,
        color:"#999"
    },
    titleContainer: {
        marginTop:20,
        flexDirection:'column',
        height:60
        ,alignItems:'center'
    },
    titleHead: {
        fontSize:20,
        color:'#FFF',
        fontWeight:'bold'
    },
    titleSub: {
        fontSize:15,
        color:'#FFF'
    },
    albumContainer: {
        height:290,
        alignItems:'center'
    },
    albumImage: {
        borderWidth:6,
        borderColor:'rgba(255,255,255,0.5)',
        width:200,
        height:200,
        borderRadius:100,
        marginTop:20
    },
    albumDuration: {
        fontSize:30,
        color:'#FFF',
        marginTop:15
    },
    playerContainer: {
        height:40,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.4)',
        alignItems:'center'
    },
    detailContainer: {
        width:null,
        height:40,
        borderWidth:0.5,
        borderColor:'#000'
    },
});
