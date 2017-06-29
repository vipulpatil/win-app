'use strict'
/**
  This sub-module file is use to define contoller flow for Product module
  @module Product
  @author vipul.patil
  @version 1.0.0
*/
var util = require('util');
var Product = require("./model");
var errorHandler = require("../middleware/methodmiddleware"); // middleware to handle basic and/or common error scenarios
var logger = require('../util/logger'); // utility file extenstion to log the details

module.exports = function(app) {
  var productController = {};

  productController.index = function(req,res){
    return res.json({
      "message":"Welcome, You'r in Product module api. Kindly check API Documentation for further details"
    });
  }
  //function to add product record into db
  productController.addProduct = function(req,res){
    console.log("...into the product addProduct fn...");
    req.sanitize('title').trim();
    req.checkBody('title', 'Invalid/Empty Parameter,').notEmpty();
    req.checkBody('price', 'Invalid/Empty Parameter').notEmpty().isInt().withMessage("Integer value allowed only");
    // req.checkBody('instock', 'Invalid/Empty Parameter').notEmpty();
    // req.checkBody('instock', 'Boolean Parameter Allowed.').isBoolean()
    req.checkBody('quantity', 'Invalid/Empty Parameter').notEmpty().isInt().isInt().withMessage("Integer value allowed only");
    req.checkBody('photo', 'Invalid/Empty Parameter').notEmpty();

    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }

    //var instock = req.body.instock;

    var newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        //instock: instock,
        quantity:req.body.quantity,
        photo: req.body.photo,
        user_id:req.user._id
    });
    //Save new user
    newProduct.save(function(err,productRes){
      if(err){
        res.statusCode=500;
        return res.send({
          success: false,
          msg: "Something went wrong,Product is already exists",
          err_details: err
        });
      }
      else{
        res.statusCode=201;
        return res.send({
          success: true, msg: "New product added successfully",data:productRes
        });
      }
    });

  }

  //function to get prodcts
  productController.getProducts = function(req,res){
    console.log("...into the getProducts fn...");

    var queryString = {};
    Product.find(queryString,function(err,productRes){
      if(err){
        res.statusCode = 500;
        return res.send({
          success: false,
          msg: "Something went wrong",
          err_details: err
        });
      }
      else if(!productRes || productRes.length < 1){ //if no result o empty result
        console.log("2222");
        res.statusCode=404;
        return res.send({
          success: false,
          msg:"No product found",
          err_details: null
        });
      }
      else {
        console.log("1111");
        res.statusCode = 200;
        return res.send({
          success: true, msg:"Product record has been retrieved",data:productRes
        });
      }
      // else{
      //   res.statusCode = 404;
      //   return res.send({
      //     success: false,
      //     msg: "No product found.",
      //     err_details: null
      //   });
      // }
    });
  }
  //function to get single product using id
  productController.getProductById = function(req,res){
    //validation  rule
    req.sanitize('product_id').trim();
    req.checkParams('product_id', 'Invalid/Empty Parameter').notEmpty();
    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }
    var queryString = {
      _id:req.params.product_id
      //"deletedOn" : null
    };
    // Product.findById(queryString,function(err,productRes){
    //
    //    if(err){
    //     return res.send({
    //       success: false,
    //       msg: "Something went wrong",
    //       details: err
    //     });
    //   }
    //   else if(!productRes || productRes.length < 1){  //if  productRes undefined or with Array viz. no record
    //     return res.send({
    //       success: false,
    //       msg: "No product found.",
    //       details: null
    //     });
    //   }
    //   else{
    //     return res.send({
    //       success: true, data:productRes
    //     });
    //   }
    //
    // });

    Product.findOne(queryString).exec(function(err,result){
      	if(err){    //if error occures
          res.statusCode = 500;
  				return res.send({
            success:false,
            msg:"Something went wrong, No product found",
            err_details:err
          });
  			}
        else if (!result || result.length < 1){ //if no result o empty result
          res.statusCode=404;
          return res.send({
            success: false,
            msg:"No product found",
            err_details: null
          });
        }
        else{  //if result found successfully
          res.statusCode=200;
          return res.send({
            success:true,
            msg: "Product found successfully",
            data:result
          });
        }
    });

  }

  //function to update a product using id
  productController.updateById = function(req,res){

    req.sanitize('title').trim();
    req.checkParams('product_id', 'Invalid/Empty Parameter').notEmpty();
    req.checkBody('title', 'Invalid/Empty Parameter').notEmpty();
    req.checkBody('price', 'Invalid/Empty Parameter').notEmpty().isInt().withMessage("Integer value allowed only");
    req.checkBody('quantity', 'Invalid/Empty Parameter').notEmpty().isInt().withMessage("Integer value allowed only");
    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }
    var title = req.body.title;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var queryString = {
      _id:req.params.product_id,
      user_id:req.user._id
      //"deletedOn" : null
    };

    Product.findOne(queryString).exec(function(err,result){
      //return res.send({result:result});
      if(err){
        res.statusCode = 500;
        return res.send({
          success:false,
          msg:"Something went wrong, No product found",
          err_details:err
        });
      }
      else if (!result || result.length < 1){ //if no result o empty result
        res.statusCode=404;
        return res.send({
          success: false,
          msg:"No product found for corresponding user with provided product id",
          err_details: null
        });
      }
        //if product record already exists for user
      // else if(result && result.user_id !==req.user._id){
      //     res.statusCode=403;
      //     return res.send({
      //       success: false,
      //       msg:"Your not autherised to attempt the operation",
      //       err_details: null
      //       ,user_id:result.user_id,idd:req.user._id, result:result
      //     });
      //
      // }

      else{
        result.title = title;
        result.price = price;
        result.quantity =quantity;

        result.save(function(err){
          if(err){
            res.statusCode = 500;
            return res.send({
              success:false,
              msg:"Something went wrong, product not updated",
              err_details:err
            });
          }
          else{
            res.statusCode=200;
            res.send({
              success:true,
              msg:"Product updated successfully",
              data:result
            });
          }
        });
      }

    });

  }
  //function to delete a product record
  productController.deleteById = function(req,res){
    req.checkParams('product_id', 'Invalid/Empty Parameter').notEmpty();
    //return res.send({product_id:req.params.product_id});
    var errors = req.validationErrors(true);
    if (errors) {
      return res.status(400).json({'Validation errors': errors});
    }
    var queryString = {
      _id:req.params.product_id,
      user_id:req.user._id
    }
    Product.findOneAndRemove(queryString).exec(function(err,result){
      if(err){
        res.statusCode = 500;
        return res.send({
          success:false,
          msg:"Something went wrong",
          err_details:err
        });
      }
      else if(!result || result.length < 1){
        res.statusCode=404;
        return res.send({
          success: false,
          msg:"No product found for corresponding user with provided product id",
          err_details: null
        });
      }
      else{
        res.statusCode=200;
        return res.send({
          success:true,
          msg:"Product record has been deleted",
          data:result
        });
      }
    });
  }
  return productController;
}
