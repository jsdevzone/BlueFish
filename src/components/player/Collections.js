/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, ListView, Image, ToastAndroid,
     TouchableWithoutFeedback, NativeModules,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

//stores
import { CategoryStore } from '../../stores/CategoryStore';
import { AppStore } from '../../stores/AppStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { AppConfig } from '../../constants/AppConfig';
import { Player } from './Player';
import { Titlebar } from '../shared/Titlebar';
import { SlidingPlayer } from './SlidingPlayer';
import { Advertisement } from '../landing/Advertisement';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;

 /**
  * @class SlidingQueue
  * @extends React.Component
  */

  export class Collections extends React.Component {
      /**
       * @constructor
       */
     constructor(props) {
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

     onPlayer() {
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'player', component: Player, props: { navigator: this.props.navigator }});
     }

     componentDidMount() {

                 if(this.props.type=='category') {
                     CategoryStore.getCategoryPlaybaks(this.props.catId).then(json => {
                         this.setState({ data: json.Audios.Audio, dataSource: this.listDataSource.cloneWithRows(json.Audios.Audio)});
                     });
                 }
                 else {
                     CategoryStore.getLatestAlbums().then(json => {
                         AppStore.loadPlayback(json.Audios.Audio[0]);
                         this.setState({ data: json.Audios.Audio, dataSource: this.listDataSource.cloneWithRows(json.Audios.Audio)});
                     });
                 }
     }

     playQueue(playback) {
         let playbackUrl = AppConfig.PLAYBACK_BASE_PATH + encodeURIComponent(PropertyExtractor.getProperty(playback, 'filename'));


         AppStore.startPlayback(playback);


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
         else{

         }

         return (
             <View style={styles.row}>
                 <View style={styles.titleWrapper}>
                     <TouchableOpacity onPress={this.onPlayer.bind(this)}>
                     <View style={styles.queueItemWrapper}>
                         <Text style={styles.queueItemTitle} numberOfLines={1}>{title}</Text>
                         <Text style={styles.queueItemPreacher}>{preacher}</Text>
                     </View>
                     </TouchableOpacity>

                         <View style={styles.queueItemDeleteBtn}>
                             <TouchableOpacity onPress={() => this.playQueue(rowData)}>
                                 <Icon name={playIcon} style={[styles.playerIcon]} size={23} color="#FFF" />
                             </TouchableOpacity>
                             <Icon name="android-download" style={[styles.playerIcon]} size={23} color="#FFF" />
                             <Icon name="android-share-alt" style={[styles.playerIcon]} size={23} color="#FFF" />
                         </View>

                 </View>
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
             <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur4.png')}>
             <Titlebar/>
             <SlidingPlayer img={this.props.img} title={this.props.title} count={250} />
             <View style={{height: 2, backgroundColor:'#D7523B'}}/>
                 <ListView dataSource={this.state.dataSource}
                     renderRow={this.renderRow.bind(this)}
                     style={{flex: 1}} />

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
          flex: 1,
          width: DEVICE_WIDTH,
          flexDirection: 'column'
      },
      row: {
          padding: 10,
          flexDirection: 'column',
          alignItems: 'stretch',
          backgroundColor:'rgba(0,0,0,0.4)',
          marginTop:2
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
          borderColor:'#999',
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center'
      },
      queueItemWrapper: {
          flex: 1,
          width:250,
          justifyContent: 'center'
      },
      queueItemTitle: {
          fontSize: 14,
          color: '#FFF',
          fontWeight:'bold'
      },
      queueItemPreacher: {
          color: '#ccc'
      },
      queueItemDeleteBtn: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20
      },
      advetisement:{
          fontSize:15,
          color:"#999"
      }
  });
