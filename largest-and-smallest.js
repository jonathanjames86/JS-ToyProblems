//Find the largest and smallest integers in a given array
// Example [2,75,-45,22,104, -2] min() would return -45 max() would return 104

var arr = [2,75,-45,22,104, -2]


//ES5 Solution

var min = function(arr){
  //set variable to first item of the array as a comparision while looping
    var min =arr[0];
    for(var i=0; i<arr.length; i++){
       var cur = arr[i];
       if (cur<min) min=cur;
    }
    return min;
}

var max = function(arr){
    var max =arr[0];
    for(var i=0; i<arr.length; i++){
       var cur = arr[i];
       if (cur>max) max=cur;
    }
    return max;
}

//ES6 Solution

var min = function(arr){
    return Math.min(...arr);
}
