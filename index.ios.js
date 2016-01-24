/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, AppRegistry, Navigator, } from 'react';
/**
 * Custom application components
 */
import { Titlebar } from './src/components/shared/Titlebar';
import { NetworkInfo } from './src/components/shared/NetworkInfo';
import { LandingPage } from './src/components/landing/LandingPage';

// Constant imports
import { LocaleConfig, LocaleString } from './src/constants/LocaleConfig';

var _initialRoute = null;
var _navigator = null;

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
            hasNetWorkConnection: false
         };
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
         /**
          * If the connection lost show a banner in top of the screen saying that the connection lost.
          */
         if(!this.state.hasNetWorkConnection)
            hasNetWorkConnection = (<NetworkInfo navigator={navigator} />)

        /**
         * render the application with the current navigator component
         */
        let screenView = (
             <View style={styles.container}>
                <Titlebar navigator={navigator} />
                { hasNetWorkConnection }
                <Component {...route.props} navigator={navigator} />
             </View>
        );
        return screenView;
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
