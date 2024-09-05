// 3
// accepts two numbers as parameters and throws a 
// custom error if the 2nd number is zero.

function twoNumbers(a, b) {
  if (b === 0) {
    throw new Error("second number is zero!");
  }
  console.log(b);
}

try {
   twoNumbers(10, 10);
   twoNumbers(10, 0);   
} catch (error) {
  console.log(error.message);
}

//  4
// an array as a parameter and throws
// a custom 'Error if the array is empty

arr1 = []
arr2= [1,2,3,4,5]
function processArray(arr) {
  if (arr.length == 0) {
    throw new Error("Dudee your array is empty!");
  }
  console.log(arr);
}

try {
   processArray(arr2);
   processArray(arr1);
} catch (error) {
  console.log(error.message);
}