const fibonacci = function(count) {
    
    if (count < 0) {
        return 'OOPS'
    } else {
        count = Number(count)
    }


    if (count < 2) {
        return count
    } else {
        return fibonacci(count-1) + fibonacci(count-2)

    }

    
};

// Do not edit below this line
module.exports = fibonacci;
