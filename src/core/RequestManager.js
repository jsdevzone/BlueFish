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
 * RequestManager is the central piece for managing the network connection with the service
 *
 * @class RequestManager
 * @extends EventEmitter
 * @singleton
 */
export var RequestManager = Object.assign({}, EventEmitter.prototype, {

    /**
     * Base url of the service
     * @property {String} endpointBase
     */
     endpointBase: '',

    /**
     * Make get request to the server
     * @param {String} type - the method type GET or POST
     * @param {String} url
     * @param {Object} params - request param if any
     * @return {Promise} promise
     */
    get: function(url, params) {
        if(!url)
            throw new Error('URL is undefined!');

        if(params) {
            let queryString = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
            url = url + '?' + queryString;
        }

        return new Promise((resolve, reject) => {
            fetch(url, { method: 'GET' }).then(response => {
                if(response != null && response != undefined)
                    resolve(response.text());
                else
                    resolve(undefined);
            });
        });
    }
});
