'use strict';

const util = require('../util/util.js');

const HAVAL_HASH = "haval";
const HAVAL_VERSION = 1;

const HAVAL_128_BIT = 16;
const HAVAL_160_BIT = 20;
const HAVAL_192_BIT = 24;
const HAVAL_224_BIT = 28;
const HAVAL_256_BIT = 32;

const HAVAL_3_ROUND = 3;
const HAVAL_4_ROUND = 4;
const HAVAL_5_ROUND = 5;

const BLOCK_SIZE = 128; // inner block size in bytes

var valid;
var rounds = HAVAL_3_ROUND;
var h0, h1, h2, h3, h4, h5, h6, h7;
var name;
var hashSize;
var blockSize;
var count;
var buffer;

function init() {
    name = HAVAL_HASH;
    hashSize = HAVAL_256_BIT;
    blockSize = BLOCK_SIZE;
    count = 0;
    rounds = HAVAL_5_ROUND;
    buffer = util.initArray(0, blockSize);
    h0 = 0;
    h1 = 0;
    h2 = 0;
    h3 = 0;
    h4 = 0;
    h5 = 0;
    h6 = 0;
    h7 = 0;
    resetContext();
}

function resetContext() {
    h0 = 608135816;
    h1 = -2052912941;
    h2 = 320440878;
    h3 = 57701188;
    h4 = -1542899678;
    h5 = 698298832;
    h6 = 137296536;
    h7 = -330404727;
};

function transform(__in, i) {
    var X0 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X1 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X2 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X3 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X4 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X5 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X6 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X7 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X8 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X9 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X10 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X11 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X12 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X13 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X14 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X15 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X16 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X17 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X18 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X19 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X20 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X21 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X22 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X23 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X24 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X25 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X26 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X27 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X28 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X29 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X30 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var X31 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
    var t0 = h0;
    var t1 = h1;
    var t2 = h2;
    var t3 = h3;
    var t4 = h4;
    var t5 = h5;
    var t6 = h6;
    var t7 = h7;
    t7 = FF1(t7, t6, t5, t4, t3, t2, t1, t0, X0);
    t6 = FF1(t6, t5, t4, t3, t2, t1, t0, t7, X1);
    t5 = FF1(t5, t4, t3, t2, t1, t0, t7, t6, X2);
    t4 = FF1(t4, t3, t2, t1, t0, t7, t6, t5, X3);
    t3 = FF1(t3, t2, t1, t0, t7, t6, t5, t4, X4);
    t2 = FF1(t2, t1, t0, t7, t6, t5, t4, t3, X5);
    t1 = FF1(t1, t0, t7, t6, t5, t4, t3, t2, X6);
    t0 = FF1(t0, t7, t6, t5, t4, t3, t2, t1, X7);
    t7 = FF1(t7, t6, t5, t4, t3, t2, t1, t0, X8);
    t6 = FF1(t6, t5, t4, t3, t2, t1, t0, t7, X9);
    t5 = FF1(t5, t4, t3, t2, t1, t0, t7, t6, X10);
    t4 = FF1(t4, t3, t2, t1, t0, t7, t6, t5, X11);
    t3 = FF1(t3, t2, t1, t0, t7, t6, t5, t4, X12);
    t2 = FF1(t2, t1, t0, t7, t6, t5, t4, t3, X13);
    t1 = FF1(t1, t0, t7, t6, t5, t4, t3, t2, X14);
    t0 = FF1(t0, t7, t6, t5, t4, t3, t2, t1, X15);
    t7 = FF1(t7, t6, t5, t4, t3, t2, t1, t0, X16);
    t6 = FF1(t6, t5, t4, t3, t2, t1, t0, t7, X17);
    t5 = FF1(t5, t4, t3, t2, t1, t0, t7, t6, X18);
    t4 = FF1(t4, t3, t2, t1, t0, t7, t6, t5, X19);
    t3 = FF1(t3, t2, t1, t0, t7, t6, t5, t4, X20);
    t2 = FF1(t2, t1, t0, t7, t6, t5, t4, t3, X21);
    t1 = FF1(t1, t0, t7, t6, t5, t4, t3, t2, X22);
    t0 = FF1(t0, t7, t6, t5, t4, t3, t2, t1, X23);
    t7 = FF1(t7, t6, t5, t4, t3, t2, t1, t0, X24);
    t6 = FF1(t6, t5, t4, t3, t2, t1, t0, t7, X25);
    t5 = FF1(t5, t4, t3, t2, t1, t0, t7, t6, X26);
    t4 = FF1(t4, t3, t2, t1, t0, t7, t6, t5, X27);
    t3 = FF1(t3, t2, t1, t0, t7, t6, t5, t4, X28);
    t2 = FF1(t2, t1, t0, t7, t6, t5, t4, t3, X29);
    t1 = FF1(t1, t0, t7, t6, t5, t4, t3, t2, X30);
    t0 = FF1(t0, t7, t6, t5, t4, t3, t2, t1, X31);
    t7 = FF2(t7, t6, t5, t4, t3, t2, t1, t0, X5, 1160258022);
    t6 = FF2(t6, t5, t4, t3, t2, t1, t0, t7, X14, 953160567);
    t5 = FF2(t5, t4, t3, t2, t1, t0, t7, t6, X26, -1101764913);
    t4 = FF2(t4, t3, t2, t1, t0, t7, t6, t5, X18, 887688300);
    t3 = FF2(t3, t2, t1, t0, t7, t6, t5, t4, X11, -1062458953);
    t2 = FF2(t2, t1, t0, t7, t6, t5, t4, t3, X28, -914599715);
    t1 = FF2(t1, t0, t7, t6, t5, t4, t3, t2, X7, 1065670069);
    t0 = FF2(t0, t7, t6, t5, t4, t3, t2, t1, X16, -1253635817);
    t7 = FF2(t7, t6, t5, t4, t3, t2, t1, t0, X0, -1843997223);
    t6 = FF2(t6, t5, t4, t3, t2, t1, t0, t7, X23, -1988494565);
    t5 = FF2(t5, t4, t3, t2, t1, t0, t7, t6, X20, -785314906);
    t4 = FF2(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1730169428);
    t3 = FF2(t3, t2, t1, t0, t7, t6, t5, t4, X1, 805139163);
    t2 = FF2(t2, t1, t0, t7, t6, t5, t4, t3, X10, -803545161);
    t1 = FF2(t1, t0, t7, t6, t5, t4, t3, t2, X4, -1193168915);
    t0 = FF2(t0, t7, t6, t5, t4, t3, t2, t1, X8, 1780907670);
    t7 = FF2(t7, t6, t5, t4, t3, t2, t1, t0, X30, -1166241723);
    t6 = FF2(t6, t5, t4, t3, t2, t1, t0, t7, X3, -248741991);
    t5 = FF2(t5, t4, t3, t2, t1, t0, t7, t6, X21, 614570311);
    t4 = FF2(t4, t3, t2, t1, t0, t7, t6, t5, X9, -1282315017);
    t3 = FF2(t3, t2, t1, t0, t7, t6, t5, t4, X17, 134345442);
    t2 = FF2(t2, t1, t0, t7, t6, t5, t4, t3, X24, -2054226922);
    t1 = FF2(t1, t0, t7, t6, t5, t4, t3, t2, X29, 1667834072);
    t0 = FF2(t0, t7, t6, t5, t4, t3, t2, t1, X6, 1901547113);
    t7 = FF2(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1537671517);
    t6 = FF2(t6, t5, t4, t3, t2, t1, t0, t7, X12, -191677058);
    t5 = FF2(t5, t4, t3, t2, t1, t0, t7, t6, X15, 227898511);
    t4 = FF2(t4, t3, t2, t1, t0, t7, t6, t5, X13, 1921955416);
    t3 = FF2(t3, t2, t1, t0, t7, t6, t5, t4, X2, 1904987480);
    t2 = FF2(t2, t1, t0, t7, t6, t5, t4, t3, X25, -2112533778);
    t1 = FF2(t1, t0, t7, t6, t5, t4, t3, t2, X31, 2069144605);
    t0 = FF2(t0, t7, t6, t5, t4, t3, t2, t1, X27, -1034266187);
    t7 = FF3(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1674521287);
    t6 = FF3(t6, t5, t4, t3, t2, t1, t0, t7, X9, 720527379);
    t5 = FF3(t5, t4, t3, t2, t1, t0, t7, t6, X4, -976113629);
    t4 = FF3(t4, t3, t2, t1, t0, t7, t6, t5, X20, 677414384);
    t3 = FF3(t3, t2, t1, t0, t7, t6, t5, t4, X28, -901678824);
    t2 = FF3(t2, t1, t0, t7, t6, t5, t4, t3, X17, -1193592593);
    t1 = FF3(t1, t0, t7, t6, t5, t4, t3, t2, X8, -1904616272);
    t0 = FF3(t0, t7, t6, t5, t4, t3, t2, t1, X22, 1614419982);
    t7 = FF3(t7, t6, t5, t4, t3, t2, t1, t0, X29, 1822297739);
    t6 = FF3(t6, t5, t4, t3, t2, t1, t0, t7, X14, -1340175810);
    t5 = FF3(t5, t4, t3, t2, t1, t0, t7, t6, X25, -686458943);
    t4 = FF3(t4, t3, t2, t1, t0, t7, t6, t5, X12, -1120842969);
    t3 = FF3(t3, t2, t1, t0, t7, t6, t5, t4, X24, 2024746970);
    t2 = FF3(t2, t1, t0, t7, t6, t5, t4, t3, X30, 1432378464);
    t1 = FF3(t1, t0, t7, t6, t5, t4, t3, t2, X16, -430627341);
    t0 = FF3(t0, t7, t6, t5, t4, t3, t2, t1, X26, -1437226092);
    t7 = FF3(t7, t6, t5, t4, t3, t2, t1, t0, X31, 1464375394);
    t6 = FF3(t6, t5, t4, t3, t2, t1, t0, t7, X15, 1676153920);
    t5 = FF3(t5, t4, t3, t2, t1, t0, t7, t6, X7, 1439316330);
    t4 = FF3(t4, t3, t2, t1, t0, t7, t6, t5, X3, 715854006);
    t3 = FF3(t3, t2, t1, t0, t7, t6, t5, t4, X1, -1261675468);
    t2 = FF3(t2, t1, t0, t7, t6, t5, t4, t3, X0, 289532110);
    t1 = FF3(t1, t0, t7, t6, t5, t4, t3, t2, X18, -1588296017);
    t0 = FF3(t0, t7, t6, t5, t4, t3, t2, t1, X27, 2087905683);
    t7 = FF3(t7, t6, t5, t4, t3, t2, t1, t0, X13, -1276242927);
    t6 = FF3(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1668267050);
    t5 = FF3(t5, t4, t3, t2, t1, t0, t7, t6, X21, 732546397);
    t4 = FF3(t4, t3, t2, t1, t0, t7, t6, t5, X10, 1947742710);
    t3 = FF3(t3, t2, t1, t0, t7, t6, t5, t4, X23, -832815594);
    t2 = FF3(t2, t1, t0, t7, t6, t5, t4, t3, X11, -1685613794);
    t1 = FF3(t1, t0, t7, t6, t5, t4, t3, t2, X5, -1344882125);
    t0 = FF3(t0, t7, t6, t5, t4, t3, t2, t1, X2, 1814351708);
    if (rounds >= 4) {
        t7 = FF4(t7, t6, t5, t4, t3, t2, t1, t0, X24, 2050118529);
        t6 = FF4(t6, t5, t4, t3, t2, t1, t0, t7, X4, 680887927);
        t5 = FF4(t5, t4, t3, t2, t1, t0, t7, t6, X0, 999245976);
        t4 = FF4(t4, t3, t2, t1, t0, t7, t6, t5, X14, 1800124847);
        t3 = FF4(t3, t2, t1, t0, t7, t6, t5, t4, X2, -994056165);
        t2 = FF4(t2, t1, t0, t7, t6, t5, t4, t3, X7, 1713906067);
        t1 = FF4(t1, t0, t7, t6, t5, t4, t3, t2, X28, 1641548236);
        t0 = FF4(t0, t7, t6, t5, t4, t3, t2, t1, X23, -81679983);
        t7 = FF4(t7, t6, t5, t4, t3, t2, t1, t0, X26, 1216130144);
        t6 = FF4(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1575780402);
        t5 = FF4(t5, t4, t3, t2, t1, t0, t7, t6, X30, -276538019);
        t4 = FF4(t4, t3, t2, t1, t0, t7, t6, t5, X20, -377129551);
        t3 = FF4(t3, t2, t1, t0, t7, t6, t5, t4, X18, -601480446);
        t2 = FF4(t2, t1, t0, t7, t6, t5, t4, t3, X25, -345695352);
        t1 = FF4(t1, t0, t7, t6, t5, t4, t3, t2, X19, 596196993);
        t0 = FF4(t0, t7, t6, t5, t4, t3, t2, t1, X3, -745100091);
        t7 = FF4(t7, t6, t5, t4, t3, t2, t1, t0, X22, 258830323);
        t6 = FF4(t6, t5, t4, t3, t2, t1, t0, t7, X11, -2081144263);
        t5 = FF4(t5, t4, t3, t2, t1, t0, t7, t6, X31, 772490370);
        t4 = FF4(t4, t3, t2, t1, t0, t7, t6, t5, X21, -1534844924);
        t3 = FF4(t3, t2, t1, t0, t7, t6, t5, t4, X8, 1774776394);
        t2 = FF4(t2, t1, t0, t7, t6, t5, t4, t3, X27, -1642095778);
        t1 = FF4(t1, t0, t7, t6, t5, t4, t3, t2, X12, 566650946);
        t0 = FF4(t0, t7, t6, t5, t4, t3, t2, t1, X9, -152474470);
        t7 = FF4(t7, t6, t5, t4, t3, t2, t1, t0, X1, 1728879713);
        t6 = FF4(t6, t5, t4, t3, t2, t1, t0, t7, X29, -1412200208);
        t5 = FF4(t5, t4, t3, t2, t1, t0, t7, t6, X5, 1783734482);
        t4 = FF4(t4, t3, t2, t1, t0, t7, t6, t5, X15, -665571480);
        t3 = FF4(t3, t2, t1, t0, t7, t6, t5, t4, X17, -1777359064);
        t2 = FF4(t2, t1, t0, t7, t6, t5, t4, t3, X10, -1420741725);
        t1 = FF4(t1, t0, t7, t6, t5, t4, t3, t2, X16, 1861159788);
        t0 = FF4(t0, t7, t6, t5, t4, t3, t2, t1, X13, 326777828);
        if (rounds === 5) {
            t7 = FF5(t7, t6, t5, t4, t3, t2, t1, t0, X27, -1170476976);
            t6 = FF5(t6, t5, t4, t3, t2, t1, t0, t7, X3, 2130389656);
            t5 = FF5(t5, t4, t3, t2, t1, t0, t7, t6, X21, -1578015459);
            t4 = FF5(t4, t3, t2, t1, t0, t7, t6, t5, X26, 967770486);
            t3 = FF5(t3, t2, t1, t0, t7, t6, t5, t4, X17, 1724537150);
            t2 = FF5(t2, t1, t0, t7, t6, t5, t4, t3, X11, -2109534584);
            t1 = FF5(t1, t0, t7, t6, t5, t4, t3, t2, X20, -1930525159);
            t0 = FF5(t0, t7, t6, t5, t4, t3, t2, t1, X29, 1164943284);
            t7 = FF5(t7, t6, t5, t4, t3, t2, t1, t0, X19, 2105845187);
            t6 = FF5(t6, t5, t4, t3, t2, t1, t0, t7, X0, 998989502);
            t5 = FF5(t5, t4, t3, t2, t1, t0, t7, t6, X12, -529566248);
            t4 = FF5(t4, t3, t2, t1, t0, t7, t6, t5, X7, -2050940813);
            t3 = FF5(t3, t2, t1, t0, t7, t6, t5, t4, X13, 1075463327);
            t2 = FF5(t2, t1, t0, t7, t6, t5, t4, t3, X8, 1455516326);
            t1 = FF5(t1, t0, t7, t6, t5, t4, t3, t2, X31, 1322494562);
            t0 = FF5(t0, t7, t6, t5, t4, t3, t2, t1, X10, 910128902);
            t7 = FF5(t7, t6, t5, t4, t3, t2, t1, t0, X5, 469688178);
            t6 = FF5(t6, t5, t4, t3, t2, t1, t0, t7, X9, 1117454909);
            t5 = FF5(t5, t4, t3, t2, t1, t0, t7, t6, X14, 936433444);
            t4 = FF5(t4, t3, t2, t1, t0, t7, t6, t5, X30, -804646328);
            t3 = FF5(t3, t2, t1, t0, t7, t6, t5, t4, X18, -619713837);
            t2 = FF5(t2, t1, t0, t7, t6, t5, t4, t3, X6, 1240580251);
            t1 = FF5(t1, t0, t7, t6, t5, t4, t3, t2, X28, 122909385);
            t0 = FF5(t0, t7, t6, t5, t4, t3, t2, t1, X24, -2137449605);
            t7 = FF5(t7, t6, t5, t4, t3, t2, t1, t0, X2, 634681816);
            t6 = FF5(t6, t5, t4, t3, t2, t1, t0, t7, X23, -152510729);
            t5 = FF5(t5, t4, t3, t2, t1, t0, t7, t6, X16, -469872614);
            t4 = FF5(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1233564613);
            t3 = FF5(t3, t2, t1, t0, t7, t6, t5, t4, X4, -1754472259);
            t2 = FF5(t2, t1, t0, t7, t6, t5, t4, t3, X1, 79693498);
            t1 = FF5(t1, t0, t7, t6, t5, t4, t3, t2, X25, -1045868618);
            t0 = FF5(t0, t7, t6, t5, t4, t3, t2, t1, X15, 1084186820);
        }
    }
    h7 += t7;
    h6 += t6;
    h5 += t5;
    h4 += t4;
    h3 += t3;
    h2 += t2;
    h1 += t1;
    h0 += t0;
};

