//Convert Celsius to Fahrenheit;

//First create a function that takes the celsius temp as a parameter
function convertToF(celsius){

  //let's hoist the final fahrenheit variable
  var fahrenheit;

  //now let's do our math The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
  fahrenheit = ((celsius * (9/5)) + 32);
  return fahrenheit;
}
