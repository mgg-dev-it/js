'use strict';

const jwt = require("jsonwebtoken");

function init(_logindataprovider) {
}

const secretKey = "secretkey";

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     if (req.body.username && req.body.password) {
//         if (req.body.username == "admin" && req.body.password == "secret") {
//             //console.log("success");
//             let jwtToken = jwt.sign({ data: "admin", role: "role_admin", akarmi: "xxx", exp: new Date().setDate(new Date().getDate() + 1) }, secretKey);
//             res.json({ success: true, token: jwtToken });
//         }
//     }
//     res.json({ success: false, message: "Login failed" });
//     //res.send("Login failed");
// });

// function verifyToken(req, res, next) {
// 	//if (req.query.token === goodtoken) next();
// 	//else res.status(500).send('Try again ...!')
// 	//if (req.body.token){
// 	//	console.log(req.body.token);
// 	//}
// 	if (req.headers.token) {
// 		console.log(req.headers.token);
// 		jwt.verify(req.headers.token, secretKey, (err, decoded) => {
// 			if (decoded) {
// 				console.log("jwt.verify success");
// 				console.log(decoded);
// 				console.log(new Date(decoded.exp));
// 				console.log(new Date(decoded.iat));
// 				next();
// 			}
// 			if (err) {
// 				console.log("jwt.verify error");
// 				//console.log(err);
// 				console.log(err.name);
// 				console.log(err.message);
// 				//res.status(403).send("403 Forbidden");
// 				res.status(403).json({ success: false, error: true, message: "Login failed", jwterrormessage: err.message });
// 			}
// 		});
// 	} else {
// 		//next();
// 		//res.status(401).send("401 Unauthorized");
// 		res.status(401).json({ success: false, error: true, message: "Missing token" });
// 	}
// }

// app.use(verifyToken);


module.exports = {
    init: init
};