function padBuffer() {
    var n = ((count % BLOCK_SIZE) | 0);
    var padding = (n < 118) ? (118 - n) : (246 - n);
    var result = (function (s) {
        var a = []; while (s-- > 0)
            a.push(0); return a;
    })(padding + 10);
    result[0] = 255 & (1 | 0);
    var bl = hashSize * 8;
    result[padding++] = 255 & ((((bl & 3) << 6) | ((rounds & 7) << 3) | (HAVAL_VERSION & 7)) | 0);
    result[padding++] = 255 & ((bl >>> 2) | 0);
    var bits = count << 3;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    bits = bits >>> 8;
    result[padding++] = 255 & (bits | 0);
    return result;
};

function getResult() {
    tailorDigestBits();
    var result = (function (s) {
        var a = []; while (s-- > 0)
            a.push(0); return a;
    })(hashSize);
    if (hashSize >= HAVAL_256_BIT) {
        result[31] = 255 & ((h7 >>> 24) | 0);
        result[30] = 255 & ((h7 >>> 16) | 0);
        result[29] = 255 & ((h7 >>> 8) | 0);
        result[28] = 255 & (h7 | 0);
    }
    if (hashSize >= HAVAL_224_BIT) {
        result[27] = 255 & ((h6 >>> 24) | 0);
        result[26] = 255 & ((h6 >>> 16) | 0);
        result[25] = 255 & ((h6 >>> 8) | 0);
        result[24] = 255 & (h6 | 0);
    }
    if (hashSize >= HAVAL_192_BIT) {
        result[23] = 255 & ((h5 >>> 24) | 0);
        result[22] = 255 & ((h5 >>> 16) | 0);
        result[21] = 255 & ((h5 >>> 8) | 0);
        result[20] = 255 & (h5 | 0);
    }
    if (hashSize >= HAVAL_160_BIT) {
        result[19] = 255 & ((h4 >>> 24) | 0);
        result[18] = 255 & ((h4 >>> 16) | 0);
        result[17] = 255 & ((h4 >>> 8) | 0);
        result[16] = 255 & (h4 | 0);
    }
    result[15] = 255 & ((h3 >>> 24) | 0);
    result[14] = 255 & ((h3 >>> 16) | 0);
    result[13] = 255 & ((h3 >>> 8) | 0);
    result[12] = 255 & (h3 | 0);
    result[11] = 255 & ((h2 >>> 24) | 0);
    result[10] = 255 & ((h2 >>> 16) | 0);
    result[9] = 255 & ((h2 >>> 8) | 0);
    result[8] = 255 & (h2 | 0);
    result[7] = 255 & ((h1 >>> 24) | 0);
    result[6] = 255 & ((h1 >>> 16) | 0);
    result[5] = 255 & ((h1 >>> 8) | 0);
    result[4] = 255 & (h1 | 0);
    result[3] = 255 & ((h0 >>> 24) | 0);
    result[2] = 255 & ((h0 >>> 16) | 0);
    result[1] = 255 & ((h0 >>> 8) | 0);
    result[0] = 255 & (h0 | 0);
    return result;
};

function tailorDigestBits() {
    var t;
    switch ((hashSize)) {
        case 16 /* HAVAL_128_BIT */:
            t = (h7 & 255) | (h6 & -16777216) | (h5 & 16711680) | (h4 & 65280);
            h0 += t >>> 8 | t << 24;
            t = (h7 & 65280) | (h6 & 255) | (h5 & -16777216) | (h4 & 16711680);
            h1 += t >>> 16 | t << 16;
            t = (h7 & 16711680) | (h6 & 65280) | (h5 & 255) | (h4 & -16777216);
            h2 += t >>> 24 | t << 8;
            t = (h7 & -16777216) | (h6 & 16711680) | (h5 & 65280) | (h4 & 255);
            h3 += t;
            break;
        case 20 /* HAVAL_160_BIT */:
            t = (h7 & 63) | (h6 & (127 << 25)) | (h5 & (63 << 19));
            h0 += t >>> 19 | t << 13;
            t = (h7 & (63 << 6)) | (h6 & 63) | (h5 & (127 << 25));
            h1 += t >>> 25 | t << 7;
            t = (h7 & (127 << 12)) | (h6 & (63 << 6)) | (h5 & 63);
            h2 += t;
            t = (h7 & (63 << 19)) | (h6 & (127 << 12)) | (h5 & (63 << 6));
            h3 += (t >>> 6);
            t = (h7 & (127 << 25)) | (h6 & (63 << 19)) | (h5 & (127 << 12));
            h4 += (t >>> 12);
            break;
        case 24 /* HAVAL_192_BIT */:
            t = (h7 & 31) | (h6 & (63 << 26));
            h0 += t >>> 26 | t << 6;
            t = (h7 & (31 << 5)) | (h6 & 31);
            h1 += t;
            t = (h7 & (63 << 10)) | (h6 & (31 << 5));
            h2 += (t >>> 5);
            t = (h7 & (31 << 16)) | (h6 & (63 << 10));
            h3 += (t >>> 10);
            t = (h7 & (31 << 21)) | (h6 & (31 << 16));
            h4 += (t >>> 16);
            t = (h7 & (63 << 26)) | (h6 & (31 << 21));
            h5 += (t >>> 21);
            break;
        case 28 /* HAVAL_224_BIT */:
            h0 += ((h7 >>> 27) & 31);
            h1 += ((h7 >>> 22) & 31);
            h2 += ((h7 >>> 18) & 15);
            h3 += ((h7 >>> 13) & 31);
            h4 += ((h7 >>> 9) & 15);
            h5 += ((h7 >>> 4) & 31);
            h6 += (h7 & 15);
    }
};

function FF1(x7, x6, x5, x4, x3, x2, x1, x0, w) {
    var t;
    switch ((rounds)) {
        case 3:
            t = f1(x1, x0, x3, x5, x6, x2, x4);
            break;
        case 4:
            t = f1(x2, x6, x1, x4, x5, x3, x0);
            break;
        default:
            t = f1(x3, x4, x1, x0, x5, x2, x6);
    }
    return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w;
};

