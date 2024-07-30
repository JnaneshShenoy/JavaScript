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


function greet(choice){
   let msg = choice();
   console.log(msg)
}

let message= function(){
   return "Heyya !!!"
}
greet(message)