'use strict';
/*
 * @Author Jasim
 *
 * Urudu Radio
 *
 * Copyright (C) YoYoDyne Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import React, { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


/**
 * @class TitleBar
 * @extends React.Component
 */
export class PopularSpeakers extends React.Component {
    /**
     * @render
     * @return {View} Component
     */
     render() {
         return (
             <Image style={[styles.container]}
             source={require('../../../resource/images/gradient-diamond.png')}>
             <View style={{height: 30, justifyContent: 'center', paddingLeft: 10}}>
                <Text style={{color:'white'}}>Popular Speakers</Text>
             </View>
             <View style={{backgroundColor:'rgba(0,0,0,0.5)', flex: 1}}>
                <ScrollView showsHorizontalScrollIndicator={true} horizontal={true}>
                <View style={{borderColor: '#000', borderWidth: 2, flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
                    <Image style={{width:70,height:70}} source={require('../../../resource/images/mufti.jpeg')}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - Jafer-Faqui.jpg'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200- Jagan_Nath_Azad..jpg'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - baikal utsah.jpg'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - Sheikh_Idris_Abkar.jpg'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - Iftikhar_Arif.jpg'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}} source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - khalifa-al-tunaiji.png'}}/>
                    <Image style={{width:70,height:70,marginLeft:3}}  source={{uri:'http://bhatkallys.com/wp-content/uploads/sermons/images/200X200 - baikal utsah.jpg'}}/>
                </View>
                </ScrollView>
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
         margin: 8,
         height: 100,
         width: null,
         alignItems: 'stretch',

     }
});
