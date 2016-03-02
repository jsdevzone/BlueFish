/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,NativeModules  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SlidingQueue } from '../player/SlidingQueue';
import { Advertisement } from './Advertisement';
/**
 * Application Components
 */
import { Titlebar } from '../shared/Titlebar';

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

    onCategoryPress(title, catId) {
        NativeModules.MediaHelper.touch();
        this.props.navigator.push({ id:1, title: title, component: SlidingQueue, props: {
            title: title,
            type: 'category',
            catId: catId
        }})
    }

    /**
     * @render
     * @return {Component} container
     */
    render() {
        return (
            <View style={styles.container} >
                <Titlebar />
                <Image style={{width:null,height:null,flex:1}} source={require('../../../resource/images/gradient-diamond-blur1.png')}>
                    <View style={{backgroundColor: 'rgba(225, 225, 225, 0.1)',marginTop:20,flex:1}}>
                    <ScrollView  showsVertivcalScrollIndicator={true} vertical={true}>
                        <View style={{marginTop:30,marginLeft:20,marginRight:20,height:480,flex:1}}>
                            <View style={{flexDirection: 'row'}}>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Dars-E-Quran',42)}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10,borderBottomColor:'#999',borderBottomWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/quran.png')}></Image>
                                    <Text style={styles.innerText}>Dars-E-Quran</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Dua',40)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftColor:'#999',borderLeftWidth:1,borderBottomWidth:1,borderBottomColor:'#999',borderRightWidth:1,borderRightColor:'#999'}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/dua.png')}></Image>
                                    <Text style={styles.innerText}>Dua</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Quran',31)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderBottomColor:'#999',borderBottomWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/dars.png')}></Image>
                                    <Text style={styles.innerText}>Quran</Text>
                                </View>
                            </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: 'row',borderBottomColor:'#999',borderBottomWidth:1}}>
                            <TouchableOpacity onPress={()=> this.onCategoryPress('Interviews',52)}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/interview.png')}></Image>
                                    <Text style={styles.innerText}>Interviews</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Juma Khutbat',47)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:1,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/Juma.png')}></Image>
                                    <Text style={styles.innerText}>Juma Khutbat</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Speeches',32)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/speech.png')}></Image>
                                    <Text style={styles.innerText}>Speeches</Text>
                                </View>
                            </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: 'row',borderBottomColor:'#999',borderBottomWidth:1}}>
                            <TouchableOpacity onPress={()=> this.onCategoryPress('Hamd O Naat',34)}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/quran.png')}></Image>
                                    <Text style={styles.innerText}>Hamd O Naat</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Tanz-o-Mazah',36)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/tanz.png')}></Image>
                                    <Text style={styles.innerText}>Tanz-o-Mazah</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Poetry',33)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/poetry.png')}></Image>
                                    <Text style={styles.innerText}>Poetry</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={()=> this.onCategoryPress('Kids Rhymes',41)}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/kids.png')}></Image>
                                    <Text style={styles.innerText}>Kids Rhymes</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Naity Kalam',51)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/naity.png')}></Image>
                                    <Text style={styles.innerText}>Naity Kalam</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> this.onCategoryPress('Naity Speech',37)}>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={{width:60,height:60,color:'#000'}} source={require('../../../resource/images/naitySpeech.png')}></Image>
                                    <Text style={styles.innerText}>Naity Speech</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </ScrollView>

                        <Advertisement/>
                    </View>

                </Image>
            </View>
        );
    }
}

// <View style={{height: 50, backgroundColor: '#F4F4F4', borderTopWidth: 1, borderTopColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center'}}>
//     <Image source={{uri:'http://www.internationalfilmindustry.com/images/advertise-banner.jpg'}} style={styles.advetisement}/>
// </View>

/**
 * @style
 */
 const styles = StyleSheet.create({
     container: {
         alignItems: 'stretch',
         flex:1

     },
     innerImage: {
         width:60,
         height:60,
         color:'#000',
         elevation:5
     },
     innerText: {
         fontSize:10,
         color:'#FFF',
         fontWeight:'bold'
     },
     advetisement:{
         fontSize:15,
         color:"#FFF"
     }
 });
