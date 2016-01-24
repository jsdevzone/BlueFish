/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image } from 'react-native';

/**
 * @class CoverTile
 * @extends React.Component
 */
export class CoverTile extends React.Component {

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
                <Image source={{uri: this.props.cover.cover}} style={styles.coverImage} />
                <Text style={styles.title}>{this.props.cover.title}</Text>
                <Text style={styles.subTitle}>{this.props.cover.subTitle}</Text>
            </View>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        width: 120,
        margin: 5,
        flexDirection: 'column'
    },
    coverImage: {
        backgroundColor: '#FFF',
        width: 120,
        height: 120
    },
    title: {
        color: '#000',
        overflow: 'hidden'
    },
    subTitle: {
        color: '#a9a9a9'
    }
});
