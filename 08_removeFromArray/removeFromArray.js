const removeFromArray = function(arr) {
    let retarr = arr;
    if (arguments.length<2){
        return retarr;
    }
    for (let i=1; i<arguments.length; i++){
        for (let j=0; j<retarr.length; j++){
            if (retarr.indexOf(arguments[i]) != -1){
                retarr.splice(retarr.indexOf(arguments[i]), 1);
            }
        }
    }
    return retarr;
};

// Do not edit below this line
module.exports = removeFromArray;