function FF2(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
    var t;
    switch ((rounds)) {
        case 3:
            t = f2(x4, x2, x1, x0, x5, x3, x6);
            break;
        case 4:
            t = f2(x3, x5, x2, x0, x1, x6, x4);
            break;
        default:
            t = f2(x6, x2, x1, x0, x3, x4, x5);
    }
    return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
};

function FF3(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
    var t;
    switch ((rounds)) {
        case 3:
            t = f3(x6, x1, x2, x3, x4, x5, x0);
            break;
        case 4:
            t = f3(x1, x4, x3, x6, x0, x2, x5);
            break;
        default:
            t = f3(x2, x6, x0, x4, x3, x1, x5);
    }
    return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
};

function FF4(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
    var t;
    switch ((rounds)) {
        case 4:
            t = f4(x6, x4, x0, x5, x2, x1, x3);
            break;
        default:
            t = f4(x1, x5, x3, x2, x0, x4, x6);
    }
    return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
};

function FF5(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
    var t = f5(x2, x5, x0, x6, x4, x3, x1);
    return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
};

function f1(x6, x5, x4, x3, x2, x1, x0) {
    return x1 & (x0 ^ x4) ^ x2 & x5 ^ x3 & x6 ^ x0;
};

function f2(x6, x5, x4, x3, x2, x1, x0) {
    return x2 & (x1 & ~x3 ^ x4 & x5 ^ x6 ^ x0) ^ x4 & (x1 ^ x5) ^ x3 & x5 ^ x0;
};

function f3(x6, x5, x4, x3, x2, x1, x0) {
    return x3 & (x1 & x2 ^ x6 ^ x0) ^ x1 & x4 ^ x2 & x5 ^ x0;
};

function f4(x6, x5, x4, x3, x2, x1, x0) {
    return x4 & (x5 & ~x2 ^ x3 & ~x6 ^ x1 ^ x6 ^ x0) ^ x3 & (x1 & x2 ^ x5 ^ x6) ^ x2 & x6 ^ x0;
};

function f5(x6, x5, x4, x3, x2, x1, x0) {
    return x0 & (x1 & x2 & x3 ^ ~x5) ^ x1 & x4 ^ x2 & x5 ^ x3 & x6;
};


// function arrayCopy1(srcPts, srcOff, dstPts, dstOff, size) {
//     if (srcPts !== dstPts || dstOff >= srcOff + size) {
//         while (--size >= 0)
//             dstPts[dstOff++] = srcPts[srcOff++];
//     }
//     else {
//         var tmp = srcPts.slice(srcOff, srcOff + size);
//         for (var i_1 = 0; i_1 < size; i_1++)
//             dstPts[dstOff++] = tmp[i_1];
//     }
// }

// function arrayCopy2(srcPts, srcOff, dstPts, dstOff, size) {
//     if (srcPts !== dstPts || dstOff >= srcOff + size) {
//         while (--size >= 0) {
//             dstPts[dstOff++] = srcPts[srcOff++];
//         }
//     }
//     else {
//         var tmp = srcPts.slice(srcOff, srcOff + size);
//         for (var i_2 = 0; i_2 < size; i_2++)
//             dstPts[dstOff++] = tmp[i_2];
//     }
// };

function update$byte_A(b) {
    //util.logArray(b);
    update$byte_A$int$int(b, 0, b.length);
};

function update$byte_A$int$int(b, offset, len) {
    var n = ((count % blockSize) | 0);
    count += len;
    var partLen = blockSize - n;
    var i = 0;
    if (len >= partLen) {
        // /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
        //     if (srcPts !== dstPts || dstOff >= srcOff + size) {
        //         while (--size >= 0)
        //             dstPts[dstOff++] = srcPts[srcOff++];
        //     }
        //     else {
        //         var tmp = srcPts.slice(srcOff, srcOff + size);
        //         for (var i_1 = 0; i_1 < size; i_1++)
        //             dstPts[dstOff++] = tmp[i_1];
        //     }
        // })(b, offset, buffer, n, partLen);
        util.arrayCopy(b, offset, buffer, n, partLen);
        transform(buffer, 0);
        for (i = partLen; i + blockSize - 1 < len; i += blockSize) {
            {
                transform(b, offset + i);
            }
            ;
        }
        n = 0;
    }
    if (i < len) {
        //console.log(buffer);
        // /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
        //     if (srcPts !== dstPts || dstOff >= srcOff + size) {
        //         while (--size >= 0) {
        //             //console.log("size=" + size + " content=" + srcPts[srcOff++]);
        //             dstPts[dstOff++] = srcPts[srcOff++];
        //         }
        //     }
        //     else {
        //         var tmp = srcPts.slice(srcOff, srcOff + size);
        //         for (var i_2 = 0; i_2 < size; i_2++)
        //             dstPts[dstOff++] = tmp[i_2];
        //     }
        // })(b, offset + i, buffer, n, len - i);
        util.arrayCopy(b, offset + i, buffer, n, len - i);
    }

    // var msg="";
    // for(var i=0; i< buffer.length; i++){
    //     msg += ', '+buffer[i];
    // }
    // console.log(msg);
};

// function ab2str(buf) {
//     return String.fromCharCode.apply(null, new Uint16Array(buf));
// };
// function str2ab(str) {
//     var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
//     var bufView = new Uint16Array(buf);
//     for (var i = 0, strLen = str.length; i < strLen; i++) {
//         bufView[i] = str.charCodeAt(i);
//     }
//     return buf;
// };


// function update(b, offset, len) {
//     if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
//         return update$byte_A$int$int(b, offset, len);
//     }
//     else if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && offset === undefined && len === undefined) {
//         return update$byte_A(b);
//     }
//     else
//         throw new Error('invalid overload');
// };

function digest() {
    //util.logArray(buffer);
    var tail = padBuffer();
    //util.logArray(tail);
    update$byte_A$int$int(tail, 0, tail.length);
    var result = getResult();
    reset();
    return result;
};

function reset() {
    count = 0;
    for (var i = 0; i < blockSize;) {
        {
            buffer[i++] = 0;
        }
        ;
    }
    resetContext();
};

// function main() {
//     var args = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         args[_i] = arguments[_i];
//     }
//     try {
//         //console.info(EncryptPwHaval.Encrypt("abscd"));
//         console.log(Encrypt("a"));
//         console.log("DE8FD5EE72A5E4265AF0A756F4E1A1F65C9B2B2F47CF17ECF0D1B88679A3E22F");
//         //console.log(EncryptPwHaval.Encrypt(""));
//         //console.log(EncryptPwHaval.Encrypt("aaa"));
//         //console.info("BE417BB4DD5CFB76C7126F4F8EEB1553A449039307B1A3CD451DBFDC0FBBE330");
//     }
//     catch (ex) {
//         console.error(ex.message, ex);
//     }
//     ;
// };



function Encrypt(src) {
    init();

    // console.log(src);
    //util.logArray(str2ab(src));
    // util.logArray(util.stringToArray(src));
    // util.logArray(util.toUTF8Array(src));

    //var h = new EncryptPwHaval(EncryptPwHaval.HAVAL_256_BIT, EncryptPwHaval.HAVAL_5_ROUND);
    if (src != null && src.length > 0) {
        update$byte_A(util.toUTF8Array(src));
        //update$byte_A(/* getBytes */(src).split('').map(function (s) { return s.charCodeAt(0); }));
        //update(/* getBytes */(src).split('').map(function (s) { return s.charCodeAt(0); }));
    }
    //return (h.digest().toString());
    //console.log('-----');
    var d = digest();
    //console.log(d);
    //return (h.digest().toString());
    return (util.toHexString(d));
    //return (h.digest());
    //return(src);
};

function stringToArrayOld(str) {
    let ret = [];
    for (let i = 0; i < str.length; i++) {
        ret.push(str.charCodeAt(i));
        if (ret[ret.length - 1] == 337) ret[ret.length - 1] = 245; //ő
        if (ret[ret.length - 1] == 369) ret[ret.length - 1] = 251; //ű
        if (ret[ret.length - 1] == 336) ret[ret.length - 1] = 213; //Ő
        if (ret[ret.length - 1] == 368) ret[ret.length - 1] = 219; //Ű
    }
    return ret;
}

function EncryptOld(src) {
    init();

    if (src != null && src.length > 0) {
        update$byte_A(stringToArrayOld(src));
    }
    var d = digest();
    return (util.toHexString(d));
};


class Haval {

    HAVAL_HASH = "haval";
    HAVAL_VERSION = 1;

    HAVAL_128_BIT = 16;
    HAVAL_160_BIT = 20;
    HAVAL_192_BIT = 24;
    HAVAL_224_BIT = 28;
    HAVAL_256_BIT = 32;

    HAVAL_3_ROUND = 3;
    HAVAL_4_ROUND = 4;
    HAVAL_5_ROUND = 5;

    BLOCK_SIZE = 128; // inner block size in bytes
    
    constructor(hashSize, rounds) {
        this.hashSize = this.HAVAL_256_BIT;
        if(typeof hashSize !== 'undefined'){
            this.hashSize = hashSize;
        }
        this.rounds = this.HAVAL_5_ROUND;
        if(typeof rounds !== 'undefined'){
            this.rounds = rounds;
        }

        this.name = this.HAVAL_HASH;
        this.blockSize = this.BLOCK_SIZE;
        this.count = 0;
        this.rounds = rounds;
        this.buffer = util.initArray(0, this.blockSize);
        this.h0 = 0;
        this.h1 = 0;
        this.h2 = 0;
        this.h3 = 0;
        this.h4 = 0;
        this.h5 = 0;
        this.h6 = 0;
        this.h7 = 0;
    };

