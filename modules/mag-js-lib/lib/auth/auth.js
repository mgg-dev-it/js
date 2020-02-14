'use strict';

//var auth = {};

//module.exports = auth;

//const chilkat = require('@chilkat/ck-node12-win64');
//const crypt = new chilkat.Crypt2();

var status = "";
var logindataprovider;

function init(_logindataprovider) {
  if (!_logindataprovider.login) {
    throw new Error("_logindataprovider.login not exists");
    //@todo check parameters too?
    return (false);
  }
  logindataprovider = _logindataprovider;
  status = "initialized";
}

function testlogindataprovider() {
  return {
    login(username, password, options) {
      if (username == "admin" && password == "admin") {
        return (JSON.stringify({ username: username, success: true, role: "admin" }));
      }
      if (username == "user" && password == "user") {
        return (JSON.stringify({ username: username, success: true, role: "user" }));
      }
      return (JSON.stringify({ username: username, success: false, error: "Login has failed." }));
    }
  }
}

/**
 * Test login function
 *
 * @param {String} username The username
 * @param {String} password The password
 * @param {String} options  The options
 * @returns {boolean} True if username and password are authenticated, otherwise false
 */
function login(username, password, options) {
  if (typeof username != "string" || typeof password != "string") {
    throw new Error("Please provide an input of type string");
    return (false);
  }
  if (!logindataprovider.login) {
    return (false);
  }
  return (logindataprovider.login(username, password));
  // app.post("/login", (req, res) => {
  //   console.log(req.body);
  //   if (req.body.username && req.body.password){
  //     if (req.body.username == "admin" && req.body.password == "secret"){
  //       //console.log("success");
  //       let jwtToken = jwt.sign({data:"admin", role: "role_admin", exp: new Date().setDate(new Date().getDate()+1)}, secretKey);
  //       res.json({success:true, token: jwtToken});
  //     }
  //   }
  //   res.json({success:false, message: "Login failed"});
  //   //res.send("Login failed");
  // });

}

function checkLogin() {
  // function verifyToken (req, res, next) {
  //   //if (req.query.token === goodtoken) next();
  //   //else res.status(500).send('Try again ...!')
  //   //if (req.body.token){
  //   //	console.log(req.body.token);
  //   //}
  //   if (req.headers.token){
  //     console.log(req.headers.token);
  //     jwt.verify(req.headers.token, secretKey, (err, decoded) => {
  //       if (decoded){
  //         console.log(decoded);
  //         console.log(new Date(decoded.exp));
  //         console.log(new Date(decoded.iat));
  //       }
  //       if (err){
  //         console.log(err);
  //       }
  //     });
  //   }
  //   next();
  // }

  // app.use(verifyToken);

}

// function haval(s) {
//   crypt.EncodingMode = "hex";
//   // Hash using HAVAL
//   // There are two additional properties relevant to HAVAL:
//   // HavalRounds, and KeyLength.
//   // HavalRounds can have values of 3, 4, or 5.
//   // KeyLength can have values of 128, 160, 192, 224, or 256
//   crypt.HashAlgorithm = "haval";
//   crypt.HavalRounds = 5;
//   crypt.KeyLength = 256;
//   var hash = crypt.HashStringENC(s);
//   console.log("Haval: " + hash);
// }

const crypto = require('crypto');
//const hash = crypto.createHash('sha256');
//const hash = crypto.createHash('haval');

function haval(s) {
  var hash = crypto.createHash('sha256');
  hash.update(s);
  //console.log(s);
  //console.log(hash.digest('hex'));
  var ret = hash.digest('hex');
  return(ret);
}

module.exports = {
  init: init,
  login: login,
  checkLogin: checkLogin,
  testlogindataprovider: testlogindataprovider,
  haval: haval
};