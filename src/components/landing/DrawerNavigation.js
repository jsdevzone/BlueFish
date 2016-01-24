/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image } from 'react-native';

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
     * @render
     * @return {View} container
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profile} />
                <View style={styles.adBar} />
                <View style={styles.segment}>
                    <Text style={styles.link}>Home</Text>
                    <Text style={styles.link}>Account</Text>
                </View>
                <View style={styles.segment}>
                    <Text style={styles.link}>New Release</Text>
                    <Text style={styles.link}>Radio</Text>
                    <Text style={styles.link}>Favourites</Text>
                    <Text style={styles.link}>Surprise Me</Text>
                </View>
                <View style={styles.segment}>
                    <Text style={styles.link}>Language</Text>
                    <Text style={styles.link}>Settings</Text>
                </View>
            </View>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    profile: {
        height: 120,
        backgroundColor: '#000'
    },
    adBar: {
        backgroundColor: '#3486AB',
        height: 50
    },
    segment: {
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
    },
    link: {
        padding: 10,
        marginLeft: 10,
        color: '#888',
        fontSize: 20
    }
});
