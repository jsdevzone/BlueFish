/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
'use strict';
/**
 * @class PropertyExtractor
 * @extends Object
 */
 export var PropertyExtractor = {
     /**
      * Extract property from the xml response message from the server
      * @params {Object} row
      * @params {String} key
      * @return {Object} value
      */
      getProperty: function(row, key) {
          if(row[key] && row[key].length > 0) {
              return row[key][0];
          }
          return null;
      }
 };
