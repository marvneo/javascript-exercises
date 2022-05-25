const getTheTitles = function(bookArray) {

    output = []

    for (const book of bookArray) {
        output.push(book.title)
    }

    return output
};

// Do not edit below this line
module.exports = getTheTitles;
