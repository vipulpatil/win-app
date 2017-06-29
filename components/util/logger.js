'use strict';
/**
  This module is use to define Logger configurations
  @module logger
  @author vipul.patil
  @version 1.0.0
*/

/**
  import npm modules
*/
var winston = require('winston');
winston.emitErrs = true;
winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
var debug = new winston.Logger({
  levels: {
    debug: 0
  },
  transports: [
    new winston.transports.DailyRotateFile ({
      level: 'debug',
      filename: 'debug.log',
      maxsize: 5242880,
      dirname: __dirname + '/../../logs',
      colorize: true,
      handleExceptions: true
    }),
    new winston.transports.Console ({
      level: 'debug',
      colorize: true,
      handleExceptions: true
    })
  ],
  exitOnError: false
});

var info = new winston.Logger({
  levels: {
    info: 1
  },
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'info',
      filename: 'info.log',
      maxsize: 5242880,
      dirname: __dirname + '/../../logs',
      colorize: true,
      handleExceptions: true
    }),
    new winston.transports.Console({
      level: 'info',
      colorize: true,
      handleExceptions: true
    })
  ],
  exitOnError: false
});

var warn = new winston.Logger({
  levels: {
    warn: 2
  },
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'warn',
      filename: 'warn.log',
      maxsize: 5242880,
      dirname: __dirname + '/../../logs',
      colorize: true,
      handleExceptions: true
    }),
    new winston.transports.Console({
      level: 'warn',
      colorize: true,
      handleExceptions: true
    })
  ],
  exitOnError: false
});

var error = new winston.Logger({
  levels: {
    error: 3
  },
  transports: [
    new winston.transports.DailyRotateFile({
      level: 'error',
      filename: 'error.log',
      maxsize: 5242880,
      dirname: __dirname + '/../../logs',
      colorize: true,
      handleExceptions: true
    }),
    new winston.transports.Console({
      level: 'error',
      colorize: true,
      handleExceptions: true
    })
  ],
  exitOnError: false
});

var exports = {
  debug: function(msg, param, object) {
    if(param && object){
      debug.debug(msg, param, JSON.stringify(object));
      return;
    }
    if(param){
      debug.debug(msg, param);
      return;
    }
    debug.debug(msg);
  },
  info: function(msg, param, object) {
    if(param && object){
      info.info(msg, param, JSON.stringify(object));
      return;
    }
    if(param){
      info.info(msg, param);
      return;
    }
    info.info(msg);

  },
  warn: function(msg, param, object) {
    if(param && object){
      warn.warn(msg, param, JSON.stringify(object));
      return;
    }
    if(param){
      warn.warn(msg, param);
      return;
    }
    warn.warn(msg);
  },
  error: function(msg, param, object) {
    if(param && object){
      error.error(msg, param, JSON.stringify(object));
      return;
    }
    if(param){
      error.error(msg, param);
      return;
    }
    error.error(msg);
  },
  log: function(level, msg, param, object) {
    var lvl = exports[level];
    lvl(msg, param, object);
  },
  stream:{
    write: function(message){
        debug.debug(message);
    }
  }
};

module.exports = exports;
