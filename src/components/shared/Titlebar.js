/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, TouchableWithoutFeedback,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { AppStore } from '../../stores/AppStore';

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

    onMenuIconPress() {
        AppStore.openDrawer();
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <Image style={styles.container} source={require('../../../resource/images/titleBar.jpg')}>
                <View style={styles.titleFlex}>
                    <Text style={styles.titleHead}>{this.props.title || 'Urudu Audio'}</Text>
                </View>
                <View style={styles.rightWrapper}>
                    <Icon name="search" size={25} color="#FFF" style={styles.icon}  />
                </View>
            </Image>
        );
    }
}

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        width:null,
        height: 55,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#30B55A',
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
        alignItems:'center',
        fontFamily: 'Tahoma'
    },
    titleHead: {
        color: '#FFF',
        fontSize: 20,
        flex: 1,
        alignItems:'center',
        fontFamily: 'Tahoma',
        fontWeight:'bold',
        justifyContent: 'center'
    },
    titleFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    }
});
