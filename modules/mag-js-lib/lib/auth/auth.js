'use strict';

//var auth = {};

//module.exports = auth;

/**
 * Test login function
 *
 * @param {String} username The username
 * @param {String} password The password
 * @returns {boolean} True if username and password are authenticated, otherwise false
 */
function login(username, password){
	if (typeof username != "string" || typeof password != "string"){
        throw new Error("Please provide an input of type string");
		return (false);
	}
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

function checkLogin(){ 
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

module.exports = {
  login: login,
  checkLogin: checkLogin
};