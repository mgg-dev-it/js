'use strict';

function isEmpty(val){
    if (val == undefined) return(true);
    if (val == null) return(true);
    if (typeof val == 'string'){
        if (val == '') return(true);
    }
    return(false);
}

module.exports = {
    isEmpty: isEmpty
};