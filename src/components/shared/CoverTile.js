/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image } from 'react-native';
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
            <View style={styles.container}>
                <View style={styles.coverImageWrapper}>
                    <Image source={{uri: coverImage}} style={styles.coverImage}>

                    </Image>
                </View>
                <View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
                    <Text style={styles.title}>{this.getPropsValue('audio_title')}</Text>
                    <Text style={styles.subTitle}>{this.getPropsValue('preacher_name')}</Text>
                </View>
                <View style={{ paddingRight: 10, paddingLeft: 10}}>
                    <Icon name="plus" color="#D8D8D8" size={20} />
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1
    },
    coverImageWrapper: {
        padding: 5,
        backgroundColor: '#F4F4F4',
        borderColor: '#CCC',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverImage: {
        width: 50,
        height: 50
    },
    title: {
        color: '#000',
        overflow: 'hidden',
        marginTop: 5
    },
    subTitle: {
        color: '#a9a9a9'
    }
});
