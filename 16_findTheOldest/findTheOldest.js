const findTheOldest = function() {
    let now = new Date();
    console.log(now);
    let age = arguments[0].map((person) => {
        let birthyear = person.yearOfBirth;
        let deathyear = person.yearOfDeath;
        if (deathyear === undefined) deathyear = now.getFullYear();
        return deathyear - birthyear;
    });
    return arguments[0][age.indexOf(age.reduce((a, b) => Math.max(a, b), -Infinity))];
};

// Do not edit below this line
module.exports = findTheOldest;
