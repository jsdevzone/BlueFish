/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, ScrollView ,Image} from 'react-native';
import { CoverTile } from '../shared/CoverTile';
import { CategoryStore } from '../../stores/CategoryStore';
import { PropertyExtractor } from '../../core/PropertyExtractor';
import { Titlebar } from '../shared/Titlebar';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * @class NewRelease
 * @extends React.Component
 */
export class Player extends React.Component {

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
            <Image style={styles.container} source={require('../../../resource/images/gradient-diamond-blur2.png')}>
                <Titlebar />
                <View style={{height:2}}/>
                <View style={{marginTop:20, flexDirection:'column',height:60,alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'#FFF',fontWeight:'bold'}}>Zindagi Guzarne Ka Rasta</Text>
                    <Text style={{fontSize:15,color:'#FFF'}}>Abdul Bari Nadvi Bhatkal</Text>
                </View>
                <View style={{height:290,alignItems:'center'}}>
                    <Image style={{borderWidth:6, borderColor:'rgba(255,255,255,0.5)',width:200,height:200,borderRadius:100,marginTop:20}} source={require('../../../resource/images/mufti.jpeg')}></Image>
                    <Text style={{fontSize:30,color:'#FFF',marginTop:15}}>22:34</Text>
                </View>
                <View style={{height:40,flexDirection:'row',backgroundColor:'rgba(0,0,0,0.4)',alignItems:'center'}}>
                    <Image style={{width:24,height:24,marginLeft:45}} source={require('../../../resource/images/addplaylist.png')}></Image>
                    <Icon name="arrow-swap" style={{marginLeft:20}} size={23} color="#FFF" />
                    <Icon name="ios-rewind" style={{marginLeft:20}} size={23} color="#FFF" />
                    <Icon name="android-arrow-dropright-circle" style={{marginLeft:20}} size={23} color="#FFF" />
                    <Icon name="ios-fastforward" style={{marginLeft:20}} size={23} color="#FFF" />
                    <Icon name="shuffle" style={{marginLeft:20}} size={23} color="#FFF" />
                    <Icon name="volume-high" style={{marginLeft:20}} size={23} color="#FFF" />
                </View>
                <Image style={{width:null,height:40,borderWidth:0.5,borderColor:'#000'}} source={require('../../../resource/images/gradient-diamond-blur5.png')}>
                    <View style={{flexDirection:'row',width:null,margin:5}}>
                        <Image style={{width:22,height:22,marginLeft:30,marginTop:2.5}} source={require('../../../resource/images/thumbsup.png')} />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5}}>30,000</Text>
                        <Image style={{width:22,height:22,marginLeft:30,marginTop:2.5}} source={require('../../../resource/images/thumbsup.png')} />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5,borderRightColor:'#000',borderLeftWidth:2}}>200,000</Text>
                        <Image style={{width:22,height:22,marginLeft:30,marginTop:2.5}} source={require('../../../resource/images/thumbsup.png')} />
                        <Text style={{color:'#FFF',fontWeight:'bold',marginLeft:10,marginTop:5,borderRightColor:'#000',borderLeftWidth:2}}>500</Text>
                    </View>
                </Image>
                <View style={{height:11}}></View>
                <View style={{height: 50, backgroundColor: '#380428', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.advetisement}>Ad Banner</Text>
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
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex:1,
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
    },
    advetisement:{
        fontSize:15,
        color:"#999"
    }
});