    transform(__in, i) {
        var X0 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X1 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X2 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X3 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X4 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X5 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X6 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X7 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X8 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X9 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X10 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X11 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X12 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X13 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X14 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X15 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X16 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X17 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X18 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X19 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X20 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X21 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X22 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X23 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X24 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X25 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X26 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X27 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X28 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X29 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X30 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var X31 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
        var t0 = this.h0;
        var t1 = this.h1;
        var t2 = this.h2;
        var t3 = this.h3;
        var t4 = this.h4;
        var t5 = this.h5;
        var t6 = this.h6;
        var t7 = this.h7;
        t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X0);
        t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X1);
        t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X2);
        t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X3);
        t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X4);
        t2 =this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X5);
        t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X6);
        t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X7);
        t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X8);
        t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X9);
        t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X10);
        t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X11);
        t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X12);
        t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X13);
        t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X14);
        t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X15);
        t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X16);
        t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X17);
        t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X18);
        t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X19);
        t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X20);
        t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X21);
        t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X22);
        t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X23);
        t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X24);
        t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X25);
        t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X26);
        t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X27);
        t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X28);
        t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X29);
        t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X30);
        t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X31);
        t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X5, 1160258022);
        t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X14, 953160567);
        t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X26, -1101764913);
        t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X18, 887688300);
        t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X11, -1062458953);
        t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X28, -914599715);
        t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X7, 1065670069);
        t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X16, -1253635817);
        t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X0, -1843997223);
        t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X23, -1988494565);
        t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X20, -785314906);
        t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1730169428);
        t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X1, 805139163);
        t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X10, -803545161);
        t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X4, -1193168915);
        t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X8, 1780907670);
        t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X30, -1166241723);
        t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X3, -248741991);
        t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X21, 614570311);
        t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X9, -1282315017);
        t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X17, 134345442);
        t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X24, -2054226922);
        t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X29, 1667834072);
        t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X6, 1901547113);
        t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1537671517);
        t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X12, -191677058);
        t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X15, 227898511);
        t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X13, 1921955416);
        t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X2, 1904987480);
        t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X25, -2112533778);
        t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X31, 2069144605);
        t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X27, -1034266187);
        t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1674521287);
        t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X9, 720527379);
        t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X4, -976113629);
        t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X20, 677414384);
        t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X28, -901678824);
        t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X17, -1193592593);
        t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X8, -1904616272);
        t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X22, 1614419982);
        t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X29, 1822297739);
        t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X14, -1340175810);
        t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X25, -686458943);
        t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X12, -1120842969);
        t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X24, 2024746970);
        t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X30, 1432378464);
        t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X16, -430627341);
        t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X26, -1437226092);
        t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X31, 1464375394);
        t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X15, 1676153920);
        t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X7, 1439316330);
        t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X3, 715854006);
        t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X1, -1261675468);
        t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X0, 289532110);
        t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X18, -1588296017);
        t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X27, 2087905683);
        t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X13, -1276242927);
        t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1668267050);
        t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X21, 732546397);
        t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X10, 1947742710);
        t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X23, -832815594);
        t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X11, -1685613794);
        t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X5, -1344882125);
        t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X2, 1814351708);
        if (this.rounds >= 4) {
            t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X24, 2050118529);
            t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X4, 680887927);
            t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X0, 999245976);
            t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X14, 1800124847);
            t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X2, -994056165);
            t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X7, 1713906067);
            t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X28, 1641548236);
            t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X23, -81679983);
            t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X26, 1216130144);
            t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1575780402);
            t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X30, -276538019);
            t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X20, -377129551);
            t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X18, -601480446);
            t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X25, -345695352);
            t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X19, 596196993);
            t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X3, -745100091);
            t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X22, 258830323);
            t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X11, -2081144263);
            t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X31, 772490370);
            t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X21, -1534844924);
            t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X8, 1774776394);
            t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X27, -1642095778);
            t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X12, 566650946);
            t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X9, -152474470);
            t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X1, 1728879713);
            t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X29, -1412200208);
            t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X5, 1783734482);
            t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X15, -665571480);
            t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X17, -1777359064);
            t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X10, -1420741725);
            t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X16, 1861159788);
            t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X13, 326777828);
            if (this.rounds === 5) {
                t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X27, -1170476976);
                t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X3, 2130389656);
                t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X21, -1578015459);
                t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X26, 967770486);
                t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X17, 1724537150);
                t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X11, -2109534584);
                t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X20, -1930525159);
                t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X29, 1164943284);
                t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X19, 2105845187);
                t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X0, 998989502);
                t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X12, -529566248);
                t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X7, -2050940813);
                t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X13, 1075463327);
                t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X8, 1455516326);
                t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X31, 1322494562);
                t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X10, 910128902);
                t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X5, 469688178);
                t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X9, 1117454909);
                t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X14, 936433444);
                t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X30, -804646328);
                t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X18, -619713837);
                t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X6, 1240580251);
                t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X28, 122909385);
                t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X24, -2137449605);
                t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X2, 634681816);
                t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X23, -152510729);
                t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X16, -469872614);
                t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1233564613);
                t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X4, -1754472259);
                t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X1, 79693498);
                t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X25, -1045868618);
                t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X15, 1084186820);
            }
        }
        this.h7 += t7;
        this.h6 += t6;
        this.h5 += t5;
        this.h4 += t4;
        this.h3 += t3;
        this.h2 += t2;
        this.h1 += t1;
        this.h0 += t0;
    };

    padBuffer() {
        var n = ((this.count % this.BLOCK_SIZE) | 0);
        var padding = (n < 118) ? (118 - n) : (246 - n);
        var result = (function (s) {
            var a = []; while (s-- > 0)
                a.push(0); return a;
        })(padding + 10);
        result[0] = 255 & (1 | 0);
        var bl = this.hashSize * 8;
        result[padding++] = 255 & ((((bl & 3) << 6) | ((this.rounds & 7) << 3) | (this.HAVAL_VERSION & 7)) | 0);
        result[padding++] = 255 & ((bl >>> 2) | 0);
        var bits = this.count << 3;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        bits = bits >>> 8;
        result[padding++] = 255 & (bits | 0);
        return result;
    };

    getResult() {
        this.tailorDigestBits();
        var result = (function (s) {
            var a = []; while (s-- > 0)
                a.push(0); return a;
        })(this.hashSize);
        if (this.hashSize >= this.HAVAL_256_BIT) {
            result[31] = 255 & ((this.h7 >>> 24) | 0);
            result[30] = 255 & ((this.h7 >>> 16) | 0);
            result[29] = 255 & ((this.h7 >>> 8) | 0);
            result[28] = 255 & (this.h7 | 0);
        }
        if (this.hashSize >= this.HAVAL_224_BIT) {
            result[27] = 255 & ((this.h6 >>> 24) | 0);
            result[26] = 255 & ((this.h6 >>> 16) | 0);
            result[25] = 255 & ((this.h6 >>> 8) | 0);
            result[24] = 255 & (this.h6 | 0);
        }
        if (this.hashSize >= this.HAVAL_192_BIT) {
            result[23] = 255 & ((this.h5 >>> 24) | 0);
            result[22] = 255 & ((this.h5 >>> 16) | 0);
            result[21] = 255 & ((this.h5 >>> 8) | 0);
            result[20] = 255 & (this.h5 | 0);
        }
        if (this.ashSize >= this.HAVAL_160_BIT) {
            result[19] = 255 & ((this.h4 >>> 24) | 0);
            result[18] = 255 & ((this.h4 >>> 16) | 0);
            result[17] = 255 & ((this.h4 >>> 8) | 0);
            result[16] = 255 & (this.h4 | 0);
        }
        result[15] = 255 & ((this.h3 >>> 24) | 0);
        result[14] = 255 & ((this.h3 >>> 16) | 0);
        result[13] = 255 & ((this.h3 >>> 8) | 0);
        result[12] = 255 & (this.h3 | 0);
        result[11] = 255 & ((this.h2 >>> 24) | 0);
        result[10] = 255 & ((this.h2 >>> 16) | 0);
        result[9] = 255 & ((this.h2 >>> 8) | 0);
        result[8] = 255 & (this.h2 | 0);
        result[7] = 255 & ((this.h1 >>> 24) | 0);
        result[6] = 255 & ((this.h1 >>> 16) | 0);
        result[5] = 255 & ((this.h1 >>> 8) | 0);
        result[4] = 255 & (this.h1 | 0);
        result[3] = 255 & ((this.h0 >>> 24) | 0);
        result[2] = 255 & ((this.h0 >>> 16) | 0);
        result[1] = 255 & ((this.h0 >>> 8) | 0);
        result[0] = 255 & (this.h0 | 0);
        return result;
    };

    tailorDigestBits() {
        var t;
        switch ((this.hashSize)) {
            case 16 /* HAVAL_128_BIT */:
                t = (h7 & 255) | (h6 & -16777216) | (h5 & 16711680) | (h4 & 65280);
                h0 += t >>> 8 | t << 24;
                t = (h7 & 65280) | (h6 & 255) | (h5 & -16777216) | (h4 & 16711680);
                h1 += t >>> 16 | t << 16;
                t = (h7 & 16711680) | (h6 & 65280) | (h5 & 255) | (h4 & -16777216);
                h2 += t >>> 24 | t << 8;
                t = (h7 & -16777216) | (h6 & 16711680) | (h5 & 65280) | (h4 & 255);
                h3 += t;
                break;
            case 20 /* HAVAL_160_BIT */:
                t = (h7 & 63) | (h6 & (127 << 25)) | (h5 & (63 << 19));
                h0 += t >>> 19 | t << 13;
                t = (h7 & (63 << 6)) | (h6 & 63) | (h5 & (127 << 25));
                h1 += t >>> 25 | t << 7;
                t = (h7 & (127 << 12)) | (h6 & (63 << 6)) | (h5 & 63);
                h2 += t;
                t = (h7 & (63 << 19)) | (h6 & (127 << 12)) | (h5 & (63 << 6));
                h3 += (t >>> 6);
                t = (h7 & (127 << 25)) | (h6 & (63 << 19)) | (h5 & (127 << 12));
                h4 += (t >>> 12);
                break;
            case 24 /* HAVAL_192_BIT */:
                t = (h7 & 31) | (h6 & (63 << 26));
                h0 += t >>> 26 | t << 6;
                t = (h7 & (31 << 5)) | (h6 & 31);
                h1 += t;
                t = (h7 & (63 << 10)) | (h6 & (31 << 5));
                h2 += (t >>> 5);
                t = (h7 & (31 << 16)) | (h6 & (63 << 10));
                h3 += (t >>> 10);
                t = (h7 & (31 << 21)) | (h6 & (31 << 16));
                h4 += (t >>> 16);
                t = (h7 & (63 << 26)) | (h6 & (31 << 21));
                h5 += (t >>> 21);
                break;
            case 28 /* HAVAL_224_BIT */:
                h0 += ((h7 >>> 27) & 31);
                h1 += ((h7 >>> 22) & 31);
                h2 += ((h7 >>> 18) & 15);
                h3 += ((h7 >>> 13) & 31);
                h4 += ((h7 >>> 9) & 15);
                h5 += ((h7 >>> 4) & 31);
                h6 += (h7 & 15);
        }
    };

    FF1(x7, x6, x5, x4, x3, x2, x1, x0, w) {
        var t;
        switch ((this.rounds)) {
            case 3:
                t = this.f1(x1, x0, x3, x5, x6, x2, x4);
                break;
            case 4:
                t = this.f1(x2, x6, x1, x4, x5, x3, x0);
                break;
            default:
                t = this.f1(x3, x4, x1, x0, x5, x2, x6);
        }
        return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w;
    };

    FF2(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
        var t;
        switch ((this.rounds)) {
            case 3:
                t = this.f2(x4, x2, x1, x0, x5, x3, x6);
                break;
            case 4:
                t = this.f2(x3, x5, x2, x0, x1, x6, x4);
                break;
            default:
                t = this.f2(x6, x2, x1, x0, x3, x4, x5);
        }
        return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
    };

    FF3(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
        var t;
        switch ((this.rounds)) {
            case 3:
                t = this.f3(x6, x1, x2, x3, x4, x5, x0);
                break;
            case 4:
                t = this.f3(x1, x4, x3, x6, x0, x2, x5);
                break;
            default:
                t = this.f3(x2, x6, x0, x4, x3, x1, x5);
        }
        return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
    };

    FF4(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
        var t;
        switch ((this.rounds)) {
            case 4:
                t = this.f4(x6, x4, x0, x5, x2, x1, x3);
                break;
            default:
                t = this.f4(x1, x5, x3, x2, x0, x4, x6);
        }
        return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
    };

    FF5(x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
        var t = this.f5(x2, x5, x0, x6, x4, x3, x1);
        return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
    };

    f1(x6, x5, x4, x3, x2, x1, x0) {
        return x1 & (x0 ^ x4) ^ x2 & x5 ^ x3 & x6 ^ x0;
    };

    f2(x6, x5, x4, x3, x2, x1, x0) {
        return x2 & (x1 & ~x3 ^ x4 & x5 ^ x6 ^ x0) ^ x4 & (x1 ^ x5) ^ x3 & x5 ^ x0;
    };

    f3(x6, x5, x4, x3, x2, x1, x0) {
        return x3 & (x1 & x2 ^ x6 ^ x0) ^ x1 & x4 ^ x2 & x5 ^ x0;
    };

    f4(x6, x5, x4, x3, x2, x1, x0) {
        return x4 & (x5 & ~x2 ^ x3 & ~x6 ^ x1 ^ x6 ^ x0) ^ x3 & (x1 & x2 ^ x5 ^ x6) ^ x2 & x6 ^ x0;
    };

    f5(x6, x5, x4, x3, x2, x1, x0) {
        return x0 & (x1 & x2 & x3 ^ ~x5) ^ x1 & x4 ^ x2 & x5 ^ x3 & x6;
    };

    update$byte_A(b) {
        //util.logArray(b);
        this.update$byte_A$int$int(b, 0, b.length);
    };

    update$byte_A$int$int(b, offset, len) {
        var n = ((this.count % this.blockSize) | 0);
        this.count += len;
        var partLen = this.blockSize - n;
        var i = 0;
        if (len >= partLen) {
            // /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
            //     if (srcPts !== dstPts || dstOff >= srcOff + size) {
            //         while (--size >= 0)
            //             dstPts[dstOff++] = srcPts[srcOff++];
            //     }
            //     else {
            //         var tmp = srcPts.slice(srcOff, srcOff + size);
            //         for (var i_1 = 0; i_1 < size; i_1++)
            //             dstPts[dstOff++] = tmp[i_1];
            //     }
            // })(b, offset, buffer, n, partLen);
            util.arrayCopy(b, offset, this.buffer, n, partLen);
            this.transform(this.buffer, 0);
            for (i = partLen; i + this.blockSize - 1 < len; i += this.blockSize) {
                {
                    transform(b, offset + i);
                }
                ;
            }
            n = 0;
        }
        if (i < len) {
            //console.log(buffer);
            // /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
            //     if (srcPts !== dstPts || dstOff >= srcOff + size) {
            //         while (--size >= 0) {
            //             //console.log("size=" + size + " content=" + srcPts[srcOff++]);
            //             dstPts[dstOff++] = srcPts[srcOff++];
            //         }
            //     }
            //     else {
            //         var tmp = srcPts.slice(srcOff, srcOff + size);
            //         for (var i_2 = 0; i_2 < size; i_2++)
            //             dstPts[dstOff++] = tmp[i_2];
            //     }
            // })(b, offset + i, buffer, n, len - i);
            util.arrayCopy(b, offset + i, this.buffer, n, len - i);
        }

        // var msg="";
        // for(var i=0; i< buffer.length; i++){
        //     msg += ', '+buffer[i];
        // }
        // console.log(msg);
    };

    digest() {
        //util.logArray(buffer);
        var tail = this.padBuffer();
        //util.logArray(tail);
        this.update$byte_A$int$int(tail, 0, tail.length);
        var result = this.getResult();
        this.reset();
        return result;
    };

    reset() {
        this.count = 0;
        for (var i = 0; i < this.blockSize;) {
            {
                this.buffer[i++] = 0;
            }
            ;
        }
        this.resetContext();
    };

    resetContext() {
        this.h0 = 608135816;
        this.h1 = -2052912941;
        this.h2 = 320440878;
        this.h3 = 57701188;
        this.h4 = -1542899678;
        this.h5 = 698298832;
        this.h6 = 137296536;
        this.h7 = -330404727;
    };

    init() {
        this.name = this.HAVAL_HASH;
        this.hashSize = this.HAVAL_256_BIT;
        this.blockSize = this.BLOCK_SIZE;
        this.count = 0;
        this.rounds = this.HAVAL_5_ROUND;
        buffer = util.initArray(0, this.blockSize);
        this.h0 = 0;
        this. h1 = 0;
        this.h2 = 0;
        this.h3 = 0;
        this.h4 = 0;
        this.h5 = 0;
        this.h6 = 0;
        this.h7 = 0;
        this.resetContext();
    }
        Encrypt(src) {
        //this.reset();
        this.init();

        // console.log(src);
        //util.logArray(str2ab(src));
        // util.logArray(util.stringToArray(src));
        // util.logArray(util.toUTF8Array(src));

        //var h = new EncryptPwHaval(EncryptPwHaval.HAVAL_256_BIT, EncryptPwHaval.HAVAL_5_ROUND);
        if (src != null && src.length > 0) {
            this.update$byte_A(util.toUTF8Array(src));
            //update$byte_A(/* getBytes */(src).split('').map(function (s) { return s.charCodeAt(0); }));
            //update(/* getBytes */(src).split('').map(function (s) { return s.charCodeAt(0); }));
        }
        //return (h.digest().toString());
        //console.log('-----');
        var d = this.digest();
        //console.log(d);
        //return (h.digest().toString());
        return (util.toHexString(d));
        //return (h.digest());
        //return(src);
    };

    stringToArrayOld(str) {
        let ret = [];
        for (let i = 0; i < str.length; i++) {
            ret.push(str.charCodeAt(i));
            if (ret[ret.length - 1] == 337) ret[ret.length - 1] = 245; //ő
            if (ret[ret.length - 1] == 369) ret[ret.length - 1] = 251; //ű
            if (ret[ret.length - 1] == 336) ret[ret.length - 1] = 213; //Ő
            if (ret[ret.length - 1] == 368) ret[ret.length - 1] = 219; //Ű
        }
        return ret;
    }

    EncryptOld(src) {
        //this.reset();
        this.init();

        if (src != null && src.length > 0) {
            this.update$byte_A(this.stringToArrayOld(src));
        }
        var d = this.digest();
        return (util.toHexString(d));
    };

    toString() {
        //return (`Haval(row=${this.row} col=${this.col})`);
        return (`Haval`);
    }

}








