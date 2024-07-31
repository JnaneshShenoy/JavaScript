let dateObj = new Date();
console.log("today's date is", dateObj);
console.log("Date is " + dateObj.getDate());
console.log("Day is " + dateObj.getDay());
console.log("fullyear is " + dateObj.getFullYear());
console.log("Hours is " + dateObj.getHours());
console.log("Month is " + dateObj.getMonth());
console.log("time is " + dateObj.getTime());
console.log("milliseconds is " + dateObj.getMilliseconds());

// Set methods
let dateObj1 = new Date()
dateObj1.setDate(3)
dateObj1.setFullYear(2020)
dateObj1.setMonth(7)
dateObj1.setHours(11)
dateObj1.setMilliseconds(2000)
console.log(dateObj1)

console.log("Date is : " + dateObj1.getDate());
console.log("Year is : " + dateObj1.getFullYear());
console.log("Month is : " + dateObj1.getMonth());
console.log("millisecond is : " + dateObj1.getMilliseconds());
console.log("Hour is : " + dateObj1.getHours());