/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';

import { parseString } from 'xml2js';
import { RequestManager } from '../../core/RequestManager';

 /**
  * @class SlidingPlayer
  * @extends React.Component
  */
export class SlidingPlayer extends React.Component {

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
                <View style={styles.progressBarWrapper}>
                    <Text>00:02</Text>
                    <View style={{flex: 1}}>
                        <Slider
                            style={styles.slider}
                            trackStyle={styles.track}
                            thumbStyle={styles.thumb}
                            minimumTrackTintColor='#31a4db'
                        thumbTouchSize={{width: 50, height: 40}} />
                    </View>
                    <Text>04:25</Text>
                </View>
                <View style={styles.playerControlWrapper}>
                    <TouchableHighlight onPress={()=>{
                        RequestManager.get('http://www.bhatkallys.com/services/ualatest/audioXml.php?lang=ur&stcnt=0&encnt=10&filtertype=audio').then(response=>{
                            parseString(response, (error, result) => {
                                console.log(result);
                            })
                        });
                    }}>
                        <Icon name="ios-shuffle-strong" style={[styles.playerIcon, { marginRight: 25}]} size={35} color="#4F8EF7" />
                    </TouchableHighlight>
                    <View style={{flex: 1}}></View>
                    <Icon name="ios-rewind" style={[styles.playerIcon, { marginRight: 25}]} size={35} color="#4F8EF7" />
                    <View style={{borderRadius: 25, alignItems: 'center', paddingTop: 6, paddingLeft: 6, width:50, height: 50, borderColor: '#E2E2E2', borderWidth: 1}}>
                        <Icon name="play" size={35} style={styles.playerIcon} color="#4F8EF7" />
                    </View>
                    <Icon name="ios-fastforward" style={[styles.playerIcon, { marginLeft: 25}]} size={35} color="#4F8EF7" />
                    <View style={{flex: 1}}></View>
                    <Icon name="ios-infinite" style={[styles.playerIcon, { marginRight: 5}]} size={35} color="#4F8EF7" />
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
        flexDirection: 'column',
        alignItems: 'stretch',
        height: 100,
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1
    },
    cover: {
        width: 50,
        backgroundColor: 'red'
    },
    progressBarWrapper: {
        padding: 5,
        borderTopColor: '#F5F5F5',
        borderBottomColor: '#F5F5F5',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    slider: {
        height: 20,
        marginLeft: 10,
        marginRight: 10
    },
    track: {
        height: 2,
        backgroundColor: '#989899',
    },
    thumb: {
        width: 10,
        height: 10,
        backgroundColor: '#31a4db',
        borderRadius: 10 / 2,
        shadowColor: '#31a4db',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    playerControlWrapper: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    playerIcon: {
        marginLeft: 5,
        marginRight: 5
    }
});
