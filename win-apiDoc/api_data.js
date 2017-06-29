define({ "api": [
  {
    "type": "option",
    "url": "API-INFORMATION",
    "title": "INFORMATION",
    "name": "OptionAPI",
    "group": "API_INFORMATION",
    "description": "<p>This is the basic version of api development and api documentation as well. Basic implemention though it provides confidence to scale and add new feature really easily because it follows module wise development of features viz. 'components' folder contains the module There is scope of further improvement in vaious areas,  few of them are as follows as follows : 1. Log managment module needs to  be added so that on scale we can get sense out of log, Though util folder has basic logging skeleton 2. Error handling also needs to be make more generic with generic status code, Though util folder contains the error basic skeleton further extension is required to implement 3. User module has very really basic signUp and signIn functionality 4. No optional Parameter were introduced, only the basic most parameter were implemented for each n every API 5. All Mongoose model needs to extend one common model schema with fields as &quot;createdOn&quot;,&quot;deletedOn&quot; and &quot;updatedOn&quot;, So that we can delete update records logically 6. Logical deletion is no added yet, all deletion operation removes data direclty from db.</p>",
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "API_INFORMATION"
  },
  {
    "type": "delete",
    "url": "/api/product/get/:product_id",
    "title": "Delete a particular product record.",
    "name": "DeleteAddId",
    "group": "Product",
    "description": "<p>This is api endpoint to delete a product record using product_id. Any loginned/authenticate user can delete his own product only. Any user can not delete others users product. This is achieved using combine unique index</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjctId",
            "optional": false,
            "field": "product_id",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Boolean value to showcase api execution is successful or not viz. true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Succsss full operation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object of product record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   success: true,\n   msg: \"Product updated successfully\",\n   data:{\n         \"_id\": \"59524f03e0bfb11c08de44e5\",\n         \"title\": \"title1\",\n         \"price\": 120,\n         \"quantity\": 10,\n         \"photo\": \"url\",\n         \"user_id\": \"594b8c27d4a3325f78131cc7\",\n        \"__v\": 0\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error while fetching product.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MandatoryValidation",
            "description": "<p>The manadatory Parameter is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 ServerError while deleting product.\n{\n  success: false,\n  msg: \"Something went wrong\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"No product found for corresponding user with provided product id\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"title\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X DELETE \\\n  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDUyOTYsImV4cCI6MTQ5ODYwODg5Nn0.CHlzoG_f44uzLOBFw-nqqfRsECibwXFfQSTcmrqox3M' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: 1ea9b934-2bd0-864a-a46a-bcce8e209b8c' \\\n  -d ' {\n\n            \"title\": \"tïtle1\",\n            \"price\": 120,\n            \"quantity\": 10,\n            \"photo\": \"url\"\n\n\n        }'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/get",
    "title": "Get all product record",
    "name": "GetAdd",
    "group": "Product",
    "description": "<p>This is api endpoint to retrieve all product record. \\n Any loginned/authenticate user can able to use this api. \\n</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Boolean value to showcase api execution is successful or not viz. true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Succsss full operation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Object of product record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   success: true,\n   msg: \"Product record has been retrieved\",\n   data:[{\n         \"_id\": \"59524f03e0bfb11c08de44e5\",\n         \"title\": \"t1\",\n         \"price\": 120,\n         \"quantity\": 10,\n         \"photo\": \"url\",\n         \"user_id\": \"594b8c27d4a3325f78131cc7\",\n        \"__v\": 0\n   }],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 ServerError\n{\n  success: false,\n  msg: \"Something went wrong,Product is already exists\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"No product found\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/get"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X GET \\\n  http://localhost:3001/api/product/get \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/get/:product_id",
    "title": "Get a particular product record.",
    "name": "GetAddId",
    "group": "Product",
    "description": "<p>This is api endpoint to retrieve a product record using product_id. \\n Any loginned/authenticate user can able to use this api. \\n</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Boolean value to showcase api execution is successful or not viz. true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Succsss full operation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object of product record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   success: true,\n   msg: \"Product found successfully\",\n   data:{\n         \"_id\": \"59524f03e0bfb11c08de44e5\",\n         \"title\": \"t1\",\n         \"price\": 120,\n         \"quantity\": 10,\n         \"photo\": \"url\",\n         \"user_id\": \"594b8c27d4a3325f78131cc7\",\n        \"__v\": 0\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MandatoryValidation",
            "description": "<p>The manadatory Parameter is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 ServerError\n{\n  success: false,\n  msg: \"Something went wrong, No product found\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"No product found\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"title\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X GET \\\n  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product/add",
    "title": "Add new product record",
    "name": "PostAdd",
    "group": "Product",
    "description": "<p>This is api endpoint to add create new product record. Any loginned/authenticate user can able to use this api</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Unique title of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity title of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo url of the product (No server validation applied for url)</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Boolean value to showcase api execution is successful or not viz. true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Succsss full operation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object of added product record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   success: true,\n   msg: \"New product added successfully\",\n   data:{\n         \"_id\": \"59524f03e0bfb11c08de44e5\",\n         \"title\": \"t1\",\n         \"price\": 120,\n         \"quantity\": 10,\n         \"photo\": \"url\",\n         \"user_id\": \"594b8c27d4a3325f78131cc7\",\n        \"__v\": 0\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MandatoryValidation",
            "description": "<p>The manadatory Parameter is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 ServerError\n{\n  success: false,\n  msg: \"Something went wrong,Product is already exists\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"title\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/add"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X POST \\\n  http://localhost:3001/api/product/add \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDEyODEsImV4cCI6MTQ5ODYwNDg4MX0.mHS_qP8CS3F97bdDBDWs5IUm0UUjNp3vV1H2jNEDSHY' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: 3fc5fb6c-1df0-cbb6-9133-05ee96a7191a' \\\n  -d '{\n\t\"title\":\"t5\",\n\t\"price\":\"100\",\n\t\"photo\":\"url\",\n\t\"quantity\":5\n\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "Index api call for test",
    "name": "PostProduct",
    "group": "Product",
    "description": "<p>This is test api endpoint</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "-",
            "description": "<ul> <li> <ul> <li></li> </ul> </li> </ul>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>test success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Welcome, You'r in Product module api. Kindly check API Documentation for further details\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X POST \\\n  http://localhost:3001/api/product/ \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ5Tjl5dVYyOG1WTVE2QjM5MGloVlp1dGpwSTlYZDBwSXRkSzE5R0Q3NjA4bGptWnFhaWZPQyIsInVzZXJuYW1lIjoiYWRtaW4iLCJfaWQiOiI1OTUyNTAzNGFkZjZkMjIzOTQxOTRiODQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU4Mzg0MCwiZXhwIjoxNDk4NTg3NDQwfQ.VvN0iziPv1SMhdAz6GO8RcAHc7zk1tEeCAm1ONtCSZY' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/x-www-form-urlencoded'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/product/get/:product_id",
    "title": "Update a particular product record.",
    "name": "PutAddId",
    "group": "Product",
    "description": "<p>This is api endpoint to update a product record using product_id. Any loginned/authenticate user can update his own product only. Any user can not update others users product. This is achieved using combine unique index</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique jwt token for authentication purpose</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJwYXNzd29yZCI6IiQyYSQxMCQ3RU1hbzNQVVVhUndmemZVN29tUUUuV2I1bW5Wc3JWSC9iMkIyUEZIYS40d2tZNnVBdGt1YSIsInVzZXJuYW1lIjoidmlwdWwiLCJfaWQiOiI1OTUyNzFhMDdhNmI0ODEzOTRlMTNmOWQifSwiJGluaXQiOnRydWUsImlhdCI6MTQ5ODU3OTAyNCwiZXhwIjoxNDk4NTgyNjI0fQ.44XcXlA0euMyoPt2x2ueiM1Aus9B38K71ilOqE8p0Y0\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "loginUserOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjctId",
            "optional": false,
            "field": "product_id",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>product title</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>product cost</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>product quantity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Boolean value to showcase api execution is successful or not viz. true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Succsss full operation message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object of product record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   success: true,\n   msg: \"Product updated successfully\",\n   data:{\n         \"_id\": \"59524f03e0bfb11c08de44e5\",\n         \"title\": \"title1\",\n         \"price\": 120,\n         \"quantity\": 10,\n         \"photo\": \"url\",\n         \"user_id\": \"594b8c27d4a3325f78131cc7\",\n        \"__v\": 0\n   },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error while fetching product.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorised",
            "description": "<p>The user jwt token is not authentic, expired/wrong token</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MandatoryValidation",
            "description": "<p>The manadatory Parameter is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:500",
          "content": "HTTP/1.1 500 ServerError while fetching product.\n{\n  success: false,\n  msg: \"Something went wrong, No product found\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:500",
          "content": "HTTP/1.1 500 ServerError while updating product.\n{\n  success: false,\n  msg: \"Something went wrong, product not updated\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"No product found for corresponding user with provided product id\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"UserNotAuthorised\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"title\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X PUT \\\n  http://localhost:3001/api/product/get/5952d88362ec8c1ffc4c8558 \\\n  -H 'authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDUyOTYsImV4cCI6MTQ5ODYwODg5Nn0.CHlzoG_f44uzLOBFw-nqqfRsECibwXFfQSTcmrqox3M' \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: 6c47009d-a95c-9858-80bf-250bea24f023' \\\n  -d ' {\n\n            \"title\": \"tïtle1\",\n            \"price\": 120,\n            \"quantity\": 10,\n            \"photo\": \"url\"\n\n\n        }'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/product/route.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/user/",
    "title": "User Index api call for test",
    "name": "PostUser",
    "group": "User",
    "description": "<p>This is test api endpoint for user module</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "-",
            "description": "<ul> <li> <ul> <li></li> </ul> </li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>test success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Welcome, You'r in User module api. Kindly check API Documentation for further details\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X POST \\\n  http://localhost:3001/api/user \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/x-www-form-urlencoded'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/user/route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signin",
    "title": "API call to login/signin",
    "name": "PostUserSignin",
    "group": "User",
    "description": "<p>This is the API endpoint for user login</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Unique username with minimum of 5 and maximum of 20 character long</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password with minimum of 5 and maximum of 20 character long</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message of operation</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success operation Boolean</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"success\": true,\n      \"msg\": \"LoggedIn successfully.\",\n      \"token\": \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX192IjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwicGFzc3dvcmQiOiIkMmEkMTAkOU45eXVWMjhtVk1RNkIzOTBpaFZadXRqcEk5WGQwcEl0ZEsxOUdENzYwOGxqbVpxYWlmT0MiLCJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNTk1MjUwMzRhZGY2ZDIyMzk0MTk0Yjg0In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTg2MDc4MzksImV4cCI6MTQ5ODYxMTQzOX0.vLX82xfKff1Hsql2XgTIzMMFzOSqnNFGM7WN_fkfZ_I\",\n      \"isMatch\": true\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 Bad Request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:500",
          "content": "HTTP/1.1 500 ServerError\n{\n  success: false,\n  msg: \"Something went wrong\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:404",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"Authentication failed, User not found\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"username\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/apiuser/signin"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X POST \\\n  http://localhost:3001/api/user/signin \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: b59c14f2-6384-ea9e-76c7-53896bea011c' \\\n  -d '{\n\t\"username\":\"admin\",\n\t\"password\":\"admin@123\"\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/user/route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signup",
    "title": "API call to create/signup new user",
    "name": "PostUserSignup",
    "group": "User",
    "description": "<p>This is the API endpoint for creating new user/sign up new user User name should be unique.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of content request response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Unique username with minimum of 5 and maximum of 20 character long</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password with minimum of 5 and maximum of 20 character long</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Success message of operation</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>success operation Boolean</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n   \"msg\": \"New user created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>500 Server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not record found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>400 Bad Request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:500",
          "content": "HTTP/1.1 500 ServerError\n{\n  success: false,\n  msg: \"Something went wrong/ username already exists\",\n  err_details: err\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:404",
          "content": "HTTP/1.1 404 NotFound\n{\n  success: false,\n  msg: \"Please provide username and password.\",\n  err_details: null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"Validation errors\": {\n    \"title\": {\n       \"param\": \"username\",\n       \"msg\": \"Invalid/Empty Parameter,\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/apiuser/"
      }
    ],
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl -X POST \\\n  http://localhost:3001/api/user/signup \\\n  -H 'cache-control: no-cache' \\\n  -H 'content-type: application/json' \\\n  -H 'postman-token: c83e213b-3902-5314-2c3e-8574363cbc16' \\\n  -d '{\n\t\"username\":\"testUsername\",\n\t\"password\":\"testPassword\"\n}'",
        "type": "curl"
      }
    ],
    "version": "0.0.0",
    "filename": "win-app/components/user/route.js",
    "groupTitle": "User"
  }
] });
