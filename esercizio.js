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

// Given an object person with the properties name and age, use object destructuring to create variables name and age that hold the values from the object.

// let Person = {
//   name: "Robi",
//   age: 20
// }

// let {name, age} = Person;

// console.log(name);
// console.log(age);

// Given a nested object student with properties info and grades, use object destructuring to create variables name, age, and grade that hold the values from the nested object.
// const student = {
// 	info: { name: "Bob", age: 25 },
// 	grades: { math: 95, science: 89 },
// };

// let {
// 	info: { name, age },
// 	grades: { math, science },
// } = student;

// console.log(name);
// console.log(age);
// console.log(grades.math);
// console.log(grades.science);

// Given an array colors with three elements, use array destructuring to create variables firstColor, secondColor, and thirdColor that hold the values from the array.
// const colors = ["red", "green", "blue"];

// let [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// Create a function called sum that accepts any number of arguments and returns the sum of those arguments. Use the rest parameter to collect the arguments.

// function sum(...parameters) {
//   let result = 0;
//   for (parameter of parameters) {
//     sum += parameter;
//   }
//   return sum;
// }

// console.log(sum(5, 3, 8));

// Write a function filterOutOdds that accepts any number of arguments and returns an array containing only the even numbers. Use the rest parameter to collect the arguments and the spread operator to construct the new array.

// function filterOutOdds(...args) {
// 	return args.filter(number => number % 2 == 0);
// }

// console.log(filterOutOdds(2, 3, 5, 6, 1));

// Given two arrays, arr1 and arr2, create a new array mergedArray using the spread operator that combines the elements of both arrays.

// function mergedArray(arr1, arr2) {
// 	let mergedArray = [...arr1, ...arr2];
// 	return mergedArray;
// }

// let arr1 = [3, 5, 7];
// let arr2 = [2, 4, 6];
// console.log(mergedArray(arr1, arr2));


// Given two objects, obj1 and obj2, create a new object mergedObject using the spread operator that combines the properties of both objects. If there are overlapping properties, the values from obj2 should overwrite the values from obj1.

// let obj1 = {
// 	prop1: "value1",
// 	prop2: "value2",
// }

// let obj2 = {
// 	prop2: "value3",
// 	prop4: "value4",
// };

// let mergedObject = { ...obj1, ...obj2 };

// console.log(mergedObject);