//--------------------





// /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
// var EncryptPwHaval = (function () {



//     function EncryptPwHaval(name, hashSize, blockSize) {
//         var _this = this;
//         /**
//          * Number of HAVAL rounds. Allowed values are integers in the range <code>3
//          * .. 5</code>. The default is <code>3</code>.
//          */
//         /*private*/ this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//         if (((typeof name === 'string') || name === null) && ((typeof hashSize === 'number') || hashSize === null) && ((typeof blockSize === 'number') || blockSize === null)) {
//             var __args = arguments;
//             if (this.h0 === undefined)
//                 this.h0 = 0;
//             if (this.h1 === undefined)
//                 this.h1 = 0;
//             if (this.h2 === undefined)
//                 this.h2 = 0;
//             if (this.h3 === undefined)
//                 this.h3 = 0;
//             if (this.h4 === undefined)
//                 this.h4 = 0;
//             if (this.h5 === undefined)
//                 this.h5 = 0;
//             if (this.h6 === undefined)
//                 this.h6 = 0;
//             if (this.h7 === undefined)
//                 this.h7 = 0;
//             if (this.name === undefined)
//                 this.name = null;
//             if (this.hashSize === undefined)
//                 this.hashSize = 0;
//             if (this.blockSize === undefined)
//                 this.blockSize = 0;
//             if (this.count === undefined)
//                 this.count = 0;
//             if (this.buffer === undefined)
//                 this.buffer = null;
//             this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//             if (this.h0 === undefined)
//                 this.h0 = 0;
//             if (this.h1 === undefined)
//                 this.h1 = 0;
//             if (this.h2 === undefined)
//                 this.h2 = 0;
//             if (this.h3 === undefined)
//                 this.h3 = 0;
//             if (this.h4 === undefined)
//                 this.h4 = 0;
//             if (this.h5 === undefined)
//                 this.h5 = 0;
//             if (this.h6 === undefined)
//                 this.h6 = 0;
//             if (this.h7 === undefined)
//                 this.h7 = 0;
//             if (this.name === undefined)
//                 this.name = null;
//             if (this.hashSize === undefined)
//                 this.hashSize = 0;
//             if (this.blockSize === undefined)
//                 this.blockSize = 0;
//             if (this.count === undefined)
//                 this.count = 0;
//             if (this.buffer === undefined)
//                 this.buffer = null;
//             (function () {
//                 _this.name = name;
//                 _this.hashSize = hashSize;
//                 _this.blockSize = blockSize;
//                 _this.buffer = (function (s) {
//                     var a = []; while (s-- > 0)
//                         a.push(0); return a;
//                 })(blockSize);
//                 _this.resetContext();
//             })();
//         }
//         else if (((typeof name === 'number') || name === null) && ((typeof hashSize === 'number') || hashSize === null) && blockSize === undefined) {
//             var __args = arguments;
//             var size_1 = __args[0];
//             var rounds_1 = __args[1];
//             {
//                 var __args_1 = arguments;
//                 var name_1 = EncryptPwHaval.HAVAL_HASH;
//                 var hashSize_1 = size_1;
//                 var blockSize_1 = EncryptPwHaval.BLOCK_SIZE;
//                 if (this.h0 === undefined)
//                     this.h0 = 0;
//                 if (this.h1 === undefined)
//                     this.h1 = 0;
//                 if (this.h2 === undefined)
//                     this.h2 = 0;
//                 if (this.h3 === undefined)
//                     this.h3 = 0;
//                 if (this.h4 === undefined)
//                     this.h4 = 0;
//                 if (this.h5 === undefined)
//                     this.h5 = 0;
//                 if (this.h6 === undefined)
//                     this.h6 = 0;
//                 if (this.h7 === undefined)
//                     this.h7 = 0;
//                 if (this.name === undefined)
//                     this.name = null;
//                 if (this.hashSize === undefined)
//                     this.hashSize = 0;
//                 if (this.blockSize === undefined)
//                     this.blockSize = 0;
//                 if (this.count === undefined)
//                     this.count = 0;
//                 if (this.buffer === undefined)
//                     this.buffer = null;
//                 this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//                 if (this.h0 === undefined)
//                     this.h0 = 0;
//                 if (this.h1 === undefined)
//                     this.h1 = 0;
//                 if (this.h2 === undefined)
//                     this.h2 = 0;
//                 if (this.h3 === undefined)
//                     this.h3 = 0;
//                 if (this.h4 === undefined)
//                     this.h4 = 0;
//                 if (this.h5 === undefined)
//                     this.h5 = 0;
//                 if (this.h6 === undefined)
//                     this.h6 = 0;
//                 if (this.h7 === undefined)
//                     this.h7 = 0;
//                 if (this.name === undefined)
//                     this.name = null;
//                 if (this.hashSize === undefined)
//                     this.hashSize = 0;
//                 if (this.blockSize === undefined)
//                     this.blockSize = 0;
//                 if (this.count === undefined)
//                     this.count = 0;
//                 if (this.buffer === undefined)
//                     this.buffer = null;
//                 (function () {
//                     _this.name = name_1;
//                     _this.hashSize = hashSize_1;
//                     _this.blockSize = blockSize_1;
//                     _this.buffer = (function (s) {
//                         var a = []; while (s-- > 0)
//                             a.push(0); return a;
//                     })(blockSize_1);
//                     _this.resetContext();
//                 })();
//             }
//             (function () {
//                 if (size_1 !== EncryptPwHaval.HAVAL_128_BIT && size_1 !== EncryptPwHaval.HAVAL_160_BIT && size_1 !== EncryptPwHaval.HAVAL_192_BIT && size_1 !== EncryptPwHaval.HAVAL_224_BIT && size_1 !== EncryptPwHaval.HAVAL_256_BIT) {
//                     throw Object.defineProperty(new Error("Invalid HAVAL output size"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                 }
//                 if (rounds_1 !== EncryptPwHaval.HAVAL_3_ROUND && rounds_1 !== EncryptPwHaval.HAVAL_4_ROUND && rounds_1 !== EncryptPwHaval.HAVAL_5_ROUND) {
//                     throw Object.defineProperty(new Error("Invalid HAVAL number of rounds"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                 }
//                 _this.rounds = rounds_1;
//             })();
//         }
//         else if (((name != null && name instanceof EncryptPwHaval) || name === null) && hashSize === undefined && blockSize === undefined) {
//             var __args = arguments;
//             var md_1 = __args[0];
//             {
//                 var __args_2 = arguments;
//                 var size_2 = md_1.hashSize;
//                 var rounds_2 = md_1.rounds;
//                 {
//                     var __args_3 = arguments;
//                     var name_2 = EncryptPwHaval.HAVAL_HASH;
//                     var hashSize_2 = size_2;
//                     var blockSize_2 = EncryptPwHaval.BLOCK_SIZE;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     (function () {
//                         _this.name = name_2;
//                         _this.hashSize = hashSize_2;
//                         _this.blockSize = blockSize_2;
//                         _this.buffer = (function (s) {
//                             var a = []; while (s-- > 0)
//                                 a.push(0); return a;
//                         })(blockSize_2);
//                         _this.resetContext();
//                     })();
//                 }
//                 (function () {
//                     if (size_2 !== EncryptPwHaval.HAVAL_128_BIT && size_2 !== EncryptPwHaval.HAVAL_160_BIT && size_2 !== EncryptPwHaval.HAVAL_192_BIT && size_2 !== EncryptPwHaval.HAVAL_224_BIT && size_2 !== EncryptPwHaval.HAVAL_256_BIT) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL output size"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     if (rounds_2 !== EncryptPwHaval.HAVAL_3_ROUND && rounds_2 !== EncryptPwHaval.HAVAL_4_ROUND && rounds_2 !== EncryptPwHaval.HAVAL_5_ROUND) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL number of rounds"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     _this.rounds = rounds_2;
//                 })();
//             }
//             (function () {
//                 _this.h0 = md_1.h0;
//                 _this.h1 = md_1.h1;
//                 _this.h2 = md_1.h2;
//                 _this.h3 = md_1.h3;
//                 _this.h4 = md_1.h4;
//                 _this.h5 = md_1.h5;
//                 _this.h6 = md_1.h6;
//                 _this.h7 = md_1.h7;
//                 _this.count = md_1.count;
//                 _this.buffer = md_1.buffer.slice(0);
//             })();
//         }
//         else if (((typeof name === 'number') || name === null) && hashSize === undefined && blockSize === undefined) {
//             var __args = arguments;
//             var size_3 = __args[0];
//             {
//                 var __args_4 = arguments;
//                 var rounds_3 = EncryptPwHaval.HAVAL_3_ROUND;
//                 {
//                     var __args_5 = arguments;
//                     var name_3 = EncryptPwHaval.HAVAL_HASH;
//                     var hashSize_3 = size_3;
//                     var blockSize_3 = EncryptPwHaval.BLOCK_SIZE;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     (function () {
//                         _this.name = name_3;
//                         _this.hashSize = hashSize_3;
//                         _this.blockSize = blockSize_3;
//                         _this.buffer = (function (s) {
//                             var a = []; while (s-- > 0)
//                                 a.push(0); return a;
//                         })(blockSize_3);
//                         _this.resetContext();
//                     })();
//                 }
//                 (function () {
//                     if (size_3 !== EncryptPwHaval.HAVAL_128_BIT && size_3 !== EncryptPwHaval.HAVAL_160_BIT && size_3 !== EncryptPwHaval.HAVAL_192_BIT && size_3 !== EncryptPwHaval.HAVAL_224_BIT && size_3 !== EncryptPwHaval.HAVAL_256_BIT) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL output size"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     if (rounds_3 !== EncryptPwHaval.HAVAL_3_ROUND && rounds_3 !== EncryptPwHaval.HAVAL_4_ROUND && rounds_3 !== EncryptPwHaval.HAVAL_5_ROUND) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL number of rounds"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     _this.rounds = rounds_3;
//                 })();
//             }
//         }
//         else if (name === undefined && hashSize === undefined && blockSize === undefined) {
//             var __args = arguments;
//             {
//                 var __args_6 = arguments;
//                 var size_4 = EncryptPwHaval.HAVAL_128_BIT;
//                 var rounds_4 = EncryptPwHaval.HAVAL_3_ROUND;
//                 {
//                     var __args_7 = arguments;
//                     var name_4 = EncryptPwHaval.HAVAL_HASH;
//                     var hashSize_4 = size_4;
//                     var blockSize_4 = EncryptPwHaval.BLOCK_SIZE;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     this.rounds = EncryptPwHaval.HAVAL_3_ROUND;
//                     if (this.h0 === undefined)
//                         this.h0 = 0;
//                     if (this.h1 === undefined)
//                         this.h1 = 0;
//                     if (this.h2 === undefined)
//                         this.h2 = 0;
//                     if (this.h3 === undefined)
//                         this.h3 = 0;
//                     if (this.h4 === undefined)
//                         this.h4 = 0;
//                     if (this.h5 === undefined)
//                         this.h5 = 0;
//                     if (this.h6 === undefined)
//                         this.h6 = 0;
//                     if (this.h7 === undefined)
//                         this.h7 = 0;
//                     if (this.name === undefined)
//                         this.name = null;
//                     if (this.hashSize === undefined)
//                         this.hashSize = 0;
//                     if (this.blockSize === undefined)
//                         this.blockSize = 0;
//                     if (this.count === undefined)
//                         this.count = 0;
//                     if (this.buffer === undefined)
//                         this.buffer = null;
//                     (function () {
//                         _this.name = name_4;
//                         _this.hashSize = hashSize_4;
//                         _this.blockSize = blockSize_4;
//                         _this.buffer = (function (s) {
//                             var a = []; while (s-- > 0)
//                                 a.push(0); return a;
//                         })(blockSize_4);
//                         _this.resetContext();
//                     })();
//                 }
//                 (function () {
//                     if (size_4 !== EncryptPwHaval.HAVAL_128_BIT && size_4 !== EncryptPwHaval.HAVAL_160_BIT && size_4 !== EncryptPwHaval.HAVAL_192_BIT && size_4 !== EncryptPwHaval.HAVAL_224_BIT && size_4 !== EncryptPwHaval.HAVAL_256_BIT) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL output size"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     if (rounds_4 !== EncryptPwHaval.HAVAL_3_ROUND && rounds_4 !== EncryptPwHaval.HAVAL_4_ROUND && rounds_4 !== EncryptPwHaval.HAVAL_5_ROUND) {
//                         throw Object.defineProperty(new Error("Invalid HAVAL number of rounds"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
//                     }
//                     _this.rounds = rounds_4;
//                 })();
//             }
//         }
//         else
//             throw new Error('invalid overload');
//     }



