/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, ScrollView } from 'react-native';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
/**
 * @class NewRelease
 * @extends React.Component
 */
export class Categories extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {
            dataSource: []
        };
    }

    getPropsValue(obj, key) {
        if(obj[key] && obj[key].length > 0)
            return obj[key][0];
        else
            return null;
    }

    componentDidMount() {
        CategoryStore.getCategories().then(json => {
            this.setState({ dataSource: json.Categories.Category });
        });
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderCovers() {
        return this.state.dataSource.map((item, index) => {
            return (
                <View key={index} style={{width: 150, margin: 10, borderColor: '#F4F4F4', borderWidth: 1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>{this.getPropsValue(item, 'category_name')}</Text>
                </View>
            )
        });
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <View style={styles.container}>
                {this.renderCovers()}
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
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#FFF'
    },
    titleWrapper: {
        marginLeft: 10,
    },
    title: {
        color: '#999'
    }
});
