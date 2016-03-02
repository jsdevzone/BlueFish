/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity,NativeModules } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SlidingUpPanel from '../ux/SlidingPanel';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * Application Components
 */
import { NewRelease } from './NewRelease';
import {LandingIcons} from './LandingIcons';
import {LatestAudio} from './LatestAudio';
import {PopularSpeakers} from './PopularSpeakers';
import {Advertisement} from './Advertisement';
import { SongCategories } from './SongCategories';
import { Titlebar } from '../shared/Titlebar';
import { SlidingQueue } from '../player/SlidingQueue';
import { SlidingPlayer } from '../player/SlidingPlayer';
import { Categories } from './Categories';
import { AuthorList } from './AuthorList';
import { Topics } from './Topics';
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

    onAuthor() {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'Authors', component: AuthorList, props: { navigator: this.props.navigator }});
    }


    onCategoryPress() {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'Categories', component: SongCategories, props: { navigator: this.props.navigator }});
    }

    onTouch(){
        NativeModules.MediaHelper.touch();
    }

    /**
     * @render
     * @return {Comoponent} container
     */
    render() {
        return (
            <View style={styles.container}>
                <Titlebar />
                <ScrollView style={{flex:1}}>
                <ScrollView  showsHorizontalScrollIndicator={true} horizontal={true}>
                    <View style={styles.addBannerContainer}>
                    <TouchableOpacity onPress={this.onTouch.bind(this)}>
                        <Image style={{width:150,height:80,borderRadius:10}} source={require('../../../resource/images/ad2.png')}></Image>
                    </TouchableOpacity>
                        <Image style={{width:150,height:80,marginLeft:5,borderRadius:10}} source={require('../../../resource/images/ad3.png')}></Image>
                        <Image style={{width:150,height:80,marginLeft:5,borderRadius:10}} source={require('../../../resource/images/ad1.jpg')}></Image>
                    </View>
                </ScrollView>
                <LandingIcons {...this.props} />
                <LatestAudio {...this.props} />
                <PopularSpeakers />
                </ScrollView>
                <Advertisement />
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
     alignItems: 'stretch',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   addBannerContainer: {
       flexDirection:'row',
       height:100,
       alignItems:'center',
       marginLeft:7
   },
 });
