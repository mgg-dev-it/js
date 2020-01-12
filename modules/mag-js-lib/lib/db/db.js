'use strict';

var debug = process.env.DEBUG || false;
//console.log(process.env.DEBUG);

var variables = {
    dbms : '',
    server : '',
    username : '',
    password : ''
}

function init(dbms, server, username, password){
    variables.dbms = dbms;
    variables.server = server;
    variables.username = username;
    variables.password = password;
    //console.log(debug);
    if (debug){
        console.log(`dbms = ${dbms}`);
        console.log(`server = ${server}`);
        console.log(`username = ${username}`);
        console.log(`password = ${password}`);
    }
}

module.exports = {
    init: init
};