'use strict';
/**
  This module is use to define controller for authentication model
  @module authenticationController
  @author Vipul.Patil
  @version 1.0.0
*/
/**
  import project module
*/
var model = require('./model');
var mongodb = require('mongoose');
var randomstring = require("randomstring");
var passwordHash = require('password-hash');
var AccessToken = model.accessTokens;
var RefreshToken = model.refreshTokens;
var Token = model.userTokens;
var User = require('../user/model').users;

/**
   Authentication controller object
   @type {object}
*/

var authentication = {};

authentication.fnLogin = function(req, res, next) {

  console.log("In fnLogin function ");
  var username = req.body.username;
  var password = req.body.password;
  req.checkBody("username", "Invalid / Missing parameter").notEmpty();
  req.checkBody("password", "Invalid / Missing parameter").notEmpty();

  var errors = req.validationErrors(true);
  if (errors) {
    res.statusCode = 400;
    //log.error('bad request ', errors);
    return res.status(400).send({
      "Validation errors": errors
    });
  }

}
// authentication controller functions and expose it to app
module.exports = authentication;