//     EncryptPwHaval.prototype.transform = function (__in, i) {
//         var X0 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X1 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X2 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X3 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X4 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X5 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X6 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X7 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X8 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X9 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X10 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X11 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X12 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X13 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X14 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X15 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X16 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X17 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X18 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X19 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X20 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X21 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X22 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X23 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X24 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X25 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X26 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X27 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X28 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X29 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X30 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var X31 = (__in[i++] & 255) | (__in[i++] & 255) << 8 | (__in[i++] & 255) << 16 | (__in[i++] & 255) << 24;
//         var t0 = this.h0;
//         var t1 = this.h1;
//         var t2 = this.h2;
//         var t3 = this.h3;
//         var t4 = this.h4;
//         var t5 = this.h5;
//         var t6 = this.h6;
//         var t7 = this.h7;
//         t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X0);
//         t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X1);
//         t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X2);
//         t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X3);
//         t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X4);
//         t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X5);
//         t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X6);
//         t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X7);
//         t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X8);
//         t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X9);
//         t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X10);
//         t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X11);
//         t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X12);
//         t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X13);
//         t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X14);
//         t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X15);
//         t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X16);
//         t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X17);
//         t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X18);
//         t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X19);
//         t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X20);
//         t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X21);
//         t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X22);
//         t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X23);
//         t7 = this.FF1(t7, t6, t5, t4, t3, t2, t1, t0, X24);
//         t6 = this.FF1(t6, t5, t4, t3, t2, t1, t0, t7, X25);
//         t5 = this.FF1(t5, t4, t3, t2, t1, t0, t7, t6, X26);
//         t4 = this.FF1(t4, t3, t2, t1, t0, t7, t6, t5, X27);
//         t3 = this.FF1(t3, t2, t1, t0, t7, t6, t5, t4, X28);
//         t2 = this.FF1(t2, t1, t0, t7, t6, t5, t4, t3, X29);
//         t1 = this.FF1(t1, t0, t7, t6, t5, t4, t3, t2, X30);
//         t0 = this.FF1(t0, t7, t6, t5, t4, t3, t2, t1, X31);
//         t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X5, 1160258022);
//         t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X14, 953160567);
//         t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X26, -1101764913);
//         t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X18, 887688300);
//         t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X11, -1062458953);
//         t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X28, -914599715);
//         t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X7, 1065670069);
//         t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X16, -1253635817);
//         t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X0, -1843997223);
//         t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X23, -1988494565);
//         t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X20, -785314906);
//         t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1730169428);
//         t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X1, 805139163);
//         t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X10, -803545161);
//         t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X4, -1193168915);
//         t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X8, 1780907670);
//         t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X30, -1166241723);
//         t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X3, -248741991);
//         t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X21, 614570311);
//         t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X9, -1282315017);
//         t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X17, 134345442);
//         t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X24, -2054226922);
//         t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X29, 1667834072);
//         t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X6, 1901547113);
//         t7 = this.FF2(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1537671517);
//         t6 = this.FF2(t6, t5, t4, t3, t2, t1, t0, t7, X12, -191677058);
//         t5 = this.FF2(t5, t4, t3, t2, t1, t0, t7, t6, X15, 227898511);
//         t4 = this.FF2(t4, t3, t2, t1, t0, t7, t6, t5, X13, 1921955416);
//         t3 = this.FF2(t3, t2, t1, t0, t7, t6, t5, t4, X2, 1904987480);
//         t2 = this.FF2(t2, t1, t0, t7, t6, t5, t4, t3, X25, -2112533778);
//         t1 = this.FF2(t1, t0, t7, t6, t5, t4, t3, t2, X31, 2069144605);
//         t0 = this.FF2(t0, t7, t6, t5, t4, t3, t2, t1, X27, -1034266187);
//         t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X19, -1674521287);
//         t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X9, 720527379);
//         t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X4, -976113629);
//         t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X20, 677414384);
//         t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X28, -901678824);
//         t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X17, -1193592593);
//         t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X8, -1904616272);
//         t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X22, 1614419982);
//         t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X29, 1822297739);
//         t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X14, -1340175810);
//         t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X25, -686458943);
//         t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X12, -1120842969);
//         t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X24, 2024746970);
//         t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X30, 1432378464);
//         t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X16, -430627341);
//         t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X26, -1437226092);
//         t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X31, 1464375394);
//         t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X15, 1676153920);
//         t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X7, 1439316330);
//         t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X3, 715854006);
//         t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X1, -1261675468);
//         t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X0, 289532110);
//         t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X18, -1588296017);
//         t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X27, 2087905683);
//         t7 = this.FF3(t7, t6, t5, t4, t3, t2, t1, t0, X13, -1276242927);
//         t6 = this.FF3(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1668267050);
//         t5 = this.FF3(t5, t4, t3, t2, t1, t0, t7, t6, X21, 732546397);
//         t4 = this.FF3(t4, t3, t2, t1, t0, t7, t6, t5, X10, 1947742710);
//         t3 = this.FF3(t3, t2, t1, t0, t7, t6, t5, t4, X23, -832815594);
//         t2 = this.FF3(t2, t1, t0, t7, t6, t5, t4, t3, X11, -1685613794);
//         t1 = this.FF3(t1, t0, t7, t6, t5, t4, t3, t2, X5, -1344882125);
//         t0 = this.FF3(t0, t7, t6, t5, t4, t3, t2, t1, X2, 1814351708);
//         if (this.rounds >= 4) {
//             t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X24, 2050118529);
//             t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X4, 680887927);
//             t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X0, 999245976);
//             t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X14, 1800124847);
//             t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X2, -994056165);
//             t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X7, 1713906067);
//             t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X28, 1641548236);
//             t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X23, -81679983);
//             t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X26, 1216130144);
//             t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X6, 1575780402);
//             t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X30, -276538019);
//             t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X20, -377129551);
//             t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X18, -601480446);
//             t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X25, -345695352);
//             t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X19, 596196993);
//             t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X3, -745100091);
//             t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X22, 258830323);
//             t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X11, -2081144263);
//             t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X31, 772490370);
//             t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X21, -1534844924);
//             t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X8, 1774776394);
//             t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X27, -1642095778);
//             t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X12, 566650946);
//             t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X9, -152474470);
//             t7 = this.FF4(t7, t6, t5, t4, t3, t2, t1, t0, X1, 1728879713);
//             t6 = this.FF4(t6, t5, t4, t3, t2, t1, t0, t7, X29, -1412200208);
//             t5 = this.FF4(t5, t4, t3, t2, t1, t0, t7, t6, X5, 1783734482);
//             t4 = this.FF4(t4, t3, t2, t1, t0, t7, t6, t5, X15, -665571480);
//             t3 = this.FF4(t3, t2, t1, t0, t7, t6, t5, t4, X17, -1777359064);
//             t2 = this.FF4(t2, t1, t0, t7, t6, t5, t4, t3, X10, -1420741725);
//             t1 = this.FF4(t1, t0, t7, t6, t5, t4, t3, t2, X16, 1861159788);
//             t0 = this.FF4(t0, t7, t6, t5, t4, t3, t2, t1, X13, 326777828);
//             if (this.rounds === 5) {
//                 t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X27, -1170476976);
//                 t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X3, 2130389656);
//                 t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X21, -1578015459);
//                 t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X26, 967770486);
//                 t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X17, 1724537150);
//                 t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X11, -2109534584);
//                 t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X20, -1930525159);
//                 t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X29, 1164943284);
//                 t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X19, 2105845187);
//                 t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X0, 998989502);
//                 t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X12, -529566248);
//                 t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X7, -2050940813);
//                 t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X13, 1075463327);
//                 t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X8, 1455516326);
//                 t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X31, 1322494562);
//                 t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X10, 910128902);
//                 t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X5, 469688178);
//                 t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X9, 1117454909);
//                 t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X14, 936433444);
//                 t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X30, -804646328);
//                 t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X18, -619713837);
//                 t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X6, 1240580251);
//                 t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X28, 122909385);
//                 t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X24, -2137449605);
//                 t7 = this.FF5(t7, t6, t5, t4, t3, t2, t1, t0, X2, 634681816);
//                 t6 = this.FF5(t6, t5, t4, t3, t2, t1, t0, t7, X23, -152510729);
//                 t5 = this.FF5(t5, t4, t3, t2, t1, t0, t7, t6, X16, -469872614);
//                 t4 = this.FF5(t4, t3, t2, t1, t0, t7, t6, t5, X22, -1233564613);
//                 t3 = this.FF5(t3, t2, t1, t0, t7, t6, t5, t4, X4, -1754472259);
//                 t2 = this.FF5(t2, t1, t0, t7, t6, t5, t4, t3, X1, 79693498);
//                 t1 = this.FF5(t1, t0, t7, t6, t5, t4, t3, t2, X25, -1045868618);
//                 t0 = this.FF5(t0, t7, t6, t5, t4, t3, t2, t1, X15, 1084186820);
//             }
//         }
//         this.h7 += t7;
//         this.h6 += t6;
//         this.h5 += t5;
//         this.h4 += t4;
//         this.h3 += t3;
//         this.h2 += t2;
//         this.h1 += t1;
//         this.h0 += t0;
//     };



