// Create an object with information about your favorite movie (title, director, year, genre, etc.). Use a `for...in` loop to log each property and its value.

// const favoriteMovie = {
// 	title: "Film",
// 	director: "John Doe",
// 	year: 2003,
// 	genre: "Science Fiction",
// 	runtime: "180 minutes",
// };

// for (let property in favoriteMovie) {
// 	console.log(`Property: ${property}, Value: ${favoriteMovie[property]}`);
// }

// Create an object representing a bank account with properties like balance and account holder's name. Add methods for depositing and withdrawing money from the account.

// const bankAccount = {
// 	balance: 500,
//   holdersName: "John Doe",
  
// 	depositMoney(money) {
// 		this.balance += money;
// 	},

// 	withdrawMoney(money) {
// 		this.balance -= money;
// 	},
// };

// bankAccount.depositMoney(500);
// console.log(bankAccount.balance);

// bankAccount.withdrawMoney(200);
// console.log(bankAccount.balance);


// Create two objects with similar properties. Write a function that compares the two objects and checks if they have the same properties and values.

// const object1 = {
//   name: "Robi",
//   surname: "Chiriac",
//   age: 20,
// }

// const object2 = {
// 	name: "Robi",
// 	surname: "Chiriac",
// 	age: 20,
// };

// function checkEqual(obj1, obj2) {
//   let isEqual = true;
//   for (key in obj1) {
//     if ((obj1.key !== obj2.key)||(obj1[key]!==obj2[key])) {
//       isEqual = false;
//       break;
//     }
//   }
//   return isEqual;
// }

// console.log(checkEqual(object1, object2));