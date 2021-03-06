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
    getLatestAlbums: function(start, end) {
        let params = {
            lang: 'en',
            stcnt: start || 0,
            encnt: end || 50,
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
    },

    getTopics: function() {
        let params = {
            lang: 'en',
            stcnt: 0,
            encnt: 500,
            listtype: 'series',
            subfilter: ''
        };
        let promise = RequestManager.get(params);
        return promise;
    },

    getAuthors: function() {
        let params = {
            lang: 'en',
            stcnt: 0,
            encnt: 5000,
            listtype: 'author',
            subfilter: ''
        };
        let promise = RequestManager.get(params);
        return promise;
    },

    getCategoryPlaybacks: function(id) {
        let params = {
            lang:'en',
            stcnt:0,
            encnt:10,
            listtype:'category',
            subfilter:id
        };
        let promise = RequestManager.get(params);
        return promise;
    },

    getAuthorPlaybacks: function(authorId) {
        let params = {
            lang:'en',
            stcnt:0,
            encnt:10,
            listtype:'author',
            subfilter: authorId
        };
        let promise = RequestManager.get(params);
        return promise;
    }
});
