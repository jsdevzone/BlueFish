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
        this.listDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        /**
         * @state
         */
        this.state = {
            dataSource: this.listDataSource.cloneWithRows([
                /*{ title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},
                { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},
                { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},*/
            ]),
            currentPlayback: null,
            currentPlaybackId: 0
        };
    }

    componentDidMount() {
        CategoryStore.getLatestAlbums().then(json => {
            this.setState({ data: json.Audios.Audio, dataSource: this.listDataSource.cloneWithRows(json.Audios.Audio)});
        });
    }

    getPropsValue(obj, key) {
        if(obj[key] && obj[key].length > 0)
            return obj[key][0];
        else
            return null;
    }

    /**
     * Plays single item from the queue
     *
     * @param {Playbak} playback
     * @return {Void} undefined
     */
    playQueue(playback) {
        let url = "http://bhatkallys.com/wp-content/uploads/sermons/" + encodeURIComponent(this.getPropsValue(playback, 'filename'));
        NativeModules.MediaHelper.playMedia(url, duration => {
            this.setState({ currentPlayback: playback, currentPlaybackId: this.getPropsValue(playback, 'id') });
            AppStore.startPlayback(playback);
        });
    }

    onPopoutQueue(idx) {
        let data = this.state.data;
        //data.splice(idx, 1);
        //this.setState({ data: data, dataSource: this.listDataSource.cloneWithRows(data)})
    }

    /**
     * Transforms each row of list view. [See ListView for more details]
     *
     * @param {Object} rowData
     * @param {Number} sectionID
     * @param {Number} rowID
     */
    renderRow(rowData, sectionID: number, rowID: number) {
        let coverImage = "http://bhatkallys.com/wp-content/uploads/sermons/images/" + this.getPropsValue(rowData, 'image');
        let playIcon = "ios-play";
        if(this.state.currentPlayback != null && (this.state.currentPlaybackId == this.getPropsValue(rowData, 'id'))) {
            playIcon = 'ios-pause';
        }
        let title = "   ";
        let preacher = "   ";

        if(rowData)
        {
            title = this.getPropsValue(rowData,'audio_title');
            preacher =  this.getPropsValue(rowData, 'preacher_name');
        }
        return (
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Image style={styles.cover} source={{uri: coverImage}}>
                        <TouchableWithoutFeedback onPress={() => { this.playQueue(rowData) }}>
                            <View style={{width:30, height: 30, borderRadius: 15, borderColor:'#FFF', borderWidth: 2, alignItems: 'center', justifyContent: 'center'}}>
                                <Icon name={playIcon} style={[styles.playerIcon]} size={25} color="#FFF" />
                            </View>
                        </TouchableWithoutFeedback>
                    </Image>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Text style={{ fontSize: 14, color: '#fff'}}>{title}</Text>
                        <Text style={{ color: '#E1E1E1'}}>{preacher}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.onPopoutQueue(rowID)}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                            <Icon name="trash-b" style={[styles.playerIcon]} size={25} color="#FFF" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Image source={require('../../../resource/images/dashedline.png')} />
            </View>
        );
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <Image source={{uri:'http://wiki-fx.net/wp-content/uploads/2013/08/Black-Background-Collapsar-1080x1920.jpg'}} style={styles.container}>
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
    }
});
