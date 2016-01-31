/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';

import { AsyncStorage, ToastAndroid, } from 'react-native';
import { EventEmitter } from 'events';
import { RequestManager } from '../core/RequestManager';

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
export var CategoryStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * Get the new & trending category songs list
     * @return {Promise} promise
     */
    getLatestAlbums: function() {
        let params = {
            lang: 'en',
            stcnt: 0,
            encnt: 10,
            listtype: 'audio',
            subfilter: ''
        };
        let promise = RequestManager.get(params);
        return promise;
    },

    getCategories: function() {
        let params = {
            lang: 'en',
            stcnt: 0,
            encnt: 500,
            listtype: 'category',
            subfilter: ''
        };
        let promise = RequestManager.get(params);
        return promise;
    }
});
