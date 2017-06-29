'use strict';
/**
  This module is use to status code n response object
  @module string
  @author vipul.patil
  @version 1.0.0
*/
var constant = {
  statusObj: {
    200: {
      "code": 200,
      "status": "success",
      "data": {
        /* Application-specific data would go here. */
      },
      "message": null /* Or optional success message */
    },
    201: {
      "code": 201,
      "status": "created",
      "data": {
        /* Application-specific data would go here. */
      },
      "message": null /* Or optional success message */
    },
    500: {
      "code": 500,
      "status": "Error",
      "message": null,
      "error": "Server Error!"
    },
    501: {
      "code": 501,
      "status": "DB Error",
      "message": null,
      "error": "Query is wrong."
    },
    550: {
      "code": 550,
      "status": "Send email",
      "message": "Requested action not taken: mailbox unavailable",
      "error": {}
    },
    400: {
      "code": 400,
      "status": "Bad Request",
      "message": "Validation failed.",
      "error": {}
    },
    404: {
      "code": 404,
      "status": "Not Found",
      "message": null,
      "error": "Data Not Found."
    },
    422: {
      "code": 422,
      "status": "Unprocessable Entity",
      "message": "Validation failed.",
      "error": {}
    },
    409: {
      "code": 409,
      "status": "Conflict",
      "message": null,
      "error": "Data duplication error."
    },
    405: {
      "code": 405,
      "status": "Method not allowed.",
      "message": "Incorrect method. Try with ",
      "error": "Incorrect method."
    },
    406: {
      "code": 406,
      "status": "Not acceptable.",
      "message": "Incorrect Content-Type. Try with application/json.",
      "error": "Incorrect Content-Type."
    },
    413:{
      "code":413,
      "status": "Request Entity Too Large.",
      "message": null,
      "error":"File is too large."
    },
    415:{
      "code":415,
      "status": "Unsupported Media Type.",
      "message":null,
      "error":"File format is not supported."
    },
    507:{
      "code":507,
      "status": "Insufficient Storage",
      "message": null,
      "error":"File limit exceeded."
    }
  }
};



module.exports = constant;
