/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 /**
  * @class Titlebar
  * @extends React.Component
  */
export class Titlebar extends React.Component {

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
                <Icon name="ios-list-outline" size={25} color="#FFF" style={styles.icon}  />
                <Text style={styles.title}> Menu</Text>
                <View style={styles.titleFlex}/>
                <View style={styles.rightWrapper}>
                    <Icon name="search" size={25} color="#FFF" style={styles.icon}  />
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
        height: 65,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#14324A',
        alignItems: 'center'
    },
    icon: {
        color: '#FFF',
        marginLeft: 10,
        marginTop: 5
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 2,
        fontFamily: 'Tahoma'
    },
    titleFlex: {
        flex: 1
    },
    rightWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    }
});