//     EncryptPwHaval.prototype.padBuffer = function () {
//         var n = ((this.count % EncryptPwHaval.BLOCK_SIZE) | 0);
//         var padding = (n < 118) ? (118 - n) : (246 - n);
//         var result = (function (s) {
//             var a = []; while (s-- > 0)
//                 a.push(0); return a;
//         })(padding + 10);
//         result[0] = 255 & (1 | 0);
//         var bl = this.hashSize * 8;
//         result[padding++] = 255 & ((((bl & 3) << 6) | ((this.rounds & 7) << 3) | (EncryptPwHaval.HAVAL_VERSION & 7)) | 0);
//         result[padding++] = 255 & ((bl >>> 2) | 0);
//         var bits = this.count << 3;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         bits = bits >>> 8;
//         result[padding++] = 255 & (bits | 0);
//         return result;
//     };



//     EncryptPwHaval.prototype.getResult = function () {
//         this.tailorDigestBits();
//         var result = (function (s) {
//             var a = []; while (s-- > 0)
//                 a.push(0); return a;
//         })(this.hashSize);
//         if (this.hashSize >= EncryptPwHaval.HAVAL_256_BIT) {
//             result[31] = 255 & ((this.h7 >>> 24) | 0);
//             result[30] = 255 & ((this.h7 >>> 16) | 0);
//             result[29] = 255 & ((this.h7 >>> 8) | 0);
//             result[28] = 255 & (this.h7 | 0);
//         }
//         if (this.hashSize >= EncryptPwHaval.HAVAL_224_BIT) {
//             result[27] = 255 & ((this.h6 >>> 24) | 0);
//             result[26] = 255 & ((this.h6 >>> 16) | 0);
//             result[25] = 255 & ((this.h6 >>> 8) | 0);
//             result[24] = 255 & (this.h6 | 0);
//         }
//         if (this.hashSize >= EncryptPwHaval.HAVAL_192_BIT) {
//             result[23] = 255 & ((this.h5 >>> 24) | 0);
//             result[22] = 255 & ((this.h5 >>> 16) | 0);
//             result[21] = 255 & ((this.h5 >>> 8) | 0);
//             result[20] = 255 & (this.h5 | 0);
//         }
//         if (this.hashSize >= EncryptPwHaval.HAVAL_160_BIT) {
//             result[19] = 255 & ((this.h4 >>> 24) | 0);
//             result[18] = 255 & ((this.h4 >>> 16) | 0);
//             result[17] = 255 & ((this.h4 >>> 8) | 0);
//             result[16] = 255 & (this.h4 | 0);
//         }
//         result[15] = 255 & ((this.h3 >>> 24) | 0);
//         result[14] = 255 & ((this.h3 >>> 16) | 0);
//         result[13] = 255 & ((this.h3 >>> 8) | 0);
//         result[12] = 255 & (this.h3 | 0);
//         result[11] = 255 & ((this.h2 >>> 24) | 0);
//         result[10] = 255 & ((this.h2 >>> 16) | 0);
//         result[9] = 255 & ((this.h2 >>> 8) | 0);
//         result[8] = 255 & (this.h2 | 0);
//         result[7] = 255 & ((this.h1 >>> 24) | 0);
//         result[6] = 255 & ((this.h1 >>> 16) | 0);
//         result[5] = 255 & ((this.h1 >>> 8) | 0);
//         result[4] = 255 & (this.h1 | 0);
//         result[3] = 255 & ((this.h0 >>> 24) | 0);
//         result[2] = 255 & ((this.h0 >>> 16) | 0);
//         result[1] = 255 & ((this.h0 >>> 8) | 0);
//         result[0] = 255 & (this.h0 | 0);
//         return result;
//     };



//     EncryptPwHaval.prototype.resetContext = function () {
//         this.h0 = 608135816;
//         this.h1 = -2052912941;
//         this.h2 = 320440878;
//         this.h3 = 57701188;
//         this.h4 = -1542899678;
//         this.h5 = 698298832;
//         this.h6 = 137296536;
//         this.h7 = -330404727;
//     };




//     /**
//      * Tailors the last output.
//      * @private
//      */
//     /*private*/ EncryptPwHaval.prototype.tailorDigestBits = function () {
//         var t;
//         switch ((this.hashSize)) {
//             case 16 /* HAVAL_128_BIT */:
//                 t = (this.h7 & 255) | (this.h6 & -16777216) | (this.h5 & 16711680) | (this.h4 & 65280);
//                 this.h0 += t >>> 8 | t << 24;
//                 t = (this.h7 & 65280) | (this.h6 & 255) | (this.h5 & -16777216) | (this.h4 & 16711680);
//                 this.h1 += t >>> 16 | t << 16;
//                 t = (this.h7 & 16711680) | (this.h6 & 65280) | (this.h5 & 255) | (this.h4 & -16777216);
//                 this.h2 += t >>> 24 | t << 8;
//                 t = (this.h7 & -16777216) | (this.h6 & 16711680) | (this.h5 & 65280) | (this.h4 & 255);
//                 this.h3 += t;
//                 break;
//             case 20 /* HAVAL_160_BIT */:
//                 t = (this.h7 & 63) | (this.h6 & (127 << 25)) | (this.h5 & (63 << 19));
//                 this.h0 += t >>> 19 | t << 13;
//                 t = (this.h7 & (63 << 6)) | (this.h6 & 63) | (this.h5 & (127 << 25));
//                 this.h1 += t >>> 25 | t << 7;
//                 t = (this.h7 & (127 << 12)) | (this.h6 & (63 << 6)) | (this.h5 & 63);
//                 this.h2 += t;
//                 t = (this.h7 & (63 << 19)) | (this.h6 & (127 << 12)) | (this.h5 & (63 << 6));
//                 this.h3 += (t >>> 6);
//                 t = (this.h7 & (127 << 25)) | (this.h6 & (63 << 19)) | (this.h5 & (127 << 12));
//                 this.h4 += (t >>> 12);
//                 break;
//             case 24 /* HAVAL_192_BIT */:
//                 t = (this.h7 & 31) | (this.h6 & (63 << 26));
//                 this.h0 += t >>> 26 | t << 6;
//                 t = (this.h7 & (31 << 5)) | (this.h6 & 31);
//                 this.h1 += t;
//                 t = (this.h7 & (63 << 10)) | (this.h6 & (31 << 5));
//                 this.h2 += (t >>> 5);
//                 t = (this.h7 & (31 << 16)) | (this.h6 & (63 << 10));
//                 this.h3 += (t >>> 10);
//                 t = (this.h7 & (31 << 21)) | (this.h6 & (31 << 16));
//                 this.h4 += (t >>> 16);
//                 t = (this.h7 & (63 << 26)) | (this.h6 & (31 << 21));
//                 this.h5 += (t >>> 21);
//                 break;
//             case 28 /* HAVAL_224_BIT */:
//                 this.h0 += ((this.h7 >>> 27) & 31);
//                 this.h1 += ((this.h7 >>> 22) & 31);
//                 this.h2 += ((this.h7 >>> 18) & 15);
//                 this.h3 += ((this.h7 >>> 13) & 31);
//                 this.h4 += ((this.h7 >>> 9) & 15);
//                 this.h5 += ((this.h7 >>> 4) & 31);
//                 this.h6 += (this.h7 & 15);
//         }
//     };







//     /**
//      * Permutations phi_{i,j}, i=3,4,5, j=1,...,i.
//      *
//      * rounds = 3: 6 5 4 3 2 1 0 | | | | | | | (replaced by) phi_{3,1}: 1 0 3 5
//      * 6 2 4 phi_{3,2}: 4 2 1 0 5 3 6 phi_{3,3}: 6 1 2 3 4 5 0
//      *
//      * rounds = 4: 6 5 4 3 2 1 0 | | | | | | | (replaced by) phi_{4,1}: 2 6 1 4
//      * 5 3 0 phi_{4,2}: 3 5 2 0 1 6 4 phi_{4,3}: 1 4 3 6 0 2 5 phi_{4,4}: 6 4 0
//      * 5 2 1 3
//      *
//      * rounds = 5: 6 5 4 3 2 1 0 | | | | | | | (replaced by) phi_{5,1}: 3 4 1 0
//      * 5 2 6 phi_{5,2}: 6 2 1 0 3 4 5 phi_{5,3}: 2 6 0 4 3 1 5 phi_{5,4}: 1 5 3
//      * 2 0 4 6 phi_{5,5}: 2 5 0 6 4 3 1
//      * @param {number} x7
//      * @param {number} x6
//      * @param {number} x5
//      * @param {number} x4
//      * @param {number} x3
//      * @param {number} x2
//      * @param {number} x1
//      * @param {number} x0
//      * @param {number} w
//      * @return {number}
//      * @private
//      */
//     /*private*/ EncryptPwHaval.prototype.FF1 = function (x7, x6, x5, x4, x3, x2, x1, x0, w) {
//         var t;
//         switch ((this.rounds)) {
//             case 3:
//                 t = this.f1(x1, x0, x3, x5, x6, x2, x4);
//                 break;
//             case 4:
//                 t = this.f1(x2, x6, x1, x4, x5, x3, x0);
//                 break;
//             default:
//                 t = this.f1(x3, x4, x1, x0, x5, x2, x6);
//         }
//         return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w;
//     };

