// let a = 1
// let b = 2
// let sum = a + b
// console.log(sum)

// Impl of Async
// console.log("executing first output !!")
// console.log("executing second output !!")
// demo = ()=>{console.log("Executing output 3 !!");}
// setTimeout(demo,2000);

// console.log("Executing output 4 !!")

/* Async methods:
1.callback
2.Promises
3.Chain of Promises
4.Async and await
*/

// CALLBACK
// function createQuote(quote,callback){
//     var myQuote = "Like I always say " + quote;
//     callback(myQuote)
// }

// function logQuote(quote){
//    console.log(quote)
// }

// createQuote("eat your Veggies !!",logQuote)

// function serverRequest(query, callback) {
//    setTimeout(function () {
//    var response = query + "full";
//    callback(response);
//    }, 5000);
//    }
//    function getResults (results) {
//    console.log("Response from the server :", results);
//    }
//    serverRequest("The glass is half ", getResults);

// test = (nums)=>{
//    let ans = []
//    for(num in nums){
//       if(num%2==0){
//          ans.push(num)
//       }
//    }
//    return ans
// }

// let nums = [1,2,3,4,5,6,7,8,9]
// console.log(test(nums))

function isodd(number) {
  return number % 2 != 0;
}
function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isodd));
