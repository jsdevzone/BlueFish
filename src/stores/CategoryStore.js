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
export var CategoryStore = Object.assign({}, EventEmitter.prototype, {
    /**
     * Get the new & trending category songs list
     * @return {Promise} promise
     */
    getTrendingList: function() {
        let _data = [
            { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
            { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
            { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
            { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'}
        ];
        return _data;
    }
});
