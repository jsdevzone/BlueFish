/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, ScrollView, ListView, TouchableWithoutFeedback,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { Titlebar } from '../shared/Titlebar';
import { SlidingQueue } from '../player/SlidingQueue';
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

        this.data = [];
        this.letters = [];
        this.authors = {};
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        /**
         * @state
         */
        this.state = {
            dataSource: this.dataSource.cloneWithRows(this.data),
            authors: {}
        };
    }

    componentDidMount() {
        CategoryStore.getCategories().then(this.categoryLoaded.bind(this));
    }

    categoryLoaded(json) {
        let data = json.Categories.Category;
        data.map(item => {
            let name = PropertyExtractor.getProperty(item, 'category_name');
            let letter = name.substr(0, 1).toUpperCase();
            if(this.letters.indexOf(letter) == -1) {
                this.letters.push(letter);
            }
            if(!this.authors[letter])
                this.authors[letter] = new Array();
            this.authors[letter].push(item);
        });
        this.setState({ dataSource: this.dataSource.cloneWithRows(this.letters) });
    }

    onCategoryPress(category) {
        this.props.navigator.push({ title: 'New Releases', component: SlidingQueue, props: { navigator: this.props.navigator } });
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData) {
        let component = (
            <View>

                <Image source={require('../../../resource/images/shelf5.jpg')} style={{width:null,height:100,padding: 10,elevation:5, backgroundColor: '#F4F4F4', flexDirection: 'row', flexWrap: 'wrap'}}>
                {(()=>{
                    let arr = [];
                    if(this.authors[rowData]) {
                        this.authors[rowData].map((author, index) => {
                            arr.push(
                                <TouchableWithoutFeedback onPress={this.onCategoryPress.bind(this)}>
                                <Image source={require('../../../resource/images/coverAlbum.png')} key={index} style={{ width:120,height:77, padding: 15, backgroundColor:'#FFF', elevation: 5, marginLeft: 5, alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{textAlign:'center',marginRight:30,color:'#FFF'}}>{PropertyExtractor.getProperty(author, 'category_name')}</Text>
                                </Image>
                                </TouchableWithoutFeedback>
                            );
                        });
                    }
                    return arr;
                })()}
                </Image>
            </View>
        )
        return component;
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <View style={styles.container}>
            <Titlebar/>
            <ListView style={{flex: 1}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
                <View style={{height:50, backgroundColor: '#FFF', borderTopWidth: 1, borderTopColor: '#ECECEC', flexDirection: 'row'}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="home" size={23} color="#999" />
                        <Text>Home</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="music-note" size={23} color="#999" />
                        <Text>Player</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="search" size={23} color="#999" />
                        <Text>Search</Text>
                    </View>
                    <View style={{width: 1, backgroundColor:'#CCC', marginTop: 10, marginBottom: 10}} />
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="ios-cog" size={23} color="#999" />
                        <Text>Settings</Text>
                    </View>
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
        alignItems: 'stretch',
        backgroundColor: '#E1E1E1',
        flex: 1
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
