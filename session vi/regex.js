// // Regex constructor
// let myPat = new RegExp(pattern,modifiers);

// // Regex literal
// let myPat1 = /pattern/modifiers;

// [abc]= 
// [0-9]=
// (a|b)=

// let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
// let phonenumberpattern = new RegExp("?=[0-9]{10}");

// let emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
// let emailString = prompt("Enter email");

// if (!emailPattern.test(emailString)) {
//   alert("Email id is invalid. It should contain @ and a valid domain.");
// } else {
//   alert("Email is valid");
// }

let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
//let phonenumberpattern-new RegExp("?=[0-9]{10}");
//let passwordpattern=new RegExp("(?=.*[0-9]) (a-zA-Z)(?=.*[@#$%!^&*+_])");
let emailString = prompt("enter email");
if (emailPattern.test(emailString)) {
alert("email is valid");
} else {
alert("email id is invalid it should contain @ and com");
}