'use strict';
/**
  This module is use to define controller for User model flow
  @module userController
  @author Vipul.Patil
  @version 1.0.0
*/
/**
  import project module
*/
var mongoose = require("mongoose");
var passport = require("passport");
var database = require("../../config/database");
var config =  require("../../config/authenticateConfig")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("./model");

module.exports = function(app) {
  var userController = {};
  //user root level route fn
  userController.index = function(req,res){
    console.log("In user index fn...");
    return res.json({
      "message":"Welcome, You'r in User module api. Kindly check API Documentation for further details"
    });
  }

  // function to sign up
  userController.signUp = function(req,res){
    req.checkBody('username', 'Invalid/Empty Parameter').notEmpty().len(5, 20).withMessage("username must be atleast of 5 and atmax 20 character long");
    req.checkBody('password', 'Invalid/Empty Parameter').notEmpty().len(5, 20).withMessage("password must be atleast of 5 and atmax 20 character long");
    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }
    var username = req.body.username;
    var password = req.body.password;
    if(!password || !username){
      res.statusCode=400;
      return res.send({
        success:false,
        msg: "Please provide username and password.",
        err_details:null
      });
    }
    else{
      //extend user model schma object
      var newUser = new User({
          username: username,
          password:password
      });
      //Save new user
      newUser.save(function(err){
        if(err){
          res.statusCode=500;
          return res.send({
            success: false,
            msg: "Something went wrong/ username already exists",
            details: err
          });
        }
        else{
          return res.send({
            success: true, msg: "New user created successfully"
          });
        }
      });
    }
  }

  //function to singin/login
  userController.signIn = function(req,res){
    console.log("...into user singin function...");
    req.checkBody('username', 'Invalid/Empty Parameter').notEmpty().len(5, 20).withMessage("username must be atleast of 5 and atmax 20 character long");
    req.checkBody('password', 'Invalid/Empty Parameter').notEmpty().len(5, 20).withMessage("password must be atleast of 5 and atmax 20 character long");
    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username:username},function(err,user){
      if(err){
        res.statusCode = 500;
        return res.send({
          success: false,
          msg:"Something went wrong",
          err_details : err
        });
      }
      if(!user){
        res.statusCode = 404;
        return res.send({
          success: false,
          msg: "Authentication failed, User not found",
          details:null
        });
      }
      else{
        //check if password matches
        user.comparePassword(password,function(err,isMatch){
          if(isMatch && !err){
            //create token as username and password is matching
            var token = jwt.sign(user,database.authConfig.jwtKey,{ expiresIn: database.authConfig.expiryTime} );
            //send information along with token for future request
            return res.send({
              success: true,
              msg: "LoggedIn successfully.",
              token: 'JWT '+token
              , isMatch:isMatch
            });
          }
          else{
              return res.send({
                success: false,
                msg: "Authentication failed, Wrong password.",
                details : null
              });
          }
        });
      }
    });
  }
  return userController;
}
