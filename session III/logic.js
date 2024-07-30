// Operators

// s = "We are gonna learn Javascript operators"

// const container = document.getElementById("container")
// const ele = document.createElement('h1');
// ele.textContent = s
// container.appendChild(ele)

// x = 12
// str1 = (`Addition: x + 3 = ${x + 3}`)
// const p = document.createElement('p');
// p.textContent = str1
// container.appendChild(p)



// let x = 5;
// let strValue = "Ganesh";
// let strValue1 = "Kumar";
// let numValue = 100;

// // Arithmetic operations
// console.log(`Addition: x + 3 = ${x + 3}`);
// console.log(`Subtraction: x - 3 = ${x - 3}`);
// console.log(`Multiplication: x * 3 = ${x * 3}`);
// console.log(`Division: x / 3 = ${x / 3}`);
// console.log(`Post-increment: x++ = ${x++}`);
// console.log(`Post-decrement: x-- = ${x--}`);
// console.log(`Modulus: x % 3 = ${x % 3}`);

// // Perform string concatenation
// let setResult = strValue + " " + strValue1;
// let newStrValue = strValue + " " + numValue;

// // Log results
// console.log(`Result: ${newStrValue}`);
// console.log(`Result 1: ${setResult}`);

// console.log(2 == 2)
// console.log(2 == "2")
// console.log(2 === "2")
// console.log(2 != 2)
// console.log(2 !== 2)
// console.log(2 >= 2)
// console.log(2 <= 2)
// console.log(2 < 2)
// console.log(2 > 2)

// let workhrs = 8
// let extra = 2

// workhrs>extra?console.log("Noooo"):console.log("ok")

// workhrs>extra?str = "Noooo":str = "ok"

// const div = document.getElementById("container");
// const p = document.createElement("p");
// p.textContent = str;
// div.appendChild(p)

// let n = 50
// if (n > 0){
//    console.log("positive")
// } else if(n < 0){
//    console.log("negative")
// } else{
//    console.log("zero")
// }


// let marks = 50

// if (marks > 90){
//    console.log("Grade A")
// } else if(marks > 80){
//    console.log("Grade B")
// } else if(marks > 70){
//    console.log("Grade C")
// } else if(marks > 60){
//    console.log("Grade D")
// } else if(marks > 50){
//    console.log("Grade E")
// } else{
//    console.log("Fail")
// }


// const input = prompt("Enter your name : ")
// console.log(`Hello ${input}`)

// const container = document.getElementById("container")
// const txt = document.createElement('h1')
// txt.textContent = "Hello " + input
// container.appendChild(txt)


// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please enter your name: ", (name) => {
//     console.log(`Hello ${name}`)
//     rl.close()
// })




// var r = 45
// let r = prompt("Enter the radius: ")
// const pi = 3.14

// const container = document.getElementById('container')
// const ele = document.createElement('h1')
// ele.textContent = `Area of circle: ${pi * r * r}`
// container.appendChild(ele)


// let h = prompt("Enter height")
// let b = prompt("Enter base")

// const ele1 = document.createElement('h1')
// ele1.textContent = `Area of triangle: ${(1 / 2) * h * b}`
// container.appendChild(ele1)

// let a = 10
// let b1 = 20

// const ele2 = document.createElement('h1')
// ele2.textContent = "Before"
// container.appendChild(ele2)
// const p = document.createElement('p')
// p.textContent = `a = ${a} \n b = ${b1} \n `
// container.appendChild(p)

// let c = a
// a = b1
// b1 = c

// const ele3 = document.createElement('h1')
// ele3.textContent = "After"
// container.appendChild(ele3)
// const p1 = document.createElement('p')
// p1.textContent = `a = ${a} \n b = ${b1} \n `
// container.appendChild(p1)


// Theatre booking system
const cn = document.getElementById('container')
const ele = document.createElement('h1')
let n, price, total, disc

ele.textContent = "Theatre ticket booking system"
console.log("Theatre ticket booking system");
cn.appendChild(ele)
total = 0

   n = prompt("Enter number of seats: ");
   if (n >= 5 || n < 0) {
      alert("Invalid number of seats");
      console.log("Sorry, you can't book " + n + " seats");
   } else if(n <= 2){
      total = n * 9;
   } else {
      disc = 5
      for (i = 0; i < n; i++){
         price = 9 * (1 - (disc/100));
         disc += 2
         total = total + price;
         const p = document.createElement('p')
         p.textContent = "Ticket for customer " + i + " : $"+ price
         cn.appendChild(p)
      }
   }

   const p1 = document.createElement('p')
   p1.textContent = "Total price: $" + total
   cn.appendChild(p1)
   
   console.log("Total seats: " + n);
   console.log("Total price: $" + total);