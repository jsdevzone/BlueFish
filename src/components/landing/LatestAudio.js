'use strict';
/*
 * @Author Jasim
 *
 * Urudu Radio
 *
 * Copyright (C) YoYoDyne Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import React, { View, Text, StyleSheet, Image, ListView ,TouchableOpacity, ToastAndroid,NativeModules} from 'react-native';
import { Player } from '../player/Player';
import { SlidingQueue } from '../player/SlidingQueue';
import { CategoryStore } from '../../stores/CategoryStore';

import { PropertyExtractor } from '../../core/PropertyExtractor';
import { AppConfig } from '../../constants/AppConfig';
/**
 * @class TitleBar
 * @extends React.Component
 */
export class LatestAudio extends React.Component {
    /**
     * @constructor
     */
    constructor() {
        super();

        this.data = [];
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        /**
         * @state
         */
        this.state = {
            dataSource: this.dataSource.cloneWithRows(this.data),
            authors: {}
        };

    }

    componentDidMount() {
        CategoryStore.getLatestAlbums().then(this.onPlaybacksLoaded.bind(this));
    }

    onPlaybacksLoaded(json) {
        this.data = json.Audios.Audio;
        ///ToastAndroid.show(JSON.stringify(json), ToastAndroid.LONG);
        this.setState({ data: json.Audios.Audio, dataSource: this.dataSource.cloneWithRows(this.data) });
    }

    onPlayer() {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'Player', component: Player, props: { navigator: this.props.navigator }});
    }

    onAuthor() {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'Author', component: SlidingQueue, props: { navigator: this.props.navigator }});
    }

    onRowPress(playback) {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'Player', component: Player, props: {
            navigator: this.props.navigator,
            playback: playback
        }});
    }

    renderRow(rowData) {
        let coverImage = AppConfig.IMAGE_BASE_PATH + PropertyExtractor.getProperty(rowData, 'image');
        let playbackId = PropertyExtractor.getProperty(rowData, 'id');
        let title = PropertyExtractor.getProperty(rowData,'audio_title');
        let preacher = PropertyExtractor.getProperty(rowData, 'preacher_name');


        let component = (
            <TouchableOpacity onPress={() => this.onRowPress(rowData)}>
                <View style={styles.rowContainer}>
                    <Image style={styles.rowImage} source={{ uri: coverImage }}/>
                    <View style={styles.rowTextContaier}>
                        <Text style={styles.textHead}>{title}</Text>
                        <Text style={styles.textSub}>{preacher}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return component;
    }
    /**
     * @render
     * @return {View} Component
     */
     render() {
         return (
             <Image style={[styles.container]}
             source={require('../../../resource/images/gradient-diamond.png')}>
             <View style={{height: 30, justifyContent: 'center', paddingLeft: 10}}>
                <Text style={{color:'white'}}>Latest Audio</Text>
             </View>
             <View style={styles.listContainer}>

                <ListView style={{flex:1}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
                <TouchableOpacity onPress={this.onAuthor.bind(this)}>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Text style={{color: '#FFF'}}>More</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
         margin: 8,
         height: 255,
         width: null,
         alignItems: 'stretch',
     },
     rowContainer: {
         flexDirection: 'row',
         padding: 10
     },
     buttonWrapper: {
         flexDirection: 'row',
         alignItems: 'flex-end',
         justifyContent: 'flex-end',
         padding: 5
     },
     button: {
         backgroundColor: '#7C3539',
         paddingTop: 4,
         paddingBottom: 4,
         paddingLeft: 8,
         paddingRight: 8
     },
     rowImage: {
         width: 40,
         height: 40 ,
         borderColor: '#FFF',
         borderWidth: 2,
         borderRadius: 25
     },
     rowTextContaier: {
         flex:1,
         marginLeft: 10,
         marginTop: 1
     },
     textHead: {
         color:'white',
         fontSize: 13,
         fontWeight:'bold',
         marginTop:4
     },
     textSub: {
         color:'white',
         fontSize: 10
     },
     listContainer: {
         backgroundColor:'rgba(0,0,0,0.5)',
         flex: 1,
         alignItems: 'stretch'
     },
});
