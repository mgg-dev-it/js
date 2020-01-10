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
}

function otherFunction(){}

module.exports = {
  login: login,
  otherFunction: otherFunction
};