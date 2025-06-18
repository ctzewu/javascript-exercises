const reverseString = function(string) {
    let revstr = string.split("");
    revstr = revstr.reverse();
    revstr = revstr.join("");
    return revstr;
};

// Do not edit below this line
module.exports = reverseString;
