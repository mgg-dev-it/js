'use strict';

const util = require('../util/util.js');
const db_tedious = require('./db_tedious.js');
const db_mssql = require('./db_mssql.js');

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
    return (db.getStatus());
}

function isConnected() {
    return (getStatus() == "connected");
}

function init(p_dbms, p_driver, p_server, p_username, p_password) {
    dbms = p_dbms;
    driver = p_driver;
    server = p_server;
    username = p_username;
    password = p_password;
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

function connect(fn_callback_on_success, fn_callback_on_error) {
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
                    // console.log("009");

                    db = db_mssql;
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
        return (db.connect(server, username, password, fn_callback_on_success, fn_callback_on_error));
    } else {
        return (false);
    }
}

function request(p_sql, fn_callback, fn_completed) {
    if (db != null) {
        return (db.request(p_sql, fn_callback, fn_completed));
    } else {
        return (false);
    }
}

function disconnect() {
    if (db != null) {
        status = "";
        return (db.disconnect());
    } else {
        return (false);
    }
}

function getResultSetCount() {
    if (db != null) {
        return (db.getResultSetCount());
    } else {
        return (0);
    }
}

function getMetadata(index){
    if (db != null) {
        return (db.getMetadata(index));
    } else {
        return (null);
    }
}

module.exports = {
    init: init,
    connect: connect,
    request: request,
    disconnect: disconnect,
    getStatus: getStatus,
    getResultSetCount: getResultSetCount,
    getMetadata: getMetadata
};