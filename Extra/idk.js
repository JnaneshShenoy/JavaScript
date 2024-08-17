// // var student = {
// //    name : "Jnanesh",
// //    age : 20,
// //    course : 'CSE',
// //    USN : '4NM21CS071'
// // }

// // console.log(student)

// // for(key in student){
// //    console.log(key," : ",typeof(student[key]))
// // }

// // Q1
// function addDays(startDate, days) {
//    const date = new Date(startDate);
//    date.setDate(date.getDate() + days);
//    const options = { year: 'numeric', month: 'long', day: 'numeric' };
//    return date.toLocaleDateString('en-GB', options);
// }

// // Example usage:
// const startDate = "2018-07-16";
// const n = 30;
// console.log(addDays(startDate, n)); // Expected output: 15 August 2018

// // Q2
// function checkDate(dateStr) {
//    const regex = /^(0[1-9]|1[0-2])-([0-2][0-9]|3[01])-\d{4}$/;
//    return regex.test(dateStr);
// }

// // Example usage:
// const dateStr = "19-12-1995";
// console.log(checkDate(dateStr)); // Expected output: False

// Q3
// function displayToday() {
//    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    const today = new Date();
//    const day = days[today.getDay()];
//    let hours = today.getHours();
//    const minutes = today.getMinutes();
//    const sec = today.getSeconds();
//    const tm = hours >= 12 ? 'PM' : 'AM';
//    hours = hours % 12;
//    hours = hours ? hours : 12;
//    const timeString = `${hours} ${tm}: ${minutes.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

//    console.log(`Today is: ${day}.`);
//    console.log(`Current time is ${timeString}`);
// }

// function displayToday() {
//    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    const today = new Date();
//    const day = days[today.getDay()];
//    let hours = today.getHours();
//    const minutes = today.getMinutes();
//    const seconds = today.getSeconds();
//    const amPm = hours >= 12 ? 'PM' : 'AM';
//    hours = hours % 12;

//    const timeString = hours + " " + amPm + ": " + minutes + ":" + seconds;

//    console.log("===========================")
//    console.log("Today is: " + day);
//    console.log("Current time is " + timeString);
//    console.log("===========================")
// }

// displayToday();

// function addDaysToDate(dateString, n) {
//   let datex = dateString.split(" ");
//   let day = parseInt(datex[0]);
//   let month = datex[1];
//   let year = parseInt(datex[2]);

//   const monthMap = {
//     January: 0,
//     February: 1,
//     March: 2,
//     April: 3,
//     May: 4,
//     June: 5,
//     July: 6,
//     August: 7,
//     September: 8,
//     October: 9,
//     November: 10,
//     December: 11,
//   };

//   let date = new Date(year, monthMap[month], day);
//   date.setDate(date.getDate() + n);

//   let newMonth = Object.keys(monthMap).find(
//     (key) => monthMap[key] === date.getMonth()
//   );
//   let newDate = date.getDate() + " " + newMonth + " " + date.getFullYear();
//   return newDate;
// }

// let d = "25 January 2018";
// let n = 36;
// let resultDate = addDaysToDate(d, n);
// console.log("\n\n" + n + " days from " + d + " will be : " + resultDate + "\n\n");

// function checkDate(date) {
//    const datePattern = /^(\d{2})-(0[1-9]|1[0-2])-(\d{4})$/;
//    return datePattern.test(date);
// }

// date1 = "12-10-2003"
// date2 = "11-27-2023"
// console.log("\nInput Date : " + date1 + "\nOutput     : " + checkDate(date1) + "\n");
// console.log("Input Date : " + date2 + "\nOutput     : " + checkDate(date2) + "\n");

// var student = {
//    name : "Jnanesh",
//    age : 20,
//    course : 'CSE',
//    USN : '4NM21CS071'
//    }
//    console.log("\n====================\n");
//    console.log(student)
//    console.log("\n====================\n");
//    for(key in student){
//    console.log(key," : ",student[key])
//    }
//    console.log("\n====================\n");
//    // for(key in student){
//    //    console.log(student[key] + ", ")
//    //    }
//    let ans = "";
//    for (let key in student) {
//        ans += student[key] + ", ";
//    }
//    ans = ans.slice(0, -2);
//    console.log(ans);
//    console.log("\n====================");

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";

  // Simple name validation (only letters, spaces, and hyphens allowed)
  var nameRegex = /^[a-zA-Z\s\-]+$/;
  var valid = true;

  // Name validation
  if (name.trim() === "") {
    nameError.textContent = "Please enter name.";
    valid = false;
  } else if (!nameRegex.test(name)) {
    alert("Invalid name");
    valid = false;
  }

  // Email validation (basic pattern)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    emailError.textContent = "Please enter email.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    alert("Invalid email");
    valid = false;
  }

  // If everything is valid
  if (valid) {
    alert("Valid data!!");
  }
}
