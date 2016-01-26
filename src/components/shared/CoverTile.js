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

    getPropsValue(key) {
        if(this.props.cover[key] && this.props.cover[key].length > 0)
            return this.props.cover[key][0];
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        let coverImage = "http://bhatkallys.com/wp-content/uploads/sermons/images/" + this.getPropsValue('image');
        return (
            <View style={styles.container}>
                <Image source={{uri: coverImage}} style={styles.coverImage} />
                <Text style={styles.title}>{this.getPropsValue('audio_title')}</Text>
                <Text style={styles.subTitle}>{this.getPropsValue('preacher_name')}</Text>
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
