// let name = "Jnanesh";
// let res = `The name is ${name}`;
// console.log(res);

// let n = 724275765425n
// console.log(typeof(n));


// console.log(1 == 1)
// console.log(1+5)

// let a = Symbol("haha bish")
// console.log(a.description)

// let student = {
//    fname : "jnanesh",
//    lname : "kumar",
//    age : 22
// }

// console.log(student.age)


// let employee = {
//    eid : 1,
//    ename : "Suresh Kumar",
//    age : 25,
//    salary : 50000,
//    joindate : "20.10.2021"
// }

// console.log(employee)

// let arr = [1,54,4,58,78]
// // arr.unshift(4)
// console.log(arr)


const movies = {
   name : "RRR",
   lang : "Tamil",
   rating : 8.8
};

// const msg = `Movie Name: ${movies.name}\nLanguage: ${movies.lang}\nRating: ${movies.rating}`;
// // alert(msg)
// console.log(msg)
// document.write(msg)

function moviedetails(movie){
   const doc = document.getElementById("movie")
   doc.innerHTML = `Movie Name: ${movie.name}<br/>Language: ${movie.lang}<br/>Rating: ${movie.rating}`
}

moviedetails(movies)