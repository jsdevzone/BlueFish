/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, TouchableWithoutFeedback,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * @class DrawerNavigation
 * @extends React.Component
 */
export class DrawerNavigation extends React.Component {

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
     * @return {View} container
     */
    render() {
        return (

            <View style={styles.container}>
                <Image style={styles.profile} source={{ uri: 'http://www.download-free-wallpaper.com/img58/wptatzopoqobwbybalqj.png' }} >
                  <Image style={styles.round} source={{ uri: 'http://www.masterfile.com/images/home/6118-08023773.jpg' }}/>
                  <Text style={styles.headtext}></Text>
                </Image>

                <ScrollView style={{flex: 1}}>
                <HomeNav />
                <AudioNav/>


            <TouchableWithoutFeedback>
                <View style={styles.link}>
                    <Icon name="video-camera"  size={15} color="#888" style={styles.linkIcon}></Icon>
                    <Text style={styles.linkText}>VIDEOS</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.link}>
                    <Icon name="info-circle"  size={15} color="#888" style={styles.linkIcon}></Icon>
                    <Text style={styles.linkText}>HELP</Text>
                </View>
            </TouchableWithoutFeedback>

                <View>
                    <View style={styles.share}>
                        <Text style={styles.sharelinkText}>SHARE</Text>
                        <Icon name="thumbs-o-up"  size={15} color="#888" style={styles.sharelinkIcon}></Icon>
                    </View>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="facebook-square"  size={18} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText}>FACEBOOK</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="twitter"  size={18} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText}>TWITTER</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="google-plus"  size={18} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText}>GOOGLE+</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="envelope"  size={18} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText}>E-MAIL</Text>
                </View>
            </TouchableWithoutFeedback>
                </View>

                </ScrollView>

            </View>
        );
    }
}

/**
 * @class HomeNav
 * @extends React.Component
 */
 class HomeNav extends React.Component {
     /**
      * @constructor
      */
      constructor() {
          super();

          /**
           * @state
           */
           this.state = {
               isCollapsed: true
           };
      }

      /**
       * @eventhandler
       * @return {Void} undefin
       */
      onLinkPress() {
          let collapsed = this.state.isCollapsed;
          this.setState({ isCollapsed: !collapsed });
      }

      /**
       * @render
       * @return {View} component
       */
      render() {
          let segments = (
              <View>
              <TouchableWithoutFeedback>
                    <View style={styles.segment}>
                        <Icon name="info-circle"  size={15} color="#888" style={styles.innerIcon}></Icon>
                        <Text style={styles.linkText} size={12}>ABOUT US</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.segment}>
                        <Icon name="phone"  size={15} color="#888" style={styles.innerIcon}></Icon>
                        <Text style={styles.linkText} size={12}>CONTACT US</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <View style={styles.segment}>
                        <Icon name="comment"  size={15} color="#888" style={styles.innerIcon}></Icon>
                        <Text style={styles.linkText} size={12}>FEEDBACK</Text>
                    </View>
                </TouchableWithoutFeedback>
              </View>
          );

          if(this.state.isCollapsed) {
              segments = null;
          }

          return (
              <View>
                <TouchableWithoutFeedback onPress={this.onLinkPress.bind(this)}>
                    <View style={styles.link}>
                        <Icon name="home" size={18} color="#888" style={styles.linkIcon} />
                        <Text style={styles.linkText}>HOME</Text>
                    </View>
                </TouchableWithoutFeedback>
                { segments }
             </View>
          );
      }
 }

 /**
 * @class AudioNav
 * extends class react.component
 **/

 class AudioNav extends React.Component{

/**
* @constructor
**/

 constructor()
 {
    super();

    /**
    * @state
    **/

    this.state={
        isCollapsed : true
    };
}


/**
 * @eventhandler
 * @return {Void} undefin
 */
 onLinkPress()
 {
    let collapsed = this.state.isCollapsed;
    this.setState({ isCollapsed: !collapsed });
}

/**
 * @render
 * @return {View} component
 */

 render(){
    let segments = (
        <View>
            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="music"  size={15} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText} size={12}>LATEST</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="user"  size={15} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText} size={12}>AUTHORS</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="file-text"  size={15} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText} size={12}>TOPICS</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="tasks"  size={15} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText} size={12}>CATEGORY</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.segment}>
                    <Icon name="heart"  size={15} color="#888" style={styles.innerIcon}></Icon>
                    <Text style={styles.linkText} size={12}>FAVOURITES(DOWNLOADED)</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

    if(this.state.isCollapsed)
    {
        segments = null;
    }
 return(
    <View>
        <TouchableWithoutFeedback onPress={this.onLinkPress.bind(this)}>
            <View style={styles.link}>
                <Icon name="volume-up"  size={15} color="#888" style={styles.linkIcon}></Icon>
                <Text style={styles.linkText}>AUDIOS</Text>
            </View>
        </TouchableWithoutFeedback>
    { segments }
    </View>
)


}


 }

/**
 * @style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#f8f8ff',
    },
    profile: {
        height: 120,
        backgroundColor: '#3fbd5a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    segment: {
      padding: 10,
      marginLeft:10,
      marginRight: 10,
      flexDirection: 'row'
    },
    link: {
        padding: 15,
        marginLeft:10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        flexDirection: 'row'
    },
    linkText: {
      marginLeft: 10,
      color: '#888'
    },
    round: {
        width :50,
        height:50,
        borderRadius:25,
    },
    linkIcon: {
        marginRight: 5
    },
    headtext: {
      color:'#FFF'
    },
    innerIcon: {
      marginLeft: 35,
      color: '#888'
    },
    share:{
      height:50,
      backgroundColor:'white',
      padding:10,
      flexDirection:'row',
      alignItems:'center'
    },
    sharelinkIcon: {
        marginLeft: 170
    },
    sharelinkText: {
      marginLeft: 20,
      color: '#888'
    }
});
