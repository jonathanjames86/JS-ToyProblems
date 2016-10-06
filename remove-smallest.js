//Remove smallest item from the array without changin the order


function removeSmallest(numbers) {
  var smallPos;
  var smallestNumber = numbers[0];
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
      smallestNumber = numbers[i];
      smallPos = i;
    }
   }
   numbers.splice(smallPos, 1);

   return numbers;
}


//another solution
function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}


//Another possible solution

function removeSmallest(numbers) {

  // get the minimum value from array
  var min = Math.min.apply(null, numbers);
  var index = numbers.indexOf(min);

  // remove only one value using its index
  numbers.splice(index, 1);

  return numbers;
}
