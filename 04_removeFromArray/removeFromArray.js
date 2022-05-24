const removeFromArray = function(...args) {

    argument = [...args]
    count = argument.length
    array = argument[0]

    for ( let i = count - 1 ; i >= 1; i-- ) {

        toSplice = argument[i]

        indexToSplice = array.indexOf(toSplice)

        if (indexToSplice >= 0) {
            array.splice(indexToSplice,1)
        }
        

    }
    return array
};


// Do not edit below this line
module.exports = removeFromArray;
