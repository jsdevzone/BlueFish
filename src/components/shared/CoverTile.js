/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={styles.container}>
                <View style={styles.coverImageWrapper}>
                    <Image source={{uri: coverImage}} style={styles.coverImage}></Image>
                </View>
                <Text numberOfLines={1} style={styles.title}>{this.getPropsValue('audio_title')}</Text>
                <Text style={styles.subTitle}>{this.getPropsValue('preacher_name')}</Text>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: 110,
        overflow: 'hidden'
    },
    coverImageWrapper: {
        padding: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        backgroundColor: '#FFF',
        elevation: 5
    },
    coverImage: {
        width: 90,
        height: 90
    },
    title: {
        overflow: 'hidden',
        marginTop: 3,
        flexWrap: 'nowrap'
    },
    subTitle: {
        color: '#a9a9a9',
        fontSize: 12
    }
});
