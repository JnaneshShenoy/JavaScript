// let colors = ['red','green','blue']
// let extra = ['one','two','three']

// let rgb = [...colors,...extra]

// console.log(rgb)

// const circle={
//    radius:10
// };
// const coloredCircle={
//    ...circle,
//    styles : {
//       color:'black'
//    }
// };

// console.log(coloredCircle);

// clone = {
//    ...coloredCircle
// }

// // clone.styles = "red"
// console.log(clone)


// const og = {
//    name : "Ganesh",
//    address : {city : "Manglore",zip : "575010"}
// }

// const shallowcopy = { ...og}
// shallowcopy.address.city = "new manglore"
// console.log(og.address.city)

// const deepcopy = JSON.parse(JSON.stringify(og))
// deepcopy.address.city = "old manglore"

// console.log(deepcopy.address.city)
// console.log(og.address.city)


//deconstructing
// let carids = [1, 2, 3];
// let [car1, car2, car3] = carids;

// console.log("deconstructed array elements", car1, car2, car3);
// let car={id:123, model:2012};
// let {id, model}=car;
// console.log('deconstructed object', id, model);

// let newcar=car;
// console.log(newcar);
// let newcar={...car,color:'red'}