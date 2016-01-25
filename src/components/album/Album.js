/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image } from 'react-native';
import { SlidingQueue } from '../player/SlidingQueue';
import { Titlebar } from '../shared/Titlebar';
/**
 * @class CoverTile
 * @extends React.Component
 */
export class Album extends React.Component {

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
                <Image source={{uri: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg'}} style={styles.coverContainer}>
                    <Titlebar />
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={{uri: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg'}} style={styles.coverImage} />
                    </View>
                </Image>
                <View style={styles.albumSongsWrapper}>
                    <SlidingQueue />
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
        alignItems: 'stretch',
        backgroundColor: '#EEEEEE'
    },
    coverContainer: {
        height: 300,
    },
    coverImage: {
        borderWidth: 5,
        borderColor: '#FFF',
        width: 200,
        height: 200,
        opacity: 1
    },
    albumSongsWrapper: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});
