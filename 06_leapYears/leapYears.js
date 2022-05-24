const leapYears = function(year) {

    isDivisibleByFour = Number.isInteger(year/4)
    isDivisibleByFourHunnit = true

    if (Number.isInteger(year/100)) {
        isDivisibleByFourHunnit = Number.isInteger(year/400)
    }
    

    return isDivisibleByFour && isDivisibleByFourHunnit
};

// Do not edit below this line
module.exports = leapYears;
