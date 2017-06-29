# Win-App
> Node.js CRUD functionality for Product

[![NPM Version][npm-image]][npm-url]
[![Build Status]
[![Downloads Stats][npm-downloads]][npm-url]


Express framework based backend modularised boilerplate.
It has authetication module using passport-jwt
Product module with CRUD functionality

![](header.png)

## Project INFORMATION

A). win-app is the project directory
B). win-app/win-apidoc folder is the api documentation

## Installation & Start Server

Steps to use win-app
1. firstly, copy win-app directory and paste it at your desired location
2. enter to the win-app directory using terminal/cmd prompt
    e.g.
```sh
  cd win-app
```
3. type "npm start" command to start the node server.
    e.g.
    ```sh
    npm start     
    ```
4. if any error occures then use "npm install" and install modules mentioned in error seperately using "npm install {modulename}"
    e.g.
    ```sh
      npm install
    ```


_For more examples and usage, please refer to the [Wiki][wiki]._

## To add test user and his dummy product into the MongoDB collections
1. enter to the win-app directory path using terminal/cmd prompt
2. use "node generateData.js", it will simply create user "winuser" with password as "win@123"

Now you are done with project installation. visit the win-apidoc/index.html with any browser and refer api documentation
 for signIn.

signIn api will provide you token value, use that value for all other api's for authentication purpose.

##If you need further assistance,Feel free to connect me @
vipul.bigbadguy@rediffmail.com
www.linkedin.com/in/vipultechfreak
+91-7798471474
## Release History

* 0.1.0
    * The first proper release



## Meta

Vipul Patil  – [@Linkedin](https://Linkedin.com/in/vipultechfreak) – vipul.bigbadguy@rediffmail.com

Distributed under the open license. See ``LICENSE`` for more information.

[https://github.com/vipulpatil/win-app](https://github.com/vipulpatil/win-app)

## Contributing

1. Fork it (<https://github.com/vipulpatil/win-app/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]:
[npm-url]:
[npm-downloads]:
