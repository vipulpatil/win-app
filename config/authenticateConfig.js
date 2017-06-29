'use strict';
/**
  This module is use to define all auth config variables
  @module authentication
  @author Vipul Patil
  @version 1.0.0
*/

/**
  Authetication configuration object.
  @type {Object}
  @property {String}  jwtKey - Authentication secrete key to generate token.
  @property {Number}  expiryTime - Token expiry time.
*/
var authConfig = {
  jwtKey: 'thisisasecretkeyforassignment',
  expiryTime: 525600
};


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../components/user/model');
var database = require('./database'); // get db config file

module.exports = function(passport) {
//var passportStrategy = function(passport){
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = database.authConfig.jwtKey;//config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    User.findOne({_id: jwt_payload._doc._id}, function(err, user) {
      
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};

/**
  Export authConfig Object to other modules.
*/
//module.exports = {  authConfig : authConfig};
//  passportStrategy: passportStrategy
