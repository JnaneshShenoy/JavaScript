// function fn(callback) {
//    setTimeout(callback, 2000);
// }

// function Callback() {
//    console.log("output after 2s");
// }

// fn(Callback);

// //pm3
// function asyncOp(delay, output) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(output);
//       resolve();
//     }, delay);
//   });
// }

// async function fn2() {
//   await asyncOp(3000, "Operation 1 complete after 3s");
//   await asyncOp(2000, "Operation 2 complete after 2s");
//   await asyncOp(1000, "Operation 3 complete after 1s");
// }

// fn2();

// Pgm 1 pt2
// class Person {
//    constructor(name, age, country) {
//        this.name = name;
//        this.age = age;
//        this.country = country;
//    }

//    display() {
//        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
//    }
// }

// const person1 = new Person('Jnanesh', 20, 'India');
// const person2 = new Person('Shawny', 25, 'USA');

// person1.display();
// person2.display();

// pgm 2 pt2
// class BankAccount {
//   constructor(accNo, balance) {
//     this.accNo = accNo;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited: Rs.${amount}. New Balance: Rs.${this.balance}`);
//   }

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Error: Insufficient balance!!!");
//     } else {
//       this.balance -= amount;
//       console.log(`Withdraw: Rs.${amount}.\n Balance: Rs.${this.balance}`);
//     }
//   }

//   displayBalance() {
//     console.log(`Account Number: ${this.accNo}, Balance: Rs.${this.balance}`);
//   }
// }

// const acc1 = new BankAccount("451781201", 3000);
// const acc2 = new BankAccount("150420999", 500);

// acc1.deposit(200);
// acc2.deposit(300);
// acc1.withdraw(500);
// acc2.withdraw(1000);
// acc1.displayBalance();
// acc2.displayBalance();
