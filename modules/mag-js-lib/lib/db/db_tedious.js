'use strict';

var Connection = require('tedious').Connection;
//var connection = new Connection(config);
var conn;
var status = "";

function getStatus() {
    return (status);
}

function connect(p_server, p_username, p_password, fn_callback_on_success, fn_callback_on_error) {
    let config = {
        authentication: {
            type: "default",
            options: {
                userName: p_username,
                password: p_password
            }
        },
        server: p_server,
        options: {
            encrypt: false
        }
    }
    conn = new Connection(config);
    conn.on('connect', function (err) {
        if (err) {
            //console.log(err)
            fn_callback_on_error(err);
        } else {
            status = "connected";
            fn_callback_on_success();
        }
    });
    return (true);
}

function disconnect() {
    conn.close();
    if (status != "") status = "disconnected";
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getStatus: getStatus
};