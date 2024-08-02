// const person = {
//    fname : 'Jnanesh',
//    lname : 'Dcosta',
//    get fullName(){
//       return `${this.fname} ${this.lname}`
//    },
//    set fullName(name){
//       const parts = name.split(" ")
//       this.fname = parts[0]
//       this.lname = parts[1]
//    }
// };

// person.fullName = "Jnanesh Shenoy"
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.fullName)




let person = {
   fname : 'Jnanesh',
   lname : 'dcosta'
};

function Person(fname,lname) {
   this.fname = fname;
   this.lname = lname;
}

let person1 = new Person()
let person2 = new Person('Karan','Dsouza')

console.log(person)
console.log(person1)
console.log(person2)
