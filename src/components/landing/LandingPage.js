/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import React, { Text, View, StyleSheet, Image, ScrollView, } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SlidingUpPanel from '../ux/SlidingPanel';
import Dimensions from 'Dimensions';
/**
 * Application Components
 */
import { NewRelease } from './NewRelease';
import { SongCategories } from './SongCategories';
import { AppStore } from '../../stores/AppStore';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;
const MAX_HEIGHT = DEVICE_HEIGHT - 100;
const MIN_HEIGHT = 80;

/**
 * @class LandingPage
 * @extends React.Component
 */
export class LandingPage extends React.Component {

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
     * @return {Comoponent} container
     */
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'http://info.umkc.edu/unews/wp-content/uploads/2010/08/eminem-recovery-album-cover.jpg'}} style={styles.landingCover} />
                <ScrollableTabView>
        <ScrollView tabLabel="Music">
            <NewRelease />
            <NewRelease />
            <NewRelease />
        </ScrollView>
        <View tabLabel="Video" />
        <View tabLabel="Radio" />
      </ScrollableTabView>

                    <SlidingUpPanel
                ref="panel"
                containerMaximumHeight={MAX_HEIGHT}
                containerBackgroundColor={'green'}
                handlerHeight={MIN_HEIGHT}
                handlerDefaultView={<HandlerOne/>}>
              <View style={styles.frontContainer}>
                <Text style={styles.panelText}>Hello guys!</Text>
              </View>
            </SlidingUpPanel>
            </View>
        );
    }
}

var HandlerOne = React.createClass({
  render: function() {
    return (
      <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Cloud_banner.jpg'}}>
        <View style={styles.textContainer}>
          <Text style={styles.handlerText}>Another Sample Text</Text>
        </View>
      </Image>
    );
  }
});
/*
 * @style
 */
const styles = StyleSheet.create({
     container: {
         flex: 1,
         padding: 0,
         flexDirection: 'column',
         backgroundColor: '#ECECEC'
     },
     landingCover: {
         width: null,
         height: 120
     },
     tabStripe: {
         flexDirection: 'row',
         paddingLeft: 10,
         paddingRight: 10,
         backgroundColor: '#FFF',
         borderBottomWidth: 1,
         borderBottomColor: '#E5E5E5'
     },
     tab: {
         padding: 5
     },
     tabText: {
         fontSize: 20,
         color: '#999'
     }

});
