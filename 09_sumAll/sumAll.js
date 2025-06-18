const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) ||  !Number.isInteger(num2) || num1 < 0 || num2<0){
        return "ERROR";
    }
    let max;
    let min;
    if (num1>num2){
        max = num1;
        min = num2;
    }
    else{
        max = num2;
        min = num1;
    }
    let sum=0;
    for (let i=min; i<=max; i++){
        sum = sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
