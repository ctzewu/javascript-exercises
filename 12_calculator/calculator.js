const add = function() {
  let args = Array.from(arguments);
  if (args.length > 0){
    return args.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);
  }
  else return 0;
};

const subtract = function() {
  let args = Array.from(arguments);
  if (args.length > 0){
    return args.slice(1).reduce((accumulator, currentValue) => {
      return accumulator - currentValue
    }, args[0]);
  }
  else return 0;
};

const sum = function() {
  let args = Array.from(arguments[0]);
  if (args.length > 0){
    return args.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);
  }
  else return 0;
};

const multiply = function() {
  let args = Array.from(arguments[0]);
  if (args.length > 0){
    return args.slice(1).reduce((accumulator, currentValue) => {
      return accumulator * currentValue
    }, args[0]);
  }
  else return 0;
};

const power = function() {
  let args = Array.from(arguments);
  if (args.length > 0){
    return args.slice(1).reduce((accumulator, currentValue) => {
      return accumulator ** currentValue
    }, args[0]);
  }
  else return 0;
};

const factorial = function() {
  if (arguments[0] < 0) return 0;
  else if (arguments[0] == 0) return 1;
  else {
    return factorial(arguments[0]-1) * arguments[0];
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
