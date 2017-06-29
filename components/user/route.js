'use strict';
/**
  This module is use to define routes for User controller model
  @module userModule
  @author vipul.patil
  @version 1.0.0
*/



module.exports = function(app) {
  var userController = require('./controller')(app); //extend productController here for routing/redirect purpose
  var logObjmiddleware = require("../middleware/logObjmiddleware"); //middleware extension for log object format
  /**
   * @api {post} /api/user/   User Index api call for test
   * @apiName PostUser
   * @apiGroup User
   * @apiDescription This is test api endpoint for user module
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *     }
   * @apiParam  - - -
   * @apiSuccess {String} message test success message
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "message": "Welcome, You'r in User module api. Kindly check API Documentation for further details"
   *     }
   *
   * @apiSampleRequest http://localhost:3001/api/user/
   * @apiExample {curl} Example Usage
   * curl -X POST \
  http://localhost:3001/api/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded'
  *
  */

  //test route api for user module
  app.all('/api/user/',
    userController.index
  );
  /**
   * @api {post} /api/user/signup   API call to create/signup new user
   * @apiName PostUserSignup
   * @apiGroup User
   * @apiDescription This is the API endpoint for creating new user/sign up new user
   *                 User name should be unique.
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *     }
   * @apiParam  {string} username Unique username with minimum of 5 and maximum of 20 character long
   * @apiParam {string} password Password with minimum of 5 and maximum of 20 character long
   * @apiSuccess {String} msg Success message of operation
  * @apiSuccess {Boolean} success success operation Boolean
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "success": true,
   *        "msg": "New user created successfully"
   *     }
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:500
   *      HTTP/1.1 500 ServerError
   *      {
   *        success: false,
   *        msg: "Something went wrong/ username already exists",
   *        err_details: err
   *      }
   * @apiError NotFound Not record found
   * @apiErrorExample {json} Error-Response:404
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "Please provide username and password.",
   *        err_details: null
   *      }
   * @apiError BadRequest 400 Bad Request
   * @apiErrorExample {json} Error-Response:400
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "Validation errors": {
   *         "title": {
   *            "param": "username",
   *            "msg": "Invalid/Empty Parameter,"
   *         }
   *       }
   *     }
   * @apiSampleRequest http://localhost:3001/apiuser/
   * @apiExample {curl} Example Usage
   * curl -X POST \
  http://localhost:3001/api/user/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c83e213b-3902-5314-2c3e-8574363cbc16' \
  -d '{
	"username":"testUsername",
	"password":"testPassword"
}'
  *
  */

  //route for user signUp
  app.post('/api/user/signup',
    userController.signUp
  );
  /**
   * @api {post} /api/user/signin   API call to login/signin
   * @apiName PostUserSignin
   * @apiGroup User
   * @apiDescription This is the API endpoint for user login
   * @apiHeader {String} Content-Type Type of content request response
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json",
   *     }
   * @apiParam  {string} username Unique username with minimum of 5 and maximum of 20 character long
   * @apiParam {string} password Password with minimum of 5 and maximum of 20 character long
   * @apiSuccess {String} msg Success message of operation
  * @apiSuccess {Boolean} success success operation Boolean
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
          "success": true,
          "msg": "LoggedIn successfully.",
          "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDc4MzksImV4cCI6MTQ5ODYxMTQzOX0.vLX82xfKff1Hsql2XgTIzMMFzOSqnNFGM7WN_fkfZ_I",
          "isMatch": true
        }
   * @apiError ServerError 500 Server error
   * @apiErrorExample {json} Error-Response:500
   *      HTTP/1.1 500 ServerError
   *      {
   *        success: false,
   *        msg: "Something went wrong",
   *        err_details: err
   *      }
   * @apiError NotFound No record found
   * @apiErrorExample {json} Error-Response:404
   *      HTTP/1.1 404 NotFound
   *      {
   *        success: false,
   *        msg: "Authentication failed, User not found",
   *        err_details: null
   *      }
   * @apiError BadRequest 400 Bad Request
   * @apiErrorExample {json} Error-Response:400
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "Validation errors": {
   *         "title": {
   *            "param": "username",
   *            "msg": "Invalid/Empty Parameter,"
   *         }
   *       }
   *     }
   * @apiSampleRequest http://localhost:3001/apiuser/signin
   * @apiExample {curl} Example Usage
   * curl -X POST \
  http://localhost:3001/api/user/signin \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b59c14f2-6384-ea9e-76c7-53896bea011c' \
  -d '{
	"username":"admin",
	"password":"admin@123"
}'
  *
  */


  //route for user login fn
  app.post('/api/user/signin',
    userController.signIn
  );
}
