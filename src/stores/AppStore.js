/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import { AsyncStorage, ToastAndroid, } from 'react-native';
import { EventEmitter } from 'events';

import { AppConfig } from '../constants/AppConfig';

/**
 * App Store is flux store. This store serves as skeleton for server side data  service
 * for the application.
 *
 * @class AppStore
 * @extends EventEmitter
 * @store
 * @singleton
 */
export var AppStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * Load the settings from local storage.
     * @return {Promise} promise
     */
    getSettings: function() {

    }
});
