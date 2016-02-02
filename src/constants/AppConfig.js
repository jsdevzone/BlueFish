/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';
/**
 *
 * @class AppConfig
 * @singleton
 */
export var AppConfig = {
    /*
     * Locate Storage Key for react native  async storage
     * @property {String} STORAGE_KEY
     */
     STORAGE_KEY: '@BlueFish',
     /**
      * Base path for images from the server
      * @property {String} imageBase
      */
     IMAGE_BASE_PATH: 'http://bhatkallys.com/wp-content/uploads/sermons/images/',
     /**
      * Base path for sound files from the server
      * @property {String} playbackBasePath
      */
     PLAYBACK_BASE_PATH: 'http://bhatkallys.com/wp-content/uploads/sermons/'
};
