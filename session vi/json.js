const data = {
   "fname" : "Jnanesh",
   "lname" : "Dcosta",
};

// stringify
let text = JSON.stringify(data);
console.log(text);

// parsing
let s = JSON.parse(text)
console.log(s)



// Object literal
// Constructor

let name="Arnold";
let age=65;
let country= 'USA';
let obj={
name: name,
age:age,
country:country
};
console.log(obj);


let dynamicProp = "age"
let personDet = {
   name: "Rahul",
   country: "India",
   [dynamicProp]: 25
}
console.log(personDet)