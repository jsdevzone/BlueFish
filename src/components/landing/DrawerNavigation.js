/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback,TouchableOpacity,NativeModules  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LandingPage } from './LandingPage';
import { SlidingQueue } from '../player/SlidingQueue';
import { SongCategories } from './SongCategories';
import { Collections } from '../player/Collections';
import { Videos } from '../player/Videos';
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { Favourites } from './Favourites';
/**
 * @class DrawerNavigation
 * @extends React.Component
 */
export class DrawerNavigation extends React.Component {

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
     * Render single navigation item
     * @param {String} text
     * @return {View} Component
     */
     renderNavigationItem(text) {
         return (
             <View style={styles.navItem}>
                <Text style={styles.navItemText}>{text}</Text>
             </View>
         );
     }

     onHome(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'Home', component: LandingPage, props: { navigator: this.props.navigator }});
     }
     onLatestAudios(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'LatestAudio', component: SlidingQueue, props: { navigator: this.props.navigator }});
     }
     onCategories(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'Categories', component: SongCategories, props: { navigator: this.props.navigator }});
     }
     onCollections(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'collections', component: Collections, props: { navigator: this.props.navigator }});
     }
     onVideo(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'Videos', component: Videos, props: { navigator: this.props.navigator }});
     }
     onAbout(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'About', component: AboutUs, props: { navigator: this.props.navigator }});
     }
     onContact(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'Contact', component: ContactUs, props: { navigator: this.props.navigator }});
     }
     onMyPlaylist(){
         NativeModules.MediaHelper.touch();
         this.props.navigator.push({ title: 'Playlist', component: Favourites, props: { navigator: this.props.navigator }});
     }
    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <ScrollView style={{flex: 1}}>
            <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur6.png')}>
                <View style={{height:80,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#FFF'}}>
                    <Icon style={{marginTop:20}} name="toggle-off" color="#FFF" size={45} />
                </View>

                <TouchableOpacity onPress={this.onHome.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="home" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Home</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onLatestAudios.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="bullhorn" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Latest Audios</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onCategories.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="bars" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Categories</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onCollections.bind(this)}>
                    <View style={styles.navItem}>
                        <Image style={styles.navItemIcon} source={require('../../../resource/images/collections.png')} />
                        <Text style={styles.navItemText}>Collections</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onVideo.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="video-camera" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Videos</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onLatestAudios.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="binoculars" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Surprise Me</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onMyPlaylist.bind(this)}>
                    <View style={styles.navItem}>
                        <Image style={styles.navItemIcon} source={require('../../../resource/images/addplaylist.png')} />
                        <Text style={styles.navItemText}>My Playlist</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <View style={styles.navItem}>
                    <Icon style={styles.navItemIcon} name="cog" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Settings</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>

                <TouchableOpacity onPress={this.onContact.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={{marginLeft:15,width:23,height:23}} name="share-square-o" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>Contact Us</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onAbout.bind(this)}>
                    <View style={styles.navItem}>
                        <Icon style={styles.navItemIcon} name="info-circle" color="#FFF" size={23} />
                        <Text style={styles.navItemText}>About</Text>
                        <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                    </View>
                </TouchableOpacity>

                <View style={styles.navItem}>
                    <Icon style={styles.navItemIcon} name="question-circle" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Tutorial</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={styles.navItemIcon} name="share-alt" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Share this App</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>

                <View style={styles.socialIconsWrapper}>
                    <View style={styles.socialIcon}>
                        <Image style={styles.socialImage} source={require('../../../resource/images/social-facebook.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={{width:30,height:30,borderRadius:50,borderColor:'#FFF',borderWidth:2}} source={require('../../../resource/images/social-twitter.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={styles.socialImage} source={require('../../../resource/images/social-google.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={styles.socialImage} source={require('../../../resource/images/social-youtube.png')} />
                    </View>
                </View>

            </Image>
            </ScrollView>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height:null,
        width:null
    },
    header: {
        padding: 5,
        backgroundColor: '#253C54'
    },
    headerText: {
        color: '#FFF',
        marginLeft: 10
    },
    navCategoryWrapper: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#10263D'
    },
    navCategoryRow: {
        flexDirection: 'row'
    },
    navItem: {
        height:40,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#999'
    },
    navItemText: {
        width:150,
        color:'#FFF',
        fontWeight:'bold',
        fontSize:15,
        marginLeft:60
    },
    navItemIcon:{
        marginLeft:15,
        width:23,
        height:23
    },
    helpBtn: {
        padding: 10,
        backgroundColor: '#253C54',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    helpBtnText: {
        color: '#FFF',
        fontSize: 16
    },
    helpBtnIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#10263D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginRight: 5
    },
    socialIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 20,
    },
    socialIcon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    socialImage:{
        width:30,
        height:30,
        borderRadius:50,
        borderColor:'#FFF',
        borderWidth:2
    },

});
