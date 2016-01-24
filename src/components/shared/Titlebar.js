/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Icon name="list" size={65} color="#FFF" style={styles.icon}  />
                <Text style={styles.title}>Blue Fish Menu</Text>
                <View style={styles.titleFlex}/>
                <View style={styles.rightWrapper}>
                    <Icon name="search" size={55} color="#FFF" style={styles.icon}  />
                    <Icon name="cog" size={55} color="#FFF" style={styles.icon}  />
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
        height: 55,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        color: '#FFF',
        width: 32,
        height: 32,
        fontSize: 30,
        marginLeft: 10,
        marginTop: 5
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 5
    },
    titleFlex: {
        flex: 1
    },
    rightWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
