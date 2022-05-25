const ftoc = function(tempF) {
  
  output = ((tempF - 32) * .5556)

  if (! Number.isInteger(output)) {
    output = Number(output.toFixed(1));
  }

  return output 
};

const ctof = function(tempC) {

  output = ((tempC * 1.8) + 32)

  if (! Number.isInteger(output)) {
    output = Number(output.toFixed(1))
  }


  return output
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
