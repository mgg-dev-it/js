'use strict';

function isEmpty(val) {
    if (val == undefined) return (true);
    if (val == null) return (true);
    if (typeof val == 'string') {
        if (val == '') return (true);
    }
    return (false);
}

function initArray(val, count) {
    var a = [];
    while (count-- > 0) {
        a.push(val);
    }
    return a;
}

//https://gist.github.com/lihnux/2aa4a6f5a9170974f6aa
function toUTF8Array(str) {
    let utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
};

function toHexString(d) {
    var retval = "";
    for (var i = 0; i < d.length; i++) {
        retval += ("00" + d[i].toString(16)).substr(-2).toUpperCase();
    }
    return (retval);
};

function logArray(a) {
    var msg = "";
    for (var i = 0; i < a.length; i++) {
        msg += ', ' + a[i];
    }
    console.log(msg);
}

function arrayCopy(srcPts, srcOff, dstPts, dstOff, size) {
    if (srcPts !== dstPts || dstOff >= srcOff + size) {
        while (--size >= 0)
            dstPts[dstOff++] = srcPts[srcOff++];
    }
    else {
        var tmp = srcPts.slice(srcOff, srcOff + size);
        for (var i_1 = 0; i_1 < size; i_1++)
            dstPts[dstOff++] = tmp[i_1];
    }
}

module.exports = {
    isEmpty: isEmpty,
    initArray: initArray,
    toUTF8Array: toUTF8Array,
    toHexString: toHexString,
    logArray: logArray,
    arrayCopy: arrayCopy
};