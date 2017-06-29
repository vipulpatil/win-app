'use strict';
/**
  This module is use to define routes for authentication model
  @module authRoute
  @author Vipul.Patil
  @version 1.0.0
*/
/**
   import npm modules
*/
var express = require('express');
var passport = require('passport');

/**
   import project modules
*/
var oauth2 = require('./oauth2Server');
var authenticationController = require('./controller');
/**
  Token Routing
*/
var authRouter = express.Router();

authRouter.post('/login',passport.authenticate('local', {
  session: false
}),authenticationController.fnLogin);//Login users
