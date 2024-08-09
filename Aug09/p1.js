// // let val = await promise;

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
//   });
//   let result = await promise;
//   console.log(result);
// }

// f()

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     console.log("get the user from the database");
//     setTimeout(() => {
//       resolve({ userId: userId, username: "Rahul" });
//     }, 1000);
//   });
// }
// function getServices(user) {
//   return new Promise((resolve, reject) => {
//     console.log(`Get services of ${user.username}`);
//     setTimeout(() => {
//       resolve(["Email", "VPN", "CDN"]);
//     }, 2000);
//   });
// }

// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//     console.log(`Calculate service cost of ${services}`);
//     setTimeout(() => {
//       resolve(services.length * 100);
//     }, 2000);
//   });
// }

// async function showServiceCost() {
//   let user = await getUser(100);
//   let services = await getServices(user);
//   let cost = await getServiceCost(services);
//   console.log(`Cost of ${services} is ${cost}`);
//   return cost;
// }

// showServiceCost()

