let mystring = "aeroplane";
let mystring1 = "flying";

console.log("character at first index", mystring[1]);

let index = mystring.indexOf("plane");
console.log("index position of string", index);

let ind = mystring.indexOf("water");
console.log("index position of string", ind);

let charat = mystring.charAt(6);
console.log("character at index 6", charat);

let splitarry = mystring.split("a");
console.log("string split after char a", splitarry);

let substr = mystring.substring(1, 5);
console.log("substring from 1 to 5", substr);

console.log("length of the string is", mystring.length);

console.log("uppercase", mystring.toUpperCase());

console.log("lowercase", mystring.toLowerCase());

console.log("concatenated string is", mystring.concat(mystring1));

let username = "john doe";
console.log(username.includes("ndo"));

// fuck you jnanesh