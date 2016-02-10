/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback,  } from 'react-native';
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
        this.props.navigator.push({ title: 'Authors', component: AuthorList, props: { navigator: this.props.navigator }});
    }


    onCategoryPress() {
        this.props.navigator.push({ title: 'Categories', component: Categories, props: { navigator: this.props.navigator }});
    }

    /**
     * @render
     * @return {Comoponent} container
     */
    render() {
        return (
            <Image style={styles.container} source={{uri:'http://www.webdesigndev.com/wp-content/uploads/2014/09/5-Blurred-Backgrounds-Vol.1.jpg'}}>
                <Titlebar />
                <ScrollView tabLabel="Music">
                    <NewRelease {...this.props} />
                    <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center', justifyContent:'center', marginTop: 6}}>
                        <TouchableWithoutFeedback onPress={this.onAuthor.bind(this)}>
                        <Image source={require('../../../resource/images/imagenew.jpg')} style={styles.imageCover}>
                            <Text style={styles.imageText}>AUTHORS</Text>
                        </Image>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.onCategoryPress.bind(this)}>
                        <Image source={require('../../../resource/images/imagenew.jpg')} style={styles.imageCover}>
                            <Text style={styles.imageText}>CATEGORY</Text>
                        </Image>
                        </TouchableWithoutFeedback>
                        <Image source={require('../../../resource/images/imagenew.jpg')} style={styles.imageCover}>
                            <Text style={styles.imageText}>FAVOURITES</Text>
                        </Image>
                        <Image source={require('../../../resource/images/imagenew.jpg')} style={styles.imageCover}>
                            <Text style={styles.imageText}>VIDEOS</Text>
                        </Image>
                    </View>
                    <NewRelease {...this.props} />
                    <View style={styles.socialIconsWrapper}>
                        <View style={styles.socialIcon}>
                            <Icon name="social-facebook" size={18} color="#FFF" />
                        </View>
                        <View style={styles.socialIcon}>
                            <Icon name="social-twitter" size={18} color="#FFF" />
                        </View>
                        <View style={styles.socialIcon}>
                            <Icon name="social-instagram" size={18} color="#FFF" />
                        </View>
                        <View style={styles.socialIcon}>
                            <Icon name="social-google" size={18} color="#FFF" />
                        </View>
                    </View>
                </ScrollView>
                <View style={{height: 50, backgroundColor: '#F4F4F4', borderTopWidth: 1, borderTopColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri:'http://www.internationalfilmindustry.com/images/advertise-banner.jpg'}} style={styles.advetisement}/>
                </View>
                <View style={{height:50, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#ECECEC', flexDirection: 'row'}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="home" size={23} color="#999" />
                        <Text>Home</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="music-note" size={23} color="#999" />
                        <Text>Player</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="search" size={23} color="#999" />
                        <Text>Search</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="ios-cog" size={23} color="#999" />
                        <Text>Settings</Text>
                    </View>
                </View>
            </Image>
        );
    }
}
/*
 * @style
 */
const styles = StyleSheet.create({
     container: {
         flex: 1,
         width:null,
         padding: 0,
         flexDirection: 'column',
         backgroundColor: '#F4F4F4'
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
     },
     imageCover: {
         margin:10,
         width: 130,
         height: 130,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor: '#30B55A'
     },
     imageText: {
         color: '#FFF',
         fontSize:18,
         fontWeight:'bold'
    },
    socialIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    socialIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#30B55A',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    titleWrapper: {
        marginLeft: 20,
    },
    title: {
        color: '#999'
    },
    advetisement:{
        width: 370,
        height: 50,
        backgroundColor: '#30B55A'
    }
});
