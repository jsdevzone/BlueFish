/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback,  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                        <View style={{marginTop:30,marginLeft:20,marginRight:20,height:600,flex:1}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10,borderBottomColor:'#999',borderBottomWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/quran.png')}></Image>
                                    <Text style={styles.innerText}>Dars-E-Quran</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftColor:'#999',borderLeftWidth:1,borderBottomWidth:1,borderBottomColor:'#999',borderRightWidth:1,borderRightColor:'#999'}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/dua.png')}></Image>
                                    <Text style={styles.innerText}>Dua</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderBottomColor:'#999',borderBottomWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/dars.png')}></Image>
                                    <Text style={styles.innerText}>Quran</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',borderBottomColor:'#999',borderBottomWidth:1}}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/interview.png')}></Image>
                                    <Text style={styles.innerText}>Interviews</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:1,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/Juma.png')}></Image>
                                    <Text style={styles.innerText}>Juma Khutbat</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/speech.png')}></Image>
                                    <Text style={styles.innerText}>Speeches</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',borderBottomColor:'#999',borderBottomWidth:1}}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/quran.png')}></Image>
                                    <Text style={styles.innerText}>Hamd O Naat</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/tanz.png')}></Image>
                                    <Text style={styles.innerText}>Tanz-o-Mazah</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/poetry.png')}></Image>
                                    <Text style={styles.innerText}>Poetry</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width:100,height:110,alignItems:'center',padding:10}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/kids.png')}></Image>
                                    <Text style={styles.innerText}>Kids Rhymes</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10,borderLeftWidth:1,borderLeftColor:'#999',borderRightColor:'#999',borderRightWidth:1}}>
                                    <Image style={styles.innerImage} source={require('../../../resource/images/naity.png')}></Image>
                                    <Text style={styles.innerText}>Naity Kalam</Text>
                                </View>
                                <View style={{width:110,height:110,alignItems:'center',padding:10}}>
                                    <Image style={{width:60,height:60,color:'#000'}} source={require('../../../resource/images/naitySpeech.png')}></Image>
                                    <Text style={styles.innerText}>Naity Speech</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                        <View style={{flexDirection:'row',height:45,backgroundColor:'#FFF'}}>
                            <Icon style={{marginTop:9,marginLeft:30}} name="ios-pause" size={30} color="#999" />
                            <Image style={{height:35,width:40,marginLeft:30,marginTop:5}} source={require('../../../resource/images/mufti.jpeg')}/>
                            <View style={{flexDirection:'column',width:180,alignItems:'center'}}>
                                <Text style={{color:'#555',fontWeight:'bold',fontSize:12,marginTop:5}}>Zindagi Guzarne Ka Rasta</Text>
                                <Text style={{color:'#999',fontSize:10,marginTop:3 }}>Abdul Bari Nadvi Bhatkal</Text>
                            </View>
                            <Icon style={{marginTop:9,marginLeft:20}} name="android-menu" size={25} color="#D33065" />
                        </View>
                        <View style={{height: 50, backgroundColor: '#380428', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.advetisement}>Ad Banner</Text>
                        </View>
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
