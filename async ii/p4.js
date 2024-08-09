const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the first promise has resolved");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the second promise has resolved");
    resolve(10);
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the third promise has resolved");
    resolve(10);
  }, 1000);
});

Promise.race([p1,p2,p3])
.then((val)=>console.log(`resolved ${val}`))
.catch((reason)=>console.log(`rejected : ${reason}`))
// Promise.all([p1, p2, p3]).then((results) => {
//   const tot = results.reduce((p, c) => p + c);
//   console.log(tot);
//   console.log("All promises have resolved:", results);
// });
