'use strict';
/*
 * @Author Jasim
 *
 * Urudu Radio
 *
 * Copyright (C) YoYoDyne Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import React, { View, Text, StyleSheet, Image } from 'react-native';


/**
 * @class TitleBar
 * @extends React.Component
 */
export class Advertisement extends React.Component {
    /**
     * @render
     * @return {View} Component
     */
     render() {
         return (
             <View style={[styles.container]}>
                <Text style={styles.text}>Ad Banner</Text>
             </View>
         );
     }
}

/**
 * @style
 */
const styles = StyleSheet.create({
     container: {
        backgroundColor: '#380428',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color:'#FFF'
    }
});
