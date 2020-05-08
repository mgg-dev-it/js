'use strict';

var matrix_width, matrix_height;
var characters;
var start_end_distance;
var matrix;

function init() {
    matrix_width = 7;
    matrix_height = 7;
    characters = ['X', '0'];
    start_end_distance = 5;
    initMatrix();
}

function initMatrix() {
    let rowString = ' '.repeat(matrix_width);
    //console.log(rowString);
    var rowArray = rowString.split('');
    //console.log(rowArray);
    //console.log(rowArray.toString());
    //console.log('[' + rowArray.join('][') + ']');
    matrix = [];
    for (let i = 0; i < matrix_height; i++) {
        //console.log(i);
        matrix.push(rowArray);
    }
    //console.log(matrix);
}

function displayMatrix() {
    var s = '';
    for (let iRow = 0; iRow < matrix_height; iRow++) {
        if (iRow > 0) s += '\n';
        s += '[' + matrix[iRow].join('][') + ']';
    }
    console.log(s);
}

function letterLabyrinth() {
    console.log('letterLabyrinth');
    init();
    displayMatrix();
}

module.exports = {
    letterLabyrinth: letterLabyrinth
};