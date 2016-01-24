/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, } from 'react-native';

/**
 * @class SongCategories
 * @extends React.Component
 */
export class SongCategories extends React.Component {

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
     * @return {Component} container
     */
    render() {
        return (
            <View style={styles.container} />
        );
    }
}

/**
 * @style
 */
 const styles = StyleSheet.create({
     container: {}
 });
