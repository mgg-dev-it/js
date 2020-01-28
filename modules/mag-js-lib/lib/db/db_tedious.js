'use strict';

var Connection = require('tedious').Connection;
//var connection = new Connection(config);
var conn;
var status = "";

function getStatus() {
    return (status);
}
function connect(_server, _username, _password, cb) {
    let config = {
        authentication: {
            type: "default",
            options: {
                userName: _username,
                password: _password
            }
        },
        server: _server,
        options: {
            encrypt: false
        }
    }
    conn = new Connection(config);
    //console.log(config)
    //conn.on('connect', callback_connect);
    conn.on('connect', function (err) {
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
    conn.close();
    status = "disconnected";
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getStatus: getStatus
};