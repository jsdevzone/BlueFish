/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableWithoutFeedback, ListView,TouchableOpacity,NativeModules } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { Titlebar } from '../shared/Titlebar';
import { Author } from '../shared/Author';
import { Advertisement } from './Advertisement'
import { SlidingQueue } from '../player/SlidingQueue';
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

    onSlidingQueue(author) {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ title: 'SlidingQueue', component: SlidingQueue, props: {
            navigator: this.props.navigator,
            type: 'author',
            author: author
        }});
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
            <View style={styles.rowContainer}>

                <View style={styles.rowColor}>
                    {(()=>{
                        let arr = [];
                        if(this.authors[rowData]) {
                            this.authors[rowData].map((author, index) => {
                                let image = PropertyExtractor.getProperty(author, 'image');
                                if(image != null && image != '') {
                                    let coverImage = "http://bhatkallys.com/wp-content/uploads/sermons/images/" + PropertyExtractor.getProperty(author, 'image');
                                    arr.push(
                                        <TouchableOpacity onPress={() => this.onSlidingQueue(author)}>
                                            <Author key={index} author={author} />
                                        </TouchableOpacity>
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
                <Image style={{flex: 1,width:null}} source={require('../../../resource/images/gradient-diamond.png')}>
                    <View style={styles.dummy}>
                        <Icon name="search" size={25} color="#FFF" style={{marginLeft:10, marginRight: 10}} />
                        <TextInput placeholderTextColor ="#FFF" underlineColorAndroid="rgba(255, 255, 255, 0.3)" style={{flex:1,color:'#FFF'}} placeholder="Search Authors" />
                    </View>
                    <ListView style={{flex:1}}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)} />
                    <Advertisement/>
                </Image>

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
    },
    rowContainer: {
        margin: 5,
        borderRadius:10
    },
    rowColor: {
        marginLeft:6,
        marginRight:6,
        borderRadius:7,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    rowHeader: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 5,
        color:'#FFF'
    },
    dummy: {
        height:40,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        margin: 5,
        marginLeft:11,
        marginRight:11,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
