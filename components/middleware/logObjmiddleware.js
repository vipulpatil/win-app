'use strict';
/**
*  This module is use to define functions for validation middleware
*  @author Vipul.Patil
*/
var store = require("../util/errorCodeHandling");
/**
* middleware object
* @type {Object}
*/
var handler = {};

/**
* Middleware function to get ip address, apiUrl and object for logInfoObject
* @param  {Object}   req
* @param  {Object}   res
* @param  {Function} next
* @return
*/
handler.logInfoObject = function(req, res, next) {
  console.log("**logInfoObject=");
  var requestParamObj = {};
  // var ipAdd = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // var apiUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  requestParamObj.requestParam = req.body;
  //Condition check if user is logged in and holds username value
  // if(req.user !== undefined && req.user !== null){
  //     requestParamObj.userName = req.user.username;
  // }
  // requestParamObj.ipAdd = ipAdd;
  // requestParamObj.apiUrl = apiUrl;
  requestParamObj.method = req.method;
  req.requestParamObj =requestParamObj;
  next();
}


module.exports = handler;
