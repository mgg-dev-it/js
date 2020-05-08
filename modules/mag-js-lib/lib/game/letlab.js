'use strict';

var matrix_width, matrix_height;
var characters;
var start_end_distance;
var matrix;
var startCell, endCell;

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
    //    let rowArray = rowString.split('');
    //console.log(rowArray);
    //console.log(rowArray.toString());
    //console.log('[' + rowArray.join('][') + ']');
    matrix = [];
    for (let i = 0; i < matrix_height; i++) {
        //console.log(i);
        let rowArray = rowString.split('');
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

function generateStartAndEnd() {
    let sides = ['left', 'top', 'right', "bottom"];
    let startSide = sides.splice(Math.floor(Math.random() * 4), 1)[0];
    //console.log(startSide);
    let endSide = sides.splice(Math.floor(Math.random() * 3), 1)[0];
    //console.log(endSide);
    switch (startSide) {
        case 'left':
            startCell = new Cell(Math.floor(Math.random() * matrix_height), 0);
            break;
        case 'top':
            startCell = new Cell(0, Math.floor(Math.random() * matrix_width));
            break;
        case 'right':
            startCell = new Cell(Math.floor(Math.random() * matrix_height), matrix_width - 1);
            break;
        case 'bottom':
            startCell = new Cell(matrix_height - 1, Math.floor(Math.random() * matrix_width));
            break;
        default:
    }
    //console.log(`startCell at ${startSide} = ${startCell.toString()}`);
    switch (endSide) {
        case 'left':
            endCell = new Cell(Math.floor(Math.random() * matrix_height), 0);
            break;
        case 'top':
            endCell = new Cell(0, Math.floor(Math.random() * matrix_width));
            break;
        case 'right':
            endCell = new Cell(Math.floor(Math.random() * matrix_height), matrix_width - 1);
            break;
        case 'bottom':
            endCell = new Cell(matrix_height - 1, Math.floor(Math.random() * matrix_width));
            break;
        default:
    }
    //console.log(`endCell at ${endSide} = ${endCell.toString()}`);
}

function isStartAndEndOK() {
    if (startCell.row == endCell.row && startCell.col == endCell.col) return (false);
    if (startCell.row == 0 && endCell.row == matrix_height - 1) return (true);
    if (startCell.row == matrix_height - 1 && endCell.row == 0) return (true);
    if (startCell.col == 0 && endCell.col == matrix_width - 1) return (true);
    if (startCell.col == matrix_width - 1 && endCell.col == 0) return (true);
    let distance = Math.abs(startCell.row - endCell.row) + Math.abs(startCell.col - endCell.col);
    //console.log(`distance = ${distance}`);
    if (distance <= Math.min(matrix_width, matrix_height) - 2) return (false);
    return (true);
}

class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    toString() {
        return (`Cell(row=${this.row} col=${this.col})`);
    }
}

function letterLabyrinth() {
    console.log('letterLabyrinth');
    init();
    let i = 0;
    do {
        generateStartAndEnd();
        i++;
    } while (i < 10 && !isStartAndEndOK());
    if (!isStartAndEndOK()) {
        console.log('Sorry, something went wrong during the creation - please try again!');
        return;
    }
    matrix[startCell.row][startCell.col] = 'S';
    matrix[endCell.row][endCell.col] = 'E';
    displayMatrix();
}

module.exports = {
    letterLabyrinth: letterLabyrinth
};