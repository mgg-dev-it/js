'use strict';

var mssql = require("mssql");

var pool;
var status = "";

function getStatus() {
    return (status);
}

function connect(_server, _username, _password, cb) {
    let config = {
        user: _username,
        password: _password,
        server: _server,
        //database: _database,
        options: {
            encrypt: false,
            enableArithAbort: false
        }
    }
    // console.log("001");
    pool = new mssql.ConnectionPool(config);

    pool.connect(err => {
        // console.log("in connect event");
        if (err) {
            console.log(err)
        } else {
            status = "connected";
            //console.log('xxx')
            cb();
            //connected
        }
    });

    return (true);
}

function disconnect() {
    pool.close();
    status = "disconnected";
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getStatus: getStatus
};