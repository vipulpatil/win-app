'use strict';
/**
  This module is use to define User Schema objects and functions
  @module userModel
  @author Vipul.Patil
  @version 1.0.0
*/
/**
  import npm modules
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

//define User schema
var UserSchema = new Schema({
  username: { type: String,unique: true,required: true},
  password:{ type: String, required: true }
});

//schema hook to hash new or modified password field before save opeation
UserSchema.pre('save',function(next){
    var user = this;
    if(this.isModified('password') || this.isNew){
      bcrypt.genSalt(10,function(err,salt){
        if(err){
          return next(err);
        }
        bcrypt.hash(user.password,salt,null,function(err,hash){
          if(err){
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    }
    else{
      return next();
    }
});

//schema method to compare/match check password
UserSchema.methods.comparePassword = function(passw,cb){
  bcrypt.compare(passw,this.password,function(err,isMatch){
    if(err){
      return cb(err);
    }
    cb(null, isMatch);
  });
}


module.exports = mongoose.model('User',UserSchema);
