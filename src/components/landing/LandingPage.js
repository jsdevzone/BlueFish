/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SlidingUpPanel from '../ux/SlidingPanel';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * Application Components
 */
import { NewRelease } from './NewRelease';
import { SongCategories } from './SongCategories';
import { Titlebar } from '../shared/Titlebar';
import { SlidingQueue } from '../player/SlidingQueue';
import { SlidingPlayer } from '../player/SlidingPlayer';
import { AppStore } from '../../stores/AppStore';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;
const MAX_HEIGHT = DEVICE_HEIGHT - 100;
const MIN_HEIGHT = 100;

/**
 * @class LandingPage
 * @extends React.Component
 */
export class LandingPage extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {};
    }

    /**
     * @render
     * @return {Comoponent} container
     */
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'http://info.umkc.edu/unews/wp-content/uploads/2010/08/eminem-recovery-album-cover.jpg'}} style={styles.landingCover}>
                    <Titlebar />
                </Image>
                <ScrollableTabView>
                    <ScrollView tabLabel="Music">
                        <NewRelease />
                        <View style={{backgroundColor: '#FFF', borderWidth: 1,
                        borderColor: '#D4D4D4', margin: 10, borderRadius: 4}}>
                            <View style={{flexDirection: 'row', borderBottomColor: '#ECECEC', borderBottomWidth:1}}>
                                <View style={{flex: 1, flexDirection: 'row', borderRightColor: '#ECECEC', borderRightWidth:1, padding: 10}}>
                                    <Icon name="ios-musical-notes" style={[styles.playerIcon]} size={35} color="#4F8EF7" />
                                    <Text style={{fontSize: 18, marginLeft: 5, marginTop: 5}}>New Releases</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', borderRightColor: '#ECECEC', borderRightWidth:0, padding: 10}}>
                                    <Icon name="levels" style={[styles.playerIcon]} size={35} color="#4F8EF7" />
                                    <Text style={{fontSize: 18, marginLeft: 5, marginTop: 5}}>Categories</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 1, flexDirection: 'row',borderRightColor: '#ECECEC', borderRightWidth:1, padding: 10}}>
                                    <Icon name="android-wifi" style={[styles.playerIcon]} size={35} color="#4F8EF7" />
                                    <Text style={{fontSize: 18, marginLeft: 5, marginTop: 5}}>Radio</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row',borderRightColor: '#ECECEC', borderRightWidth:0, padding: 10}}>
                                    <Icon name="steam" style={[styles.playerIcon]} size={35} color="#4F8EF7" />
                                    <Text style={{fontSize: 18, marginLeft: 5, marginTop: 5}}>Genres</Text>
                                </View>
                            </View>
                        </View>
                        <NewRelease />
                        <NewRelease />
                    </ScrollView>
                    <View tabLabel="Video" />
                    <View tabLabel="Radio" />
                </ScrollableTabView>
                <SlidingUpPanel
                    containerMaximumHeight={MAX_HEIGHT}
                    containerBackgroundColor={'green'}
                    handlerHeight={MIN_HEIGHT}
                    handlerDefaultView={<SlidingPlayer/>}>
                        <SlidingQueue />
                </SlidingUpPanel>
            </View>
        );
    }
}
/*
 * @style
 */
const styles = StyleSheet.create({
     container: {
         flex: 1,
         padding: 0,
         flexDirection: 'column',
         backgroundColor: '#EFEEEE'
     },
     landingCover: {
         width: null,
         height: 120
     },
     tabStripe: {
         flexDirection: 'row',
         paddingLeft: 10,
         paddingRight: 10,
         backgroundColor: '#FFF',
         borderBottomWidth: 1,
         borderBottomColor: '#E5E5E5'
     },
     tab: {
         padding: 5
     },
     tabText: {
         fontSize: 20,
         color: '#999'
     }

});
