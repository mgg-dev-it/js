'use strict';

var matrix_width, matrix_height;
var characters;
var start_end_distance;
var matrix;
var startCell, endCell;
var minRouteLength;
var minLegLength;

function init() {
    matrix_width = 9;
    matrix_height = 9;
    characters = ['X', '0'];
    start_end_distance = 5;
    minRouteLength = (matrix_width + matrix_height) * 1.4142;
    minLegLength = 2;
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

function displayMatrixRoute(matrix, route) {
    let m = [];
    for (let row = 0; row < matrix.length; row++) {
        let r = [];
        for (let col = 0; col < matrix[row].length; col++) {
            r.push(matrix[row][col]);
        }
        m.push(r);
    }
    for (let i = 0; i < route.length; i++) {
        if (!route[i].equals(startCell)) {
            m[route[i].row][route[i].col] = i % 10;
        }
    }
    var s = '';
    for (let iRow = 0; iRow < matrix_height; iRow++) {
        if (iRow > 0) s += '\n';
        s += '[' + m[iRow].join('][') + ']';
    }
    console.log(s);
}

function createStartAndEnd() {
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

function swapCells(cell1, cell2) {
    let r = cell1.row;
    let c = cell1.col;
    cell1.col = cell2.col;
    cell1.row = cell2.row;
    cell2.col = c;
    cell2.row = r;
}

function changeStartAndEndWhenNeeded() {
    if (startCell.col > endCell.col) {
        swapCells(startCell, endCell);
    }
    if (startCell.col == endCell.col && startCell.row > endCell.row) {
        swapCells(startCell, endCell);
    }
}

class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    toString() {
        return (`Cell(row=${this.row} col=${this.col})`);
    }
    equals(anotherCell) {
        return (anotherCell.row == this.row && anotherCell.col == this.col);
    }
}

// function isLegLengthOK(route, cell) {
//     //if (route.length < minLegLength) return true;
//     if (route.length < 3) return true;
//     if (isCellAtTheEnd(cell)) return true;
//     let lastCellInRoute = route[route.length - 1];
//     if (cell.row == lastCellInRoute.row) {
//         if (cell.col < lastCellInRoute.col) {
//             //check left to right
//             for (let i = 2; i <= minLegLength; i++) {
//                 if (route[route.length - i].row != cell.row) return false;
//             }
//         } else {
//             //check right to left
//             for (let i = 2; i <= minLegLength; i++) {
//                 if (route[route.length - i].row != cell.row) return false;
//             }
//         }
//     }
//     if (cell.col == lastCellInRoute.col) {
//         if (cell.row < lastCellInRoute.row) {
//             //check top to bottom
//             for (let i = 2; i <= minLegLength; i++) {
//                 if (route[route.length - i].col != cell.col) return false;
//             }
//         } else {
//             //check bottom to top
//             for (let i = 2; i <= minLegLength; i++) {
//                 if (route[route.length - i].col != cell.col) return false;
//             }
//         }
//     }
//     return true;
// }

function isCellOkToRoute(route, cell) {
    for (let i = 0; i < route.length - 2; i++) {
        if (cell.row == route[i].row && cell.col == route[i].col) return false;

        if (cell.row == route[i].row - 1 && cell.col == route[i].col - 1) return false;
        if (cell.row == route[i].row - 1 && cell.col == route[i].col) return false;
        if (cell.row == route[i].row - 1 && cell.col == route[i].col + 1) return false;
        if (cell.row == route[i].row && cell.col == route[i].col + 1) return false;
        if (cell.row == route[i].row + 1 && cell.col == route[i].col + 1) return false;
        if (cell.row == route[i].row + 1 && cell.col == route[i].col) return false;
        if (cell.row == route[i].row + 1 && cell.col == route[i].col - 1) return false;
        if (cell.row == route[i].row && cell.col == route[i].col - 1) return false;

        if (cell.row == endCell.row - 1 && cell.col == endCell.col - 1) return false;
        if (cell.row == endCell.row + 1 && cell.col == endCell.col - 1) return false;
        if (cell.row == endCell.row + 1 && cell.col == endCell.col + 1) return false;
        if (cell.row == endCell.row - 1 && cell.col == endCell.col + 1) return false;
    }
    //if (!isLegLengthOK(route, cell)) return false;
    return true;
}

function isCellInMatrix(cell) {
    if (cell.row < 0 || cell.row > matrix_height - 1 || cell.col < 0 || cell.col > matrix_width - 1) return false;
    return true;
}

function isCellAtTheEnd(cell) {
    if (cell.row == endCell.row - 1 && cell.col == endCell.col) return true;
    if (cell.row == endCell.row && cell.col == endCell.col - 1) return true;
    if (cell.row == endCell.row + 1 && cell.col == endCell.col) return true;
    if (cell.row == endCell.row && cell.col == endCell.col + 1) return true;
    return false
}

function isLegLengthsAreOK(route) {
    // let r = [];
    let lastCorner = -1;
    for (let i = 0; i < route.length; i++) {
        if (i == 0 || i == route.length - 1) {
            // r.push(1);
        } else {
            if ((route[i].row == route[i - 1].row && route[i].col == route[i + 1].col) || (route[i].col == route[i - 1].col && route[i].row == route[i + 1].row)) {
                // r.push(1);
                if (lastCorner > 0) {
                    if (i - lastCorner < minLegLength) return false;
                }
                lastCorner = i;
            } else {
                // r.push(0);
            }
        }
    }
    return true;
}

function createRoute(route, level) {
    //console.log(`Level = ${level} Route = ${route.toString()}`);
    //console.log(route.toString());
    //route is an array of Cells
    let lastCellInRoute = route[route.length - 1];
    let previousCellInRoute = route.length > 1 ? route[route.length - 2] : undefined;
    //console.log(previousCellInRoute);
    let possibleNextCells = [];
    let cell = null;
    //left
    if (lastCellInRoute.col > 0 && (!previousCellInRoute || previousCellInRoute.col != lastCellInRoute.col - 1)) {
        cell = new Cell(lastCellInRoute.row, lastCellInRoute.col - 1);
        if (isCellOkToRoute(route, cell) && isCellInMatrix(cell)) {
            possibleNextCells.push(cell);
        }
    }
    //right
    if (lastCellInRoute.col < matrix_width - 1 && (!previousCellInRoute || previousCellInRoute.col != lastCellInRoute.col + 1)) {
        cell = new Cell(lastCellInRoute.row, lastCellInRoute.col + 1);
        if (isCellOkToRoute(route, cell) && isCellInMatrix(cell)) {
            possibleNextCells.push(cell);
        }
    }
    //up
    if (lastCellInRoute.row > 0 && (!previousCellInRoute || previousCellInRoute.row != lastCellInRoute.row - 1)) {
        cell = new Cell(lastCellInRoute.row - 1, lastCellInRoute.col);
        if (isCellOkToRoute(route, cell) && isCellInMatrix(cell)) {
            possibleNextCells.push(cell);
        }
    }
    //down
    if (lastCellInRoute.row < matrix_height - 1 && (!previousCellInRoute || previousCellInRoute.row != lastCellInRoute.row + 1)) {
        cell = new Cell(lastCellInRoute.row + 1, lastCellInRoute.col);
        if (isCellOkToRoute(route, cell) && isCellInMatrix(cell)) {
            possibleNextCells.push(cell);
        }
    }
    possibleNextCells.sort(function () { return 0.5 - Math.random() });
    let found_route = null;
    //console.log(possibleNextCells.toString());
    //console.log(`Level = ${level} lastCellInRoute = ${lastCellInRoute.toString()} possibleNextCells = ${possibleNextCells.toString()}`);
    for (let i = 0; i < possibleNextCells.length; i++) {
        //console.log(possibleNextCells[i].toString());
        //matrix[possibleNextCells[i].row][possibleNextCells[i].col] = i;
        let a = [...route];
        a.push(possibleNextCells[i]);
        if (isCellAtTheEnd(possibleNextCells[i])) {
            //console.log('return '+possibleNextCells[i].toString());
            if (a.length >= minRouteLength && isLegLengthsAreOK(a)) {
                return a;
            } else {
                return null;
            }
        }
        //if (level < 10) {
        //if (level < matrix_width + matrix_height + 1) {
        if (level < minRouteLength + 1) {
            //if (level < 100) {
            found_route = createRoute(a, level + 1);
            if (found_route != null) {
                return found_route;
            }
        } else {
            //console.log('');
            //console.log(`Level = ${level} i=${i} Route = ${a.toString()}`);
            //displayMatrixRoute(matrix, a);
        }
    }
    return null;
}

function letterLabyrinth() {
    //console.log('letterLabyrinth');
    let startDate = new Date();
    init();
    let i = 0;
    do {
        createStartAndEnd();
        i++;
    } while (i < 10 && !isStartAndEndOK());
    if (!isStartAndEndOK()) {
        console.log('Sorry, something went wrong during the creation - please try again!');
        return;
    }
    changeStartAndEndWhenNeeded();
    matrix[startCell.row][startCell.col] = 'S';
    matrix[endCell.row][endCell.col] = 'E';
    //createRoute([startCell, startCell]);
    let route = createRoute([startCell], 0);
    if (route != null) {
        //console.log('FOUND!!!');
        displayMatrixRoute(matrix, route);
    } else {
        console.log('not found ...');
    }
    let endDate = new Date();
    let timeElapsed = endDate.getTime() - startDate.getTime();
    // console.log(`startDate ${startDate.getMilliseconds()} milliseconds`);
    // console.log(`endDate ${endDate.getMilliseconds()} milliseconds`);
    console.log(`Elapsed ${timeElapsed} milliseconds`);
    //console.log('');
    //displayMatrix();
}

module.exports = {
    letterLabyrinth: letterLabyrinth
};