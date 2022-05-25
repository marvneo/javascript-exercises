const caesar = function(message, shifts) {

    output = ''

    // Making sure shifts remain in range
    shifts = shifts % 26

    // Acess each character
    for (i = 0; i < message.length; i++) {
        
        oriCode = message.charCodeAt(i)
        shiftedCode = oriCode + shifts

        // Checks for lower case letters
        if (oriCode > 96 && oriCode < 123) {
          
            if (shiftedCode > 122) {
                shiftedCode = (shiftedCode % 122) + 96
            } else if (shiftedCode < 97) {
                shiftedCode = 123 - (97 % shiftedCode)
            }
            
            output += String.fromCharCode(shiftedCode)
        

        // Checks for upper case letters
        } else if (oriCode > 64 && oriCode < 91) {

            if (shiftedCode > 90) {
                shiftedCode = (shiftedCode % 90) + 64
            } else if (shiftedCode < 65) {
                shiftedCode = 91 - (65 % shiftedCode)
            }

            output += String.fromCharCode(shiftedCode)

        } else {

            output += message[i]
        
        }

    }
    return output
};

// Do not edit below this line
module.exports = caesar;
