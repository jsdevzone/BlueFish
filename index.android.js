/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, AppRegistry, Navigator, DrawerLayoutAndroid, BackAndroid } from 'react-native';
/**
 * Custom application components
 */
import { Titlebar } from './src/components/shared/Titlebar';
import { NetworkInfo } from './src/components/shared/NetworkInfo';
import { LandingPage } from './src/components/landing/LandingPage';
import { Categories } from './src/components/landing/Categories';
import { AuthorList } from './src/components/landing/AuthorList';
import { DrawerNavigation } from './src/components/landing/DrawerNavigation';
import { Album } from './src/components/album/Album';
import { AppConfig } from './src/constants/AppConfig';
import { AppStore } from './src/stores/AppStore';
import { Detail } from './src/components/shared/Detail';
import { SongCategories } from './src/components/landing/SongCategories';
import { SlidingQueue } from './src/components/player/SlidingQueue';
import { SlidingPlayer } from './src/components/player/SlidingPlayer';
import { Player } from './src/components/player/Player';
import { SongList } from './src/components/player/SongList';
import { CurrentPlayback } from './src/components/shared/CurrentPlayback';
import { Videos } from './src/components/player/Videos';
// Constant imports
import { LocaleConfig, LocaleString } from './src/constants/LocaleConfig';

var _initialRoute = null;
var _navigator = null;


/**
 * Attach event listener to android back button press.
 * If navigator stack length is greater than one it pops out
 * the last  route from the stack. If it's the dashboard then exit
 * the application to the android home screen.
 * Refer navigator component of react native for more details.
 *
 * https://facebook.github.io/react-native/docs/navigator.html
 */
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
        return false;
    }
    _navigator.pop();
    return true;
});


 /**
  * @class BlueFish
  * @extends React.Component
  */
class BlueFish extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         //configure the initial screen
         _initialRoute = {
             title: LocaleString.APPLICATION_TITLE,
             component: LandingPage
         };

         /**
          * @state
          */
         this.state = {
            /**
             * Status, whether application screen is loading or not
             * @state {Boolean} isLoading
             */
            isLoading: false,
            /**
            * Checks whether device is connected to the network
            * @state {Boolean} hasNetWorkConnection
            */
            hasNetWorkConnection: false,
            isPlaying: false,
            currentPlayback:null,
         };

         AppStore.on('draweropen', this.onDrawerOpen.bind(this))
         AppStore.on('playbackstarted', this.onPlaybackStarted.bind(this))
     }

     onDrawerOpen() {
         this.drawer.openDrawer();
     }

     onPlaybackStarted(playback) {
         this.setState({ isPlaying: true,currentPlayback:playback });
     }



     /**
      * Process the routes and renders the appropriate component on the screen.
      *
      * @param {Object} route
      * @param {Navigator} navigator
      * @return {View} application
      */
     renderScene(route, navigator) {
         _navigator = navigator;
         //Component is the passed component
         let Component = route.component;

         let hasNetWorkConnection = null;
         let player = null;
         /**
          * If the connection lost show a banner in top of the screen saying that the connection lost.
          */
         if(!this.state.hasNetWorkConnection)
            hasNetWorkConnection = (<NetworkInfo navigator={navigator} />);

            if(this.state.isPlaying)
                player = (<CurrentPlayback playback={this.state.currentPlayback} />);
        /**
         * render the application with the current navigator component
         */
        let screenView = (
            <DrawerLayoutAndroid ref={(control) => this.drawer = control } drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderDrawerNavigationView.bind(this)}>
                    <View style={styles.container}>
                        { hasNetWorkConnection }
                        <Component {...route.props} navigator={navigator} />
                        { player }
                    </View>
            </DrawerLayoutAndroid>
        );
        return screenView;
    }

    /**
     * Navigation view inside the drawer
     *
     * @return {View} application
     */
    renderDrawerNavigationView() {
        return (<DrawerNavigation navigator={_navigator} />);
    }

     /**
      * @render
      * @return {View} container
      */
    render() {
        return (
            <Navigator initialRoute={_initialRoute}
                renderScene={this.renderScene.bind(this)} />
        );
    }
}
/*
 * @styles
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('BlueFish', () => BlueFish);
