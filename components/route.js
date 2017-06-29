'use strict';
/**
  This module is use to define basic routes
  @module
  //@author vipul.patil
  @version 1.0.0
*/

/**
  import npm modules
*/
var express = require('express');

/**
  import project modules
*/
var rootRoutes = function(app){
	//app.use(contentType);


	require('./product/route')(app);
	require('./user/route')(app);

	// app.disable('etag'); //To avoid 304 content not modified /cach issue
	app.get('/*', function(req, res, next){
  	res.setHeader('Last-Modified', (new Date()).toUTCString());
  	next();
	});
	/**
		Default gateway
	*/
	app.get('/', function (req, res) {
		res.send('Welcome');
	});
	//to avoid favicon request  404/500
	app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
	});

	/**
	  Default api gateway
	*/
	app.get('/api', function (req, res) {
		//console.log(__dirname);
    res.send('Welcome Documentation');
	});
};

/**
 all routes modules export
*/
module.exports = rootRoutes;
