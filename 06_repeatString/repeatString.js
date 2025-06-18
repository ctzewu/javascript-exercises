const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    let repeatstring = ""
    for (let i=0; i<num; i++){
        repeatstring = repeatstring+string;
    }
    return repeatstring;
};

// Do not edit below this line
module.exports = repeatString;
