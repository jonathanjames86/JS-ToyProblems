//Create an empty array from 1 to the input parameter
//Example: createArray(6) should return [1,2,3,4,5,6]

function createArray(n){
  //define array
  var array = [];
  for(var i = 1; i < (n+1);i++){
    array.push(i);
  }
  return array;
}
