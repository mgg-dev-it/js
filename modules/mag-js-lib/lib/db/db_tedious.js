'use strict';

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

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
            encrypt: false,
            rowCollectionOnRequestCompletion: true
        }
    }
    conn = new Connection(config);
    conn.on('connect', function (err) {
        if (err) {
            fn_callback_on_error(err);
        } else {
            status = "connected";
            fn_callback_on_success();
        }
    });
    return (true);
}

function request(p_sql, fn_callback) {
    request = new Request(p_sql, fn_callback);
    request.on('row', do_on_request_row);
    request.on('done', do_on_request_done);
    conn.execSql(request);
}

function do_on_request_row(columns) {
    console.log("do_on_request_row");
    console.log(columns);
}

function do_on_request_done(rowCount, more, rows) {
    console.log("do_on_request_done");
    console.log(rowCount);
    console.log(more);
    console.log(rows);
}

function disconnect() {
    conn.close();
    if (status != "") status = "disconnected";
}

module.exports = {
    connect: connect,
    request: request,
    disconnect: disconnect,
    getStatus: getStatus
};