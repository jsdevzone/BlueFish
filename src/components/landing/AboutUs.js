/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, ListView, Image, NativeModules,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

//stores
import { Titlebar } from '../shared/Titlebar';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;

 /**
  * @class SlidingQueue
  * @extends React.Component
  */

  export class AboutUs extends React.Component {

      /**
       * @constructor
       */
      constructor() {
          super();

          /**
           * @state
           */
          this.state = {
          };
      }

      render() {
          return (
              <View style={[styles.container]}>

                    <Titlebar/>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:18,fontWeight:'bold',width:null,justifyContent:'center'}}>About</Text>
                    <Text style={{margin:5}} numberOfLines={8}>
                        About UrduAudio.com UrduAudio.com is a product of
                        Bhatkallys.com, which was started in the year 2003
                        from Bhatkal, Karnataka state, India. The website
                        features the rare urdu audios from around the world.
                        With more than 300 authors and 2500 recordings of
                        Islamic lectures,  duas, speeches, poetries
                        and juma khutbaat. The UrduAudio app gives you
                        access to a treasure trove of rare audio
                        recordings.
                    </Text>
                    <Image source={require('../../../resource/images/logo.png')}></Image>

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

       },
       icon: {
           width: 80,
           height: 80,
           borderRadius: 5,
           alignItems: 'stretch',
           marginRight: 8
       },
       iconInner: {
           width: 40,
           height: 40
       }
  });
