/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, ListView, Image, NativeModules,TouchableOpacity,ScrollView } from 'react-native';
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

  export class ContactUs extends React.Component {
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
              <View style={styles.container}>

                    <Titlebar/>
                    <ScrollView  showsVertivcalScrollIndicator={true} vertical={true}>
                    <View style={{backgroundColor:'#2C2C2C',height:60}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15}}>
                            <Icon style={{marginLeft:10}} name="wifi" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-googleplus-outline" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-facebook" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-twitter" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-youtube" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-instagram" color="#6B6B6B" size={23} />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#CD2122',height:5}}>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکل – ایک تعارف</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس کا تعارف</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Advertise Here</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکل بندر</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھاٹکللیس فوٹو گالیری</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Bhatkal Heritage</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Bhatkal Port</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Jali Beach</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Streets of Bhatkal</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو – عید ملن اور نوائط برادری</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>حمد و نعت</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو – نائطی شاعری</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو – طنزومزاح</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو – اردو کلام</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو – تقاریر</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بھٹکلیس ویڈیو</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>کتب</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>حمد و نعت</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>انٹرویو</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>کتب خانہ</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>حضرت مولانا سید ابو الحسن علی ندوی</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>نائطی بکس</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>نائطی کالم</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>نقش النوائط</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Photo News</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>راشد اشرف کلکشن</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>سالار ہبلی ایڈیشن</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>اردو آڈیو</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>درس قرآن</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>دعا</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>حمدونعت</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>انٹرویو</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>جمعہ خطبات</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>بچوں کی نظمیں</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>تلاوت قرآن</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>سرچ آڈیو</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>تقاریر</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:25}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>طنزومزاح</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>اردو بکس</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>اردو کلام</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>اردو خبریں</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>کتب خانہ</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>عربی بکس</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Naity Audio</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Read Quran</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Seerat</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Abu Dhabi Eid Milan 2007</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Abu Dhabi Eid Milan 2009</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Abu Dhabi Eidmilan 2008</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Abul Hasan Academy</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Shams School</Text>
                    </View>
                    <View style={{backgroundColor:'#FFF',flexDirection:'row',alignItems:'center'}}>
                        <Icon style={{marginLeft:10}} name="ios-circle-filled" color="#6B6B6B" size={15} />
                        <Text style={{color:'#000',marginLeft:10}}>Dubai Eid Milan 2009</Text>
                    </View>
                    <View style={{backgroundColor:'#CD2122',height:5}}>
                    </View>
                    <View style={{backgroundColor:'#2C2C2C',height:100}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15}}>
                            <Icon style={{marginLeft:10}} name="wifi" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-googleplus-outline" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-facebook" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-twitter" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-youtube" color="#6B6B6B" size={23} />
                            <Icon style={{marginLeft:25}} name="social-instagram" color="#6B6B6B" size={23} />
                        </View>
                        <Text style={{color:'#CCCCCC',margin:10,width:null,fontSize:10,alignItems:'center'}}>© Copyright 2016, All Rights Reserved. | Powered by Bhatkallys Media Society | Designed by Bhatkallys.com</Text>
                    </View>
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
           flex:1

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
