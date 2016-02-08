/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableWithoutFeedback, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { Titlebar } from '../shared/Titlebar';
import { Author } from '../shared/Author';
/**
 * @class NewRelease
 * @extends React.Component
 */
export class AuthorList extends React.Component {

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
        CategoryStore.getAuthors().then(this.categoryLoaded.bind(this));
    }

    categoryLoaded(json) {
        let data = json.Authors.Author;
        data.map(item => {
            let name = PropertyExtractor.getProperty(item, 'preacher_title');
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
        this.props.navigator.push({ id:'', title: '', component: null, props: { category: category } });
    }

    /**
     * Render each cover in the state array
     * @return {Array<CoverTile>} covers
     */
    renderRow(rowData) {
        let component = (
            <View>
                <View style={{padding: 5, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', borderTopColor: '#E2E2E2', borderTopWidth: 1}}>
                    <Text>{rowData}</Text>
                </View>
                <View style={{padding: 10, backgroundColor: '#F4F4F4', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {(()=>{
                        let arr = [];
                        if(this.authors[rowData]) {
                            this.authors[rowData].map((author, index) => {
                                let image = PropertyExtractor.getProperty(author, 'image');
                                if(image != null && image != '') {
                                    let coverImage = "http://bhatkallys.com/wp-content/uploads/sermons/images/" + PropertyExtractor.getProperty(author, 'image');
                                    arr.push(
                                        <Author key={index} author={author} />
                                    );
                                }
                            });
                        }
                        return arr;
                    })()}
                </View>
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
            <View style={{backgroundColor:'#FFF', flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="search" size={25} color="#999" style={{marginLeft:10, marginRight: 10}} />
            <TextInput underlineColorAndroid="#FFF" style={{flex:1}} placeholder="Search Authors" />
            </View>
            <ListView style={{flex:1}}
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
