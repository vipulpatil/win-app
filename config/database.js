'use strict';
/**
  This module is use to define database connection url
  @module Config
  @author Vipul.Patil
  @version 1.0.0
*/
// config/database.js
module.exports = {

    'url' : 'mongodb://127.0.0.1:27017/win-assignment' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

    /**
      Authetication configuration object.
      @type {Object}
      @property {String}  jwtKey - Authentication secrete key to generate token.
      @property {Number}  expiryTime - Token expiry time.
    */
    , authConfig : {
      jwtKey: 'thisisasecretkeyforassignment',
      expiryTime: "60m"//525600
    }
};
