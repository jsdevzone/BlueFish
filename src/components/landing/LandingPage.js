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
import { Categories } from './Categories';
import { AppStore } from '../../stores/AppStore';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;
const MAX_HEIGHT = DEVICE_HEIGHT - 100;
const MIN_HEIGHT = 60;

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
            <Titlebar />
                <Image source={{uri: 'http://thumbs.dreamstime.com/t/fresh-green-grass-panorama-natural-blur-nature-background-light-sparkles-glitter-super-high-resolution-premium-quality-50458661.jpg'}} style={styles.landingCover}/>
                <ScrollableTabView>
                    <ScrollView tabLabel="Music">
                        <View style={{padding: 14,borderBottomWidth: 1, borderBottomColor:"#E1E1EE"}}>
                            <Text>New Releases</Text>
                        </View>
                        <NewRelease />
                        <View style={{padding: 14, borderTopWidth: 1, borderTopColor:'#E1E1E1',borderBottomWidth: 1, borderBottomColor:"#E1E1EE"}}>
                            <Text>New Releases</Text>
                        </View>
                        <NewRelease />
                        <NewRelease />
                    </ScrollView>
                    <ScrollView tabLabel="Categories">
                        <Categories />
                    </ScrollView>
                    <View tabLabel="Author" />
                    <View tabLabel="Topics" />
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
         backgroundColor: '#FFF'
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
