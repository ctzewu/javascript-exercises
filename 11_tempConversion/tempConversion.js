const convertToCelsius = function(ftemp) {
    let ctemp = (ftemp - 32)/(9/5)
    return Math.round(ctemp * 10)/10
};

const convertToFahrenheit = function(ctemp) {
    let ftemp = (ctemp*9/5)+32
    return Math.round(ftemp * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
