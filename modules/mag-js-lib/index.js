/*
*
*
*
*/

module.exports.auth = require ('./lib/auth/auth.js');
module.exports.db = require ('./lib/db/db.js');
module.exports.tds_connect = require('tedious').Connection;
module.exports.tds_request = require('tedious').Request;

module.exports.haval = require ('./lib/crypto/haval.js');
module.exports.haval_work = require ('./lib/crypto/haval_work.js');

module.exports.letlab = require ('./lib/game/letlab.js');