//     /*private*/ EncryptPwHaval.prototype.FF2 = function (x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
//         var t;
//         switch ((this.rounds)) {
//             case 3:
//                 t = this.f2(x4, x2, x1, x0, x5, x3, x6);
//                 break;
//             case 4:
//                 t = this.f2(x3, x5, x2, x0, x1, x6, x4);
//                 break;
//             default:
//                 t = this.f2(x6, x2, x1, x0, x3, x4, x5);
//         }
//         return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
//     };

//     /*private*/ EncryptPwHaval.prototype.FF3 = function (x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
//         var t;
//         switch ((this.rounds)) {
//             case 3:
//                 t = this.f3(x6, x1, x2, x3, x4, x5, x0);
//                 break;
//             case 4:
//                 t = this.f3(x1, x4, x3, x6, x0, x2, x5);
//                 break;
//             default:
//                 t = this.f3(x2, x6, x0, x4, x3, x1, x5);
//         }
//         return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
//     };

//     /*private*/ EncryptPwHaval.prototype.FF4 = function (x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
//         var t;
//         switch ((this.rounds)) {
//             case 4:
//                 t = this.f4(x6, x4, x0, x5, x2, x1, x3);
//                 break;
//             default:
//                 t = this.f4(x1, x5, x3, x2, x0, x4, x6);
//         }
//         return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
//     };

//     /*private*/ EncryptPwHaval.prototype.FF5 = function (x7, x6, x5, x4, x3, x2, x1, x0, w, c) {
//         var t = this.f5(x2, x5, x0, x6, x4, x3, x1);
//         return (t >>> 7 | t << 25) + (x7 >>> 11 | x7 << 21) + w + c;
//     };

//     /*private*/ EncryptPwHaval.prototype.f1 = function (x6, x5, x4, x3, x2, x1, x0) {
//         return x1 & (x0 ^ x4) ^ x2 & x5 ^ x3 & x6 ^ x0;
//     };

//     /*private*/ EncryptPwHaval.prototype.f2 = function (x6, x5, x4, x3, x2, x1, x0) {
//         return x2 & (x1 & ~x3 ^ x4 & x5 ^ x6 ^ x0) ^ x4 & (x1 ^ x5) ^ x3 & x5 ^ x0;
//     };

//     /*private*/ EncryptPwHaval.prototype.f3 = function (x6, x5, x4, x3, x2, x1, x0) {
//         return x3 & (x1 & x2 ^ x6 ^ x0) ^ x1 & x4 ^ x2 & x5 ^ x0;
//     };

//     /*private*/ EncryptPwHaval.prototype.f4 = function (x6, x5, x4, x3, x2, x1, x0) {
//         return x4 & (x5 & ~x2 ^ x3 & ~x6 ^ x1 ^ x6 ^ x0) ^ x3 & (x1 & x2 ^ x5 ^ x6) ^ x2 & x6 ^ x0;
//     };

//     /*private*/ EncryptPwHaval.prototype.f5 = function (x6, x5, x4, x3, x2, x1, x0) {
//         return x0 & (x1 & x2 & x3 ^ ~x5) ^ x1 & x4 ^ x2 & x5 ^ x3 & x6;
//     };

//     EncryptPwHaval.prototype.update$byte_A = function (b) {
//         this.update$byte_A$int$int(b, 0, b.length);
//     };



//     EncryptPwHaval.prototype.update$byte_A$int$int = function (b, offset, len) {
//         var n = ((this.count % this.blockSize) | 0);
//         this.count += len;
//         var partLen = this.blockSize - n;
//         var i = 0;
//         if (len >= partLen) {
//             /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
//                 if (srcPts !== dstPts || dstOff >= srcOff + size) {
//                     while (--size >= 0)
//                         dstPts[dstOff++] = srcPts[srcOff++];
//                 }
//                 else {
//                     var tmp = srcPts.slice(srcOff, srcOff + size);
//                     for (var i_1 = 0; i_1 < size; i_1++)
//                         dstPts[dstOff++] = tmp[i_1];
//                 }
//             })(b, offset, this.buffer, n, partLen);
//             this.transform(this.buffer, 0);
//             for (i = partLen; i + this.blockSize - 1 < len; i += this.blockSize) {
//                 {
//                     this.transform(b, offset + i);
//                 }
//                 ;
//             }
//             n = 0;
//         }
//         if (i < len) {
//             /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) {
//                 if (srcPts !== dstPts || dstOff >= srcOff + size) {
//                     while (--size >= 0)
//                         dstPts[dstOff++] = srcPts[srcOff++];
//                 }
//                 else {
//                     var tmp = srcPts.slice(srcOff, srcOff + size);
//                     for (var i_2 = 0; i_2 < size; i_2++)
//                         dstPts[dstOff++] = tmp[i_2];
//                 }
//             })(b, offset + i, this.buffer, n, len - i);
//         }

//         // var msg="";
//         // for(var i=0; i< this.buffer.length; i++){
//         //     msg += ', '+this.buffer[i];
//         // }
//         // console.log(msg);
//     };



//     EncryptPwHaval.prototype.logArray = function (a) {
//         var msg = "";
//         for (var i = 0; i < a.length; i++) {
//             msg += ', ' + a[i];
//         }
//         console.log(msg);
//     }



//     EncryptPwHaval.prototype.update = function (b, offset, len) {
//         if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
//             return this.update$byte_A$int$int(b, offset, len);
//         }
//         else if (((b != null && b instanceof Array && (b.length == 0 || b[0] == null || (typeof b[0] === 'number'))) || b === null) && offset === undefined && len === undefined) {
//             return this.update$byte_A(b);
//         }
//         else
//             throw new Error('invalid overload');
//     };



//     EncryptPwHaval.prototype.digest = function () {
//         this.logArray(this.buffer);
//         var tail = this.padBuffer();
//         this.logArray(tail);
//         this.update$byte_A$int$int(tail, 0, tail.length);
//         var result = this.getResult();
//         this.reset();
//         return result;
//     };



//     EncryptPwHaval.prototype.reset = function () {
//         this.count = 0;
//         for (var i = 0; i < this.blockSize;) {
//             {
//                 this.buffer[i++] = 0;
//             }
//             ;
//         }
//         this.resetContext();
//     };



//     // EncryptPwHaval.HEX_DIGITS_$LI$ = function () {
//     //     if (EncryptPwHaval.HEX_DIGITS == null)
//     //         EncryptPwHaval.HEX_DIGITS = ("0123456789ABCDEF").split(''); return EncryptPwHaval.HEX_DIGITS;
//     // };
//     // ;


//     // EncryptPwHaval.BASE64_CHARSET_$LI$ = function () {
//     //     if (EncryptPwHaval.BASE64_CHARSET == null)
//     //         EncryptPwHaval.BASE64_CHARSET = (EncryptPwHaval.BASE64_CHARS).split(''); return EncryptPwHaval.BASE64_CHARSET;
//     // };
//     // ;


//     // EncryptPwHaval.toString$byte_A = function (ba) {
//     //     return EncryptPwHaval.toString$byte_A$int$int(ba, 0, ba.length);
//     // };


//     // EncryptPwHaval.toString$byte_A$int$int = function (ba, offset, length) {
//     //     var buf = (function (s) {
//     //         var a = []; while (s-- > 0)
//     //             a.push(null); return a;
//     //     })(length * 2);
//     //     for (var i = 0, j = 0, k = void 0; i < length;) {
//     //         {
//     //             k = ba[offset + i++];
//     //             buf[j++] = EncryptPwHaval.HEX_DIGITS_$LI$()[(k >>> 4) & 15];
//     //             buf[j++] = EncryptPwHaval.HEX_DIGITS_$LI$()[k & 15];
//     //         }
//     //         ;
//     //     }
//     //     return buf.join('');
//     // };


//     /**
//      * <p>
//      * Returns a string of hexadecimal digits from a byte array, starting at
//      * <code>offset</code> and consisting of <code>length</code> bytes. Each
//      * byte is converted to 2 hex symbols; zero(es) included.</p>
//      *
//      * @param {Array} ba the byte array to convert.
//      * @param {number} offset the index from which to start considering the bytes to
//      * convert.
//      * @param {number} length the count of bytes, starting from the designated offset to
//      * convert.
//      * @return {string} a string of hexadecimal characters (two for each byte)
//      * representing the designated input byte sub-array.
//      */
//     // EncryptPwHaval.toString = function (ba, offset, length) {
//     //     if (((ba != null && ba instanceof Array && (ba.length == 0 || ba[0] == null || (typeof ba[0] === 'number'))) || ba === null) && ((typeof offset === 'number') || offset === null) && ((typeof length === 'number') || length === null)) {
//     //         return EncryptPwHaval.toString$byte_A$int$int(ba, offset, length);
//     //     }
//     //     else if (((ba != null && ba instanceof Array && (ba.length == 0 || ba[0] == null || (typeof ba[0] === 'number'))) || ba === null) && offset === undefined && length === undefined) {
//     //         return EncryptPwHaval.toString$byte_A(ba);
//     //     }
//     //     else
//     //         throw new Error('invalid overload');
//     // };


//     EncryptPwHaval.main = function () {
//         var args = [];
//         for (var _i = 0; _i < arguments.length; _i++) {
//             args[_i] = arguments[_i];
//         }
//         try {
//             //console.info(EncryptPwHaval.Encrypt("abscd"));
//             console.log(EncryptPwHaval.Encrypt("a"));
//             console.log("DE8FD5EE72A5E4265AF0A756F4E1A1F65C9B2B2F47CF17ECF0D1B88679A3E22F");
//             //console.log(EncryptPwHaval.Encrypt(""));
//             //console.log(EncryptPwHaval.Encrypt("aaa"));
//             //console.info("BE417BB4DD5CFB76C7126F4F8EEB1553A449039307B1A3CD451DBFDC0FBBE330");
//         }
//         catch (ex) {
//             console.error(ex.message, ex);
//         }
//         ;
//     };


//     EncryptPwHaval.prototype.toHexString = function (d) {
//         var retval = "";
//         for (var i = 0; i < d.length; i++) {
//             retval += ("00" + d[i].toString(16)).substr(-2).toUpperCase();
//         }
//         return (retval);
//     };


//     EncryptPwHaval.Encrypt = function (src) {
//         var h = new EncryptPwHaval(EncryptPwHaval.HAVAL_256_BIT, EncryptPwHaval.HAVAL_5_ROUND);
//         if (src != null && src.length > 0) {
//             h.update$byte_A(/* getBytes */(src).split('').map(function (s) { return s.charCodeAt(0); }));
//         }
//         //return (h.digest().toString());
//         console.log('-----');
//         var d = h.digest();
//         console.log(d);
//         //return (h.digest().toString());
//         return (h.toHexString(d));
//         //return (h.digest());
//         //return(src);
//     };



//     return EncryptPwHaval;
// }());

// EncryptPwHaval.HAVAL_HASH = "haval";
// EncryptPwHaval.HAVAL_VERSION = 1;
// EncryptPwHaval.HAVAL_128_BIT = 16;
// EncryptPwHaval.HAVAL_160_BIT = 20;
// EncryptPwHaval.HAVAL_192_BIT = 24;
// EncryptPwHaval.HAVAL_224_BIT = 28;
// EncryptPwHaval.HAVAL_256_BIT = 32;
// EncryptPwHaval.HAVAL_3_ROUND = 3;
// EncryptPwHaval.HAVAL_4_ROUND = 4;
// EncryptPwHaval.HAVAL_5_ROUND = 5;
// EncryptPwHaval.BLOCK_SIZE = 128;
// /**
//  * caches the result of the correctness test, once executed.
//  */
// EncryptPwHaval.valid = null;
// EncryptPwHaval.BASE64_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz./";
// EncryptPwHaval["__class"] = "EncryptPwHaval";
// // EncryptPwHaval.BASE64_CHARSET_$LI$();
// // EncryptPwHaval.HEX_DIGITS_$LI$();
// //EncryptPwHaval.main(null);

module.exports = {
    //EncryptPwHaval: EncryptPwHaval,
    Encrypt: Encrypt,
    EncryptOld: EncryptOld,
    Haval: Haval
    //main: main
};