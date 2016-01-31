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
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Home</Text>
                </View>
                <View style={[styles.navCategoryWrapper]}>
                    <View style={styles.navCategoryRow}>
                        <View style={styles.navItem}>
                            <Icon name="home" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Home</Text>
                        </View>
                        <View style={styles.navItem}>
                            <Icon name="info-circle" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>About Us</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.navCategoryWrapper, { borderTopWidth: 0}]}>
                    <View style={styles.navCategoryRow}>
                        <View style={styles.navItem}>
                            <Icon name="phone" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Contact Us</Text>
                        </View>
                        <View style={styles.navItem}>
                            <Icon name="comment" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Feedback</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Audios</Text>
                </View>
                <View style={[styles.navCategoryWrapper]}>
                    <View style={styles.navCategoryRow}>
                        <View style={styles.navItem}>
                            <Icon name="music" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Lastest</Text>
                        </View>
                        <View style={styles.navItem}>
                            <Icon name="user" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Categories</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.navCategoryWrapper, { borderTopWidth: 0}]}>
                    <View style={styles.navCategoryRow}>
                        <View style={styles.navItem}>
                            <Icon name="file-text" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Author</Text>
                        </View>
                        <View style={styles.navItem}>
                            <Icon name="tasks" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Topics</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Other</Text>
                </View>
                <View style={[styles.navCategoryWrapper]}>
                    <View style={styles.navCategoryRow}>
                        <View style={styles.navItem}>
                            <Icon name="video-camera" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Videos </Text>
                        </View>
                        <View style={styles.navItem}>
                            <Icon name="heart" color="#FFF" size={35} />
                            <Text style={styles.navItemText}>Favourites</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.socialIconsWrapper}>
                    <View style={styles.socialIcon}>
                        <Icon name="facebook" size={18} color="#FFF" />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="twitter" size={18} color="#FFF" />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="instagram" size={18} color="#FFF" />
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="google" size={18} color="#FFF" />
                    </View>
                </View>
                <View style={styles.helpBtn}>
                    <View style={styles.helpBtnIcon}>
                        <Icon name="question" color="#FFF" size={18} />
                    </View>
                    <Text style={styles.helpBtnText}>Help</Text>
                </View>
            </View>
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
        backgroundColor:'#14324A',
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
        flex: 1,
        borderColor: '#10263D',
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    navItemText: {
        color: '#FFF',
        fontFamily: 'Tahoma',
        fontSize: 13
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
        paddingTop: 50,
        paddingBottom: 50
    },
    socialIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#10263D',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

});
