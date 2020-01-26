'use strict';

const util = require('../util/util.js');
const db_tedious = require('./db_tedious.js');

var db;

var debug = process.env.DEBUG || false;
//console.log(process.env.DEBUG);

// var variables = {
//     dbms: '',
//     driver: '',
//     server: '',
//     username: '',
//     password: ''
// }

var dbms, driver, server, username, password, status;

function getStatus() {
    if (db == null) {
        return (status);
    }
    return(db.getStatus());
}

function init(_dbms, _driver, _server, _username, _password) {
    dbms = _dbms;
    driver = _driver;
    server = _server;
    username = _username;
    password = _password;
    //console.log(debug);
    if (debug) {
        console.log(`dbms = '${dbms}'`);
        console.log(`driver = '${driver}'`);
        console.log(`server = '${server}'`);
        console.log(`username = '${username}'`);
        console.log(`password = '${password}'`);
    }
    //if (util.isEmpty(variables.dbms)) throw "Missing parameter: dbms";
    status = "uninitialized";
    let retval = true;
    if (util.isEmpty(dbms)) {
        console.log("Error: missing parameter dbms");
        retval = false;
    }
    if (util.isEmpty(driver)) {
        console.log("Error: missing parameter driver");
        retval = false;
    }
    if (util.isEmpty(server)) {
        console.log("Error: missing parameter server");
        retval = false;
    }
    if (util.isEmpty(username)) {
        console.log("Error: missing parameter username");
        retval = false;
    }
    if (util.isEmpty(password)) {
        console.log("Error: missing parameter password");
        retval = false;
    }
    if (retval == true) status = "initialized";
    return (retval);
}

function connect(cb) {
    if (status != "initialized") return (false);
    let retval = false;
    db = null;
    switch (dbms) {
        case "mssql":
            switch (driver) {
                case "tedious":
                    db = db_tedious;
                    break;
                case "mssql":
                    //
                    break;
                default:
                //
            }
            break;
        case "oracle":
            //
            break;
        default:
            //
            console.log("Error: unknown dbms for connecting");
    }
    if (db != null) {
        return (db.connect(server, username, password, cb));
    } else {
        return (false);
    }
}

// function connectMSSQL() {
//     let retval = false;
//     switch (driver) {
//         case "tedious":
//             db_tedious.connect();
//             break;
//         case "mssql":
//             //
//             break;
//         default:
//             //
//             console.log("Error: unknown driver for connecting MSSQL");
//             return (false);
//     }
//     return (retval);
// }

function disconnect() {
    if (db != null) {
        status = "";
        return (db.disconnect());
    } else {
        return (false);
    }
}

module.exports = {
    init: init,
    connect: connect,
    disconnect: disconnect,
    getStatus: getStatus
};