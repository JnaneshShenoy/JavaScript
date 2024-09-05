// 1
function fun1(place) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Let's take a trip to ${place}`);
    });
  });
}

fun1("Paris")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

fun1("Florida")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// 2
function bookFlight(flightName) {
  return new Promise((resolve, reject) => {
    if (flightName === "AirIndia") {
      setTimeout(() => {
        resolve("Flight booked");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Failed !!!");
      }, 2000);
    }
  });
}

function bookHotel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hotel booked");
    }, 2000);
  });
}

bookFlight("AirIndia")
  .then((result) => {
    console.log(result);
    return bookHotel();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
