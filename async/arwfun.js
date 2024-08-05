let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filter(nums, callback) {
//   let results = [];
//   for (const num of nums) {
//     if (callback(num)) {
//       results.push(num);
//     }
//   }
//   return results;
// }

// let oddNums = filter(nums, (num) => num % 2 !== 0);
// console.log(oddNums);

function dwlnd(url,callback) {
  setTimeout(() => {
   console.log("Downloaded " + url);
   callback(url);
   }, 2000);
}
// function process(pic) {
//   console.log(`processing ${pic}`);
// }

let url = "https://www.jnanshenoy.netlify.app";
dwlnd(url,function (pic){
  console.log(`processing ${pic}`);
});
