'use strict';

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var conn;
var status = "";
var metadata = [];
var resultset = [];

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

function request(p_sql, fn_callback, fn_completed) {
    metadata = [];
    resultset = [];
    request = new Request(p_sql, fn_callback);
    request.on('columnMetadata', do_on_request_columnMetadata);
    request.on('row', do_on_request_row);
    request.on('done', do_on_request_done);
    request.on('doneProc', do_on_request_doneProc);
    request.on('doneInProc', do_on_request_doneInProc);
    //request.on('requestCompleted', do_on_request_requestCompleted);
    request.on('requestCompleted', fn_completed);
    conn.execSql(request);
}

function do_on_request_columnMetadata(columns) {
    console.log("do_on_request_columnMetadata");
    metadata.push(columns);
    console.log(columns);
}

function do_on_request_row(columns) {
    console.log("do_on_request_row");
    console.log(columns);
}

function do_on_request_done(rowCount, more, rows) {
    console.log("do_on_request_done");
    console.log("rowCount = " + rowCount);
    console.log("more = " + more);
    console.log(rows);
}

function do_on_request_doneProc(rowCount, more, rows) {
    console.log("do_on_request_doneProc");
    console.log("rowCount = " + rowCount);
    console.log("more = " + more);
    console.log(rows);
}

function do_on_request_doneInProc(rowCount, more, rows) {
    console.log("do_on_request_doneInProc");
    console.log("rowCount = " + rowCount);
    console.log("more = " + more);
    console.log(rows);
}

// function do_on_request_requestCompleted() {
//     console.log("do_on_request_requestCompleted");
// }

function disconnect() {
    conn.close();
    if (status != "") status = "disconnected";
}

function getResultSetCount() {
    return (metadata.length);
}

function getMetadata(index){
    if (index == undefined) index = 0;
    if (index<0 || index>=metadata.length) return(null);
    return(metadata[index]);
}

module.exports = {
    connect: connect,
    request: request,
    disconnect: disconnect,
    getStatus: getStatus,
    getResultSetCount: getResultSetCount,
    getMetadata: getMetadata
};