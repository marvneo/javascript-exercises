const palindromes = function (string) {
    
    procString = string.replace(/[^a-zA-Z ]|\s/g, '').toLowerCase()
    strLength = procString.length

    if (strLength % 2 == 1) {
        
        count = (strLength-1)/2
        
        for (i = 0, j = count*2; i < count; i++, j--) {
        
            if (procString[i] != procString[j]) {
               return false
            }
        }

        return true

    } else {
        count = strLength/2

        for (i = 0, j = count*2-1; i < count; i++, j--) {
        
            if (procString[i] != procString[j]) {
               return false
            }
        }

        return true

    }
    



};

// Do not edit below this line
module.exports = palindromes;
