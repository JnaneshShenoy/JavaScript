// function getUserById(id) {
//   if (typeof id !== "number" || id <= 0) {
//     throw new Error("Invalid id argument");
//   }
//   return new Promise((resolve, reject) => {
//     let authorized = false;
//     if (!authorized) {
//       reject(new Error("Unauthorized access to data"));
//     } else {
//       resolve({
//         id: id,
//         username: "admin",
//       });
//     }
//   });
// }

// getUserById(1)
//   .then((user) => console.log(user.username))
//   .catch((err) => console.log(`Caught by catch: ${err}`));


  let a = 2
  let b = 2.0
  if (a == b){
    console.log("true")
  } else{
    console.log("False")
  }