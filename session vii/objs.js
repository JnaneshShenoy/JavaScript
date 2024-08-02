let emp = {
   id: 69,
   name: "John",
   salary: 50000
}

// for(key in emp){
//    console.log(key," : ",emp[key])
// }

// Object.keys(emp).forEach((key) => {
//    console.log(key," : ",emp[key])
// })

Object.values(emp).forEach((values)=>{
   console.log(values)
})


Object.entries(emp).forEach((arr)=>{
   console.log(arr[0], ' : ',arr[1])
})