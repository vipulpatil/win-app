'use strict';
/**
  This module is use to define Product Schema objects and functions
  @module productModel
  @author Vipul.Patil
  @version 1.0.0
*/
/**
  import npm modules
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//define Product schema
var ProductSchema = new Schema({
    "title": { type: String,required:true },
    "price": { type: Number,required:true},
    //instock: { type: Boolean, required: true, default: true},
    "quantity": { type: Number,required:true},
    "photo": { type: String},
    "user_id":{type:mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

});
//ProductSchema.index({ "title": 1, "user_id": 1 }, { unique: true });
ProductSchema.index({title: 1, user_id: 1}, {unique: true}); //user wise unique product index validation viz. for user,title should b unique - no duplicate title for a user


/*
//schema hook to hash new or modified password field before save opeation
ProductSchema.pre('save',function(next){
    var product = this;
    var err= {};
    console.log("product.instock==",product.instock);
    console.log("product.quantity==",product.quantity);
    if((product.instock===true && product.quantity < 0) || (product.instock===false && product.quantity > 0)){
      console.log("1================");
      err.statusCode = 403;
      err.msg= "product instock and quantity mismatch";
      return next(err);
    }
    else{
      return next();
    }
});
*/

module.exports = mongoose.model('Product', ProductSchema);
