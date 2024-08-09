// // Promise

// let myPromise = new Promise((resolve, reject) => {
//    let success = true; // Change to false to see the reject case
//    setTimeout(() => {
//      if (success) {
//        resolve("Promise resolved!");
//      } else {
//        reject("Promise rejected!");
//      }
//    }, 1000);
//  });

//  myPromise
//    .then((message) => {
//      console.log(message);
//    })
//    .catch((error) => {
//      console.error(error);
//    });

let task = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task Rejected !!");
  }, 1000);
});

task.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log("Error : ", error);
  }
)
.finally(()=>{
  console.log("Task Completed !!");
})