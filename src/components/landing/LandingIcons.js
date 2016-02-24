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
import React, { View, Text, StyleSheet, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import { AuthorList } from './AuthorList';
import { SongCategories } from './SongCategories';


/**
 * @class TitleBar
 * @extends React.Component
 */
export class LandingIcons extends React.Component {
    /**
     * @render
     * @return {View} Component
     */

     onAuthor() {
         this.props.navigator.push({ title: 'Authors', component: AuthorList, props: { navigator: this.props.navigator }});
     }

     onCategory() {
         this.props.navigator.push({ title: 'categories', component: SongCategories, props: { navigator: this.props.navigator }});
     }

     render() {
         return (
             <View style={[styles.container]}>

             <Image style={[styles.icon, { padding: 10, marginLeft: 3 }]}
             source={require('../../../resource/images/myPlaylist.jpg')}>
             </Image>

             <TouchableOpacity onPress={this.onCategory.bind(this)}>
                <Image style={[styles.icon, { padding: 10}]}
                source={require('../../../resource/images/categories.jpg')}>
                </Image>
             </TouchableOpacity>

             <TouchableOpacity onPress={this.onAuthor.bind(this)}>
                <Image style={[styles.icon, { padding: 10}]}
                source={require('../../../resource/images/speakers.jpg')}>
                </Image>
            </TouchableOpacity>

             <Image style={[styles.icon, { padding: 10}]}
             source={require('../../../resource/images/latest.jpg')}>
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
         padding: 5,
         flexDirection: 'row',

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
