// const main = document.getElementById('main');
// const p = document.createElement('p');


// const n = prompt("Enter the number");
// let tot = 0
// for (let i = 0; i <= n; i++) {
//    tot += i
// }

// p.textContent = "Total sum is: " + tot
// main.appendChild(p)



// let count = 1
// let sum = 0
// while (count <= 10) {
//    sum += count
//    count++
// }
// document.write(sum)

// courses = ["html","css","c","cpp","python"]
// for (let i=0; i<courses.length;i++){
//    document.write('<br/>' + courses[i])
// }


// do{
//    document.write('<br/>' + courses[i])
// }while(1)







// let emp = {
//    name: "John",
//    age: 30,
//    salary: 10000,
//    dept : "HR"
// }

// for (i in emp){
//    console.log(i + " : " + emp[i])
// }

// for of 
// arr = [1,2,3,4,5]
// for(i of arr){
//    console.log(i)
// }


// let mat = [
//    [1,3,4],
//    [5,2,6],
//    [7,8,9]
// ]

// let tot = 0
// for (i=0;i<mat.length;i++){
//    let row = "";
//    s = 0
//    for(j=0;j<mat[i].length;j++){
//       row += mat[i][j] + " "
//       s += mat[i][j]
//    }
//    tot += s
//    console.log(row)
// }
// console.log(tot)



// n = prompt("Enter value : ")

// fact = 1
// for(i=1; i<n; i++){
//       fact *= i;
// }
// document.write(fact)


// n = prompt("Enter n: ")
// let i = 1
// while(i != n){
//    if (i%2 == 0){
//       document.write(i + "<br/>")
//    } else{
//       continue
//    }
//    i++
// }


// function add(n1,n2){
//    return n1 + n2
// }

// console.log(add(1,5))


// function greet(choice){
//    let msg = choice();
//    console.log(msg)
// }

// let message= function(){
//    return "Heyya !!!"
// }
// greet(message)


// Assignment :
// 1. Write a JavaScript code to do online booking of theatre tickets and calculate the total price based on the below conditions:
// If seats to be booked are not more than 2, the cost per ticket remains $9.
// If seats are 6 or more, booking is not allowed.
// If seats to be booked are more than 2 but less than 5, based on the number of seats booked, do the following:
// Calculate total cost by applying a discount of 5, 7, 9, 11 percent, and so on for customer 1,2,3 till 5.
// Try the code with different values for the number of seats.

// Write the following custom functions to implement given requirements:
// calculateCost(seats): Calculate and display the total cost to be paid by the customer for the tickets they have bought.
// calculate Discount (seats): Calculate discount on the tickets bought by the customer. Implement using arrow functions.

// Booking Summary
// Actual cost per ticket: $9
// 4 seats are eligible for festive discount!!
// 5% discount! on Ticket 1
// 7% discount! on Ticket 2
// 9% discount! on Ticket 3
// 11% discount! on Ticket 4
// Amount payable: $33.12

// const calculateDiscount = (seats) => {
//     if (seats <= 2) {
//         return 0;
//     } else if (seats >= 6) {
//         return "Booking not allowed for 6 or more seats.";
//     } else {
//         return (seats - 2) * 2 + 3;
//     }
// };

// function calculateCost(seats) {
//     const ticketPrice = 9;
//     if (seats <= 2) {
//         const totalCost = seats * ticketPrice;
//         return `Total cost for booking ${seats} seats is: $${totalCost}`;
//     } else if (seats >= 6) {
//         return "Booking not allowed for 6 or more seats.";
//     } else {
//         const discount = calculateDiscount(seats);
//         const totalCost = seats * ticketPrice;
//         const discountAmount = (totalCost * discount) / 100;
//         const finalCost = totalCost - discountAmount;
//         return `Total cost for booking ${seats} seats with a discount of ${discount}% is: $${finalCost.toFixed(2)}`;
//     }
// }


// // calculateCost(1);
// // calculateCost(2);
// // calculateCost(3);
// // calculateCost(4);
// // calculateCost(5);
// // calculateCost(6);

// const seats = prompt("Enter the number of seats you want to book:");
// const result = calculateCost(Number(seats));

// document.getElementById('result').textContent = result;


const calculateDiscount = (seats) => {
    let discount = 5 + (seats - 1) * 2;
    return discount
};

function calculateCost(seats) {
    const ticketPrice = 9;
    let resultHTML = `<p>Actual cost per ticket: $${ticketPrice}</p>`;
    
    if (seats <= 2) {
        const totalCost = seats * ticketPrice;
        resultHTML += `<p>Total cost for booking ${seats} seats is: $${totalCost}</p>`;
        return resultHTML;
    } else if (seats >= 6) {
        return "<p>Booking not allowed for 6 or more seats.</p>";
    } else {
        const totalCost = seats * ticketPrice;
        let discountAmount = 0;
        resultHTML += `<p>${seats} seats are eligible for discount!!</p>`;
        
        for (let i = 1; i <= seats; i++) {
            const individualDiscount = calculateDiscount(i);
            const discountOnTicket = (ticketPrice * individualDiscount) / 100;
            discountAmount += discountOnTicket;
            resultHTML += `<p>${individualDiscount}% discount! on Ticket ${i}</p>`;
        }
        
        const finalCost = totalCost - discountAmount;
        resultHTML += `<p>Amount payable: $${finalCost.toFixed(2)}</p>`;
        return resultHTML;
    }
}

const seats = prompt("Enter the number of seats:");
const result = calculateCost(Number(seats));

document.getElementById('result').innerHTML = result;
