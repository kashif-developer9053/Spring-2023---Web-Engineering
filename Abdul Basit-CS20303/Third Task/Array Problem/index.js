/* JavaScript program  that takes an array of numbers 
 as input and returns the ratio of positive, negative,
  and zero values in the array using function */


function calculateRatios(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  
  return {
    positive: (positive / arr.length).toFixed(6),
    negative: (negative / arr.length).toFixed(6),
    zero: (zero / arr.length).toFixed(6)
  };
}

let arr = [1,5,-6,0,-1,0,7,8]
let ratios =  calculateRatios(arr);
console.log(ratios);






/* Javascript program to calculate a maximum and
 minimum summing of values*/


function minMaxSum(arr) {
  let min = 0;
  let max = 0;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  let minSum = sum - max;
  let maxSum = sum - min;
  
  return {
    min: minSum,
    max: maxSum
  };
}

let arrr = [5, 7, 19, 2, 9 , 20, 1, 15];
let minMax = minMaxSum(arrr);

console.log("Minimum sum: " + minMax.min);
console.log("Maximum sum: " + minMax.max);
