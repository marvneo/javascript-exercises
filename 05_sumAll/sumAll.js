const sumAll = function(num1, num2) {

    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        maxNum = Math.max(num1,num2)
        minNum = Math.min(num1,num2)

        difference =  maxNum - minNum

        output = num1 + num2

        for ( i = minNum + 1 ; i < maxNum; i++ ) {
            output += i
        }

        return output
    } else {
        return 'ERROR'
    }

    

};

// Do not edit below this line
module.exports = sumAll;
