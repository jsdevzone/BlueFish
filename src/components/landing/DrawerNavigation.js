/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <ScrollView style={{flex: 1}}>
            <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur6.png')}>
                <View style={{height:80,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#FFF'}}>
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="home" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Home</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="bullhorn" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Latest Audios</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="bars" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Categories</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Image style={{marginLeft:15,width:24,height:24}} source={require('../../../resource/images/collections.png')} />
                    <Text style={styles.navItemText}>Collections</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="video-camera" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Videos</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="binoculars" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Surprise Me</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Image style={{marginLeft:15,width:25,height:25}} source={require('../../../resource/images/addplaylist.png')} />
                    <Text style={styles.navItemText}>My Playlist</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="cog" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Settings</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="share-square-o" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Contact Us</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="info-circle" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>About</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="question-circle" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Tutorial</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>
                <View style={styles.navItem}>
                    <Icon style={{marginLeft:15,width:23,height:23}} name="share-alt" color="#FFF" size={23} />
                    <Text style={styles.navItemText}>Share this App</Text>
                    <Icon style={{marginLeft:25}} name="angle-right" color="#FFF" size={23} />
                </View>

                <View style={styles.socialIconsWrapper}>
                    <View style={styles.socialIcon}>
                        <Image style={{width:30,height:30,borderRadius:50,borderColor:'#FFF',borderWidth:2}} source={require('../../../resource/images/social-facebook.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={{width:30,height:30,borderRadius:50,borderColor:'#FFF',borderWidth:2}} source={require('../../../resource/images/social-twitter.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={{width:30,height:30,borderRadius:50,borderColor:'#FFF',borderWidth:2}} source={require('../../../resource/images/social-google.png')} />
                    </View>
                    <View style={styles.socialIcon}>
                        <Image style={{width:30,height:30,borderRadius:50,borderColor:'#FFF',borderWidth:2}} source={require('../../../resource/images/social-youtube.png')} />
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
        backgroundColor: '#10263D',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

});
