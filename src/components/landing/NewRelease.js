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
export class NewRelease extends React.Component {

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
        CategoryStore.getLatestAlbums().then(json => {
            this.setState({ dataSource: json.Audios.Audio });
        });
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderCovers() {
        return this.state.dataSource.map((item, index) => {
            return <CoverTile key={index} cover={item} />
        });
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Latest</Text>
                </View>
                <ScrollView  showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
                    {this.renderCovers()}
                </ScrollView>
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
        padding: 5
    },
    titleWrapper: {
        marginLeft: 10,
    },
    title: {
        color: '#999'
    }
});
