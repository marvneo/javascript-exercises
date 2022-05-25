const add = function(a, b) {

  return (a+b)

};

const subtract = function(a,b) {
	
  return (a-b)

};

const sum = function(array) {
	
  output = 0

  for (i = 0; i < array.length; i++) {

    output += array[i]

  }

  return output

};

const multiply = function(array) {
  
  output = 1
  
  for (i = 0; i < array.length; i ++) {
    output = output * array[i]
  }

  return output

};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  
  if (num <= 0) {
    return 1
  } else {
    output = 1
    i = num
    while (i > 0) {
      output = output * i
      i --
  }

  return output
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
