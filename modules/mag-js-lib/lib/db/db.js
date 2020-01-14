'use strict';

const util = require('../util/util.js');

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
    return (status);
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

function connect() {
    if (status != "initialized") return (false);
    let retval = false;
    switch (dbms) {
        case "mssql":
            retval = connectMSSQL();
            break;
        case "oracle":
            //
            break;
        default:
            //
            console.log("Error: unknown dbms for connecting");
            return (false);
    }
    return (retval);
}

function connectMSSQL() {
    let retval = false;
    switch (driver) {
        case "tedious":
            //
            break;
        case "ms":
            //
            break;
        default:
            //
            console.log("Error: unknown driver for connecting MSSQL");
            return (false);
    }
    return (retval);
}

module.exports = {
    init: init,
    connect: connect,
    getStatus: getStatus
};