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
import { PropertyExtractor } from '../../core/PropertyExtractor';
/**
 * @class NewRelease
 * @extends React.Component
 */
export class AuthroList extends React.Component {

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

    componentDidMount() {
        CategoryStore.getCategories().then(json => this.categoryLoaded.bind(this));
    }

    categoryLoaded(json) {
        this.setState({ dataSource: json.Categories.Category });
    }

    onCategoryPress(category) {
        this.props.navigator.push({ id:'', title: '', component: null, props: { category: category } });
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderCategories() {
        return this.state.dataSource.map((item, index) => {
            return (
                <TouchableWithoutFeedback onPress={() => this.onCategoryPress(item) }>
                    <View key={index} style={styles.categoryItem}>
                        <Text>{PropertyExtractor.getProperty(item, 'category_name')}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
                {this.renderCategories()}
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
    },
    categoryItem: {
        width: 150,
        margin: 10,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
