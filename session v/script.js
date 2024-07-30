// Destructured !!

// function des(arg1, arg2){
//    console.log(arg1,arg2)
// }

// des(1,2)

// const obj = {
//    name: "John",
//    dept: "CSE",
//    age: 25
// }

// function dis({name,age}){
//    console.log(name,age)
// }

// dis(obj)

// let sayHello = () => {
//    console.log("Hello")
// }

// sayHello()

// let tripcost = (tprice,npeople) =>{
//    totalcost = tprice*npeople
//    return totalcost
// }

// console.log("Total cost : "+tripcost(500,4))

// let trip = place => console.log(place + "Lessgoo!!" )

// trip("Delhi")

// let trip = (_) => console.log(_ + " Lessgoo!!")
// trip("Kudla","America")

// SCOPES

// let globalvar = "Global Variable"
// function outer(){
//    let outervar = "Outer Variable"
//    console.log(globalvar)
//    console.log(outervar)
// }

// outer()

// console.log(globalvar)
// console.log(outervar)

// function execute() {
//   alert("Let us calculated Simple Interest");
//   let P = prompt("please enter Principal Amount");
//   let R = prompt("please enter Rate of Interest");
//   let N = prompt("please enter Number of years");
//   let decision = confirm("shall we proceed to calculate SI");
//   if (decision) console.log("you decided to continue" + "<br/>");
//   else console.log("decided not to proceed");
//   document.write("calculated SI is" + eval(P * R * N) / 100 + "<br/>");
// }
// execute();

// function giveMessage(message) {
//    let userMsg = message;
//    function toUser (userName) {
//    let name = userName;
//    let greet = userMsg + name;
//    return greet;
//    }
//    userMsg = toUser ("Lulle");
//    return userMsg;
//    }
//    console.log(giveMessage("The world says hello:"));


// console.log("First Output: " + eval(2+4*5))


// console.log(Number("12ka4"))

let arr = [233, "hehe", 4.56]
console.log("Before: "+arr)
arr.push(45)
console.log("After: "+arr)
arr.pop()
console.log("After poping: "+arr)