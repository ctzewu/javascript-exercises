const palindromes = function () {
    var str = arguments[0].replace(/[^a-z0-9]/gi, '').toLowerCase();
    let revstr = str.split("").reverse().join("");
    if (str === revstr) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
