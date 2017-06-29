'use strict';
/**
  This module is use to create/add a user and his initial dummy product in MongoDB collections
  @module userController
  @author Vipul.Patil
  @version 1.0.0
*/
/**
  import project module
*/

var mongoose = require('mongoose');
var database = require("./config/database");
var User = require('./components/user/model');
var Product = require('./components/product/model');

mongoose.connect(database.url);


User.remove({username:"winuser"}, function(err) {
  if(err){
    console.log("error=",error);
  }
    var username = "winuser";
    var password = "win@123";
    var user = new User({
        username: username,
        password: password,
    });

    user.save(function(err, user) {
      console.log("user===",user);
        if(!err) {
            console.log("New user:password - %s:%s", username, password);
            //
            Product.remove({title:"Dummy Product"}, function(err) {
                var title = "Dummy Product"
                var price = 100;
                //instock
                var quantity = 10;
                var photo = "";
                var user_id = user._id;
                var product = new Product({
                    title: title,
                    price: price,
                    quantity:quantity,
                    photo:photo,
                    user_id:user_id
                });

                product.save(function(err, product) {
                    if(!err) {
                        console.log("New product ' %s ' has been added for  user ' %s ' ", product.title,user.username);
                    }else {
                        return console.log("err==",err);
                    }
                });
            });
        }else {
            return console.log("err==",err);
        }
    });
});
