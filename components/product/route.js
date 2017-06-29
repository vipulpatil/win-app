'use strict';
/**
  This module is use to define routes for Product controller model
  @module Product
  @author vipul.patil
  @version 1.0.0
*/

/*
import modules
**/
var passport = require('passport');

module.exports = function(app) {
  var productController = require('./controller')(app); //extend productController here for routing/redirect purpose
  var logObjmiddleware = require("../middleware/logObjmiddleware"); //middleware extension for log object format

/**
* @api {option} API-INFORMATION INFORMATION
* @apiName OptionAPI
* @apiGroup API INFORMATION
* @apiDescription This is the basic version of api development and api documentation as well.
*                 Basic implemention though it provides confidence to scale and add new feature really easily because it follows module wise development of features viz. 'components' folder contains the module
*                 There is scope of further improvement in vaious areas,  few of them are as follows as follows :
*                 1. Log managment module needs to  be added so that on scale we can get sense out of log, Though util folder has basic logging skeleton
*                 2. Error handling also needs to be make more generic with generic status code, Though util folder contains the error basic skeleton further extension is required to implement
*                 3. User module has very really basic signUp and signIn functionality
*                 4. No optional Parameter were introduced, only the basic most parameter were implemented for each n every API
*                 5. All Mongoose model needs to extend one common model schema with fields as "createdOn","deletedOn" and "updatedOn", So that we can delete update records logically
*                 6. Logical deletion is no added yet, all deletion operation removes data direclty from db.
*/

  /**
  * @apiDefine UserNotAuthorisedError
  *
  * @apiError UserNotAuthorised The user jwt token is not authentic, expired/wrong token
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "error": "UserNotAuthorised"
  *     }
  */

/**
* @apiDefine MandatoryValidationErrors
*
* @apiError MandatoryValidation The manadatory Parameter is missing
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
*       "Validation errors": {
*         "title": {
*            "param": "title",
*            "msg": "Invalid/Empty Parameter,"
*         }
*       }
*     }
*/

  /**
   * @api {post} /api/product   Index api call for test
   * @apiName PostProduct
   * @apiGroup Product
   * @apiDescription This is test api endpoint
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiParam  - - -
   * @apiPermission loginUserOnly
   * @apiSuccess {String} message test success message
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "message": "Welcome, You'r in Product module api. Kindly check API Documentation for further details"
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiSampleRequest http://localhost:3001/api/product/
   * @apiExample {curl} Example Usage
   * curl -X POST \
  http://localhost:3001/api/product/ \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ5Tjl5dVYyOG1WTVE2QjM5MGloVlp1dGpwSTlYZDBwSXRkSzE5R0Q3NjA4bGptWnFhaWZPQyIsInVzZXJuYW1lIjoiYWRtaW4iLCJfaWQiOiI1OTUyNTAzNGFkZjZkMjIzOTQxOTRiODQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU4Mzg0MCwiZXhwIjoxNDk4NTg3NDQwfQ.VvN0iziPv1SMhdAz6GO8RcAHc7zk1tEeCAm1ONtCSZY' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded'
  *
  */

  app.all('/api/product/',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.index
  );
  /**
   * @api {post} /api/product/add Add new product record
   * @apiName PostAdd
   * @apiGroup Product
   * @apiDescription This is api endpoint to add create new product record.
   *                 Any loginned/authenticate user can able to use this api
   *
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiParam {String} title Unique title of the product
   * @apiParam {Number} price Price of the product
   * @apiParam {Number} quantity Quantity title of the product
   * @apiParam {String} photo Photo url of the product (No server validation applied for url)
   * @apiPermission loginUserOnly
   * @apiSuccess {Boolean} success Boolean value to showcase api execution is successful or not viz. true
   * @apiSuccess {String} msg Succsss full operation message
   * @apiSuccess {Object} data Object of added product record

   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 201 OK
   *     {
   *        success: true,
   *        msg: "New product added successfully",
   *        data:{
   *              "_id": "59524f03e0bfb11c08de44e5",
   *              "title": "t1",
   *              "price": 120,
   *              "quantity": 10,
   *              "photo": "url",
   *              "user_id": "594b8c27d4a3325f78131cc7",
   *             "__v": 0
   *        },
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 500 ServerError
   *      {
   *        success: false,
   *        msg: "Something went wrong,Product is already exists",
   *        err_details: err
   *      }
   * @apiUse MandatoryValidationErrors
   * @apiSampleRequest http://localhost:3001/api/product/add
   * @apiExample {curl} Example Usage
   * curl -X POST \
  http://localhost:3001/api/product/add \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 3fc5fb6c-1df0-cbb6-9133-05ee96a7191a' \
  -d '{
	"title":"t5",
	"price":"100",
	"photo":"url",
	"quantity":5

}'
   *
   */

  //route to create new product
  app.post('/api/product/add',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.addProduct
  );
  /**
   * @api {get} /api/product/get Get all product record
   * @apiName GetAdd
   * @apiGroup Product
   * @apiDescription This is api endpoint to retrieve all product record. \n
   *                 Any loginned/authenticate user can able to use this api. \n
   *
   *
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiPermission loginUserOnly
   * @apiSuccess {Boolean} success Boolean value to showcase api execution is successful or not viz. true
   * @apiSuccess {String} msg Succsss full operation message
   * @apiSuccess {Object[]} data Array of Object of product record

   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        success: true,
   *        msg: "Product record has been retrieved",
   *        data:[{
   *              "_id": "59524f03e0bfb11c08de44e5",
   *              "title": "t1",
   *              "price": 120,
   *              "quantity": 10,
   *              "photo": "url",
   *              "user_id": "594b8c27d4a3325f78131cc7",
   *             "__v": 0
   *        }],
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 500 ServerError
   *      {
   *        success: false,
   *        msg: "Something went wrong,Product is already exists",
   *        err_details: err
   *      }
   * @apiError NotFound Not record found
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "No product found",
   *        err_details: null
   *      }
   * @apiSampleRequest http://localhost:3001/api/product/get
   * @apiExample {curl} Example Usage
   * curl -X GET \
  http://localhost:3001/api/product/get \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
   *
   */

  //route to get all products
  app.get('/api/product/get',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.getProducts
  );
  app.post('/api/product/add',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.addProduct
  );
  /**
   * @api {get} /api/product/get/:product_id Get a particular product record.
   * @apiName GetAddId
   * @apiGroup Product
   * @apiDescription This is api endpoint to retrieve a product record using product_id. \n
   *                 Any loginned/authenticate user can able to use this api. \n
   *
   *
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiPermission loginUserOnly
   * @apiParam {Number} product_id product id
   * @apiSuccess {Boolean} success Boolean value to showcase api execution is successful or not viz. true
   * @apiSuccess {String} msg Succsss full operation message
   * @apiSuccess {Object} data Object of product record

   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        success: true,
   *        msg: "Product found successfully",
   *        data:{
   *              "_id": "59524f03e0bfb11c08de44e5",
   *              "title": "t1",
   *              "price": 120,
   *              "quantity": 10,
   *              "photo": "url",
   *              "user_id": "594b8c27d4a3325f78131cc7",
   *             "__v": 0
   *        },
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 500 ServerError
   *      {
   *        success: false,
   *        msg: "Something went wrong, No product found",
   *        err_details: err
   *      }
   * @apiError NotFound Not record found
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "No product found",
   *        err_details: null
   *      }
   * @apiUse MandatoryValidationErrors
   * @apiSampleRequest http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558
   * @apiExample {curl} Example Usage
   * curl -X GET \
  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
   *
   */
  //route to get product record using id
  app.get('/api/product/get/:product_id',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.getProductById
  );
  /**
   * @api {put} /api/product/get/:product_id Update a particular product record.
   * @apiName PutAddId
   * @apiGroup Product
   * @apiDescription This is api endpoint to update a product record using product_id.
   *                 Any loginned/authenticate user can update his own product only.
   *                 Any user can not update others users product. This is achieved using combine unique index
   *
   *
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiPermission loginUserOnly
   * @apiParam {ObjctId} product_id product id
   * @apiParam {String} title product title
   * @apiParam {Number} price product cost
   * @apiParam {Number} quantity product quantity
   *
   * @apiSuccess {Boolean} success Boolean value to showcase api execution is successful or not viz. true
   * @apiSuccess {String} msg Succsss full operation message
   * @apiSuccess {Object} data Object of product record

   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        success: true,
   *        msg: "Product updated successfully",
   *        data:{
   *              "_id": "59524f03e0bfb11c08de44e5",
   *              "title": "title1",
   *              "price": 120,
   *              "quantity": 10,
   *              "photo": "url",
   *              "user_id": "594b8c27d4a3325f78131cc7",
   *             "__v": 0
   *        },
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiError ServerError 500 Server error while fetching product.
   * @apiErrorExample {json} Error-Response:500
   *      HTTP/1.1 500 ServerError while fetching product.
   *      {
   *        success: false,
   *        msg: "Something went wrong, No product found",
   *        err_details: err
   *      }
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:500
   *      HTTP/1.1 500 ServerError while updating product.
   *      {
   *        success: false,
   *        msg: "Something went wrong, product not updated",
   *        err_details: err
   *      }
   * @apiError NotFound Not record found
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "No product found for corresponding user with provided product id",
   *        err_details: null
   *      }
   * @apiUse MandatoryValidationErrors
   * @apiSampleRequest http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558
   * @apiExample {curl} Example Usage
   * curl -X PUT \
  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDUyOTYsImV4cCI6MTQ5ODYwODg5Nn0.CHlzoG_f44uzLOBFw-nqqfRsECibwXFfQSTcmrqox3M' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 6c47009d-a95c-9858-80bf-250bea24f023' \
  -d ' {

            "title": "tïtle1",
            "price": 120,
            "quantity": 10,
            "photo": "url"


        }'
   *
   */

  //route to update a product record using id
  app.put('/api/product/get/:product_id',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.updateById
  );
  /**
   * @api {delete} /api/product/get/:product_id Delete a particular product record.
   * @apiName DeleteAddId
   * @apiGroup Product
   * @apiDescription This is api endpoint to delete a product record using product_id.
   *                 Any loginned/authenticate user can delete his own product only.
   *                 Any user can not delete others users product. This is achieved using combine unique index
   *
   *
   * @apiHeader {String} Authorization Users unique jwt token for authentication purpose
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *       "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0"
   *     }
   * @apiPermission loginUserOnly
   * @apiParam {ObjctId} product_id product id
   *
   * @apiSuccess {Boolean} success Boolean value to showcase api execution is successful or not viz. true
   * @apiSuccess {String} msg Succsss full operation message
   * @apiSuccess {Object} data Object of product record

   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        success: true,
   *        msg: "Product updated successfully",
   *        data:{
   *              "_id": "59524f03e0bfb11c08de44e5",
   *              "title": "title1",
   *              "price": 120,
   *              "quantity": 10,
   *              "photo": "url",
   *              "user_id": "594b8c27d4a3325f78131cc7",
   *             "__v": 0
   *        },
   *     }
   *
   * @apiUse UserNotAuthorisedError
   * @apiError ServerError 500 Server error while fetching product.
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 500 ServerError while deleting product.
   *      {
   *        success: false,
   *        msg: "Something went wrong",
   *        err_details: err
   *      }

   * @apiError NotFound Not record found
   * @apiErrorExample {json} Error-Response:
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "No product found for corresponding user with provided product id",
   *        err_details: null
   *      }
   * @apiUse MandatoryValidationErrors
   * @apiSampleRequest http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558
   * @apiExample {curl} Example Usage
   * curl -X DELETE \
  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \
  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDUyOTYsImV4cCI6MTQ5ODYwODg5Nn0.CHlzoG_f44uzLOBFw-nqqfRsECibwXFfQSTcmrqox3M' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1ea9b934-2bd0-864a-a46a-bcce8e209b8c' \
  -d ' {

            "title": "tïtle1",
            "price": 120,
            "quantity": 10,
            "photo": "url"


        }'
   *
   */


  //route to delete a product record using id
  app.delete('/api/product/get/:product_id',
    passport.authenticate('jwt',{session:false}), // authentication check middleware
    productController.deleteById
  );
}
