let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]); // Prints 6 (3rd position from 0, 1, 2, 3)
// print the last element in array1
console.log(array1[array1.length - 1]); // Prints 14
// add 16 and 3 to array1
array1.push(16, 3); // adds both numbers to array1 in order
console.log(array1); // prints entire array1 like this:
/* [1, 5, 6, 9, 10, 14, 16, 3]
0: 1
1: 5
2: 6
3: 9
4: 10
5: 14
6: 16
7: 3
*/

// sort the array, then print the 3rd element again
array1.sort();
console.log(array1);
console.log(array1[2]); //prints new third number from rearranged array below: 14
// did it change?
/* Yes it changed, it sorted in order of the digits as if they were alphabetical ( 1, 10, 14 == a, ab, ad)
[1, 10, 14, 16, 3, 5, 6, 9]
0: 1
1: 10
2: 14
3: 16
4: 3
5: 5
6: 6
7: 9
*/
/* A note on sorting numbers: By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana") because they sort alphabetically.
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect results when sorting numbers. */

// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push("clean", "grocery shopping", "homework");
console.log(myTodoList);

// remove the second item in the array (2ND ITEM WILL BE 1 BECAUSE 0, 1, 2)
let removedElement = myTodoList.splice(1, 1);
console.log(myTodoList); // results will be 'clean', 'homework' (removes 'grocery shopping')

// create another array, yourTodoList, and add two todo items
let yourTodoList = [];
yourTodoList.push("laundry", "dishes");
console.log(yourTodoList);

// create another array, ourTodoList
let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList); // prints ['clean', 'homework', 'laundry', 'dishes']

// sort the following array from Z-A
//---Nothing listed to follow and nothing in solution. Below code is from arrays open class
const grads = [];
function gradList(graduates) {
  graduates.push("Mary", "Steven", "Eddie"); // adds these names to the array graduates
  return graduates.sort().reverse(); // sorts the names in alphabetical order and Tells function to return this method
}
console.log(gradList(grads));

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its anything else, print "Passed argument must be a boolean, string, or number"
function reverse(parameter1) {
  //   console.log(typeof parameter1);
  if (typeof parameter1 === "boolean") {
    return !parameter1;
  } else if (typeof parameter1 === "string" || typeof parameter1 === "number") {
    return parameter1.toString().split("").reverse().join(""); // four methods to converts input to string, converts/separates each character, reverses all characters, then joins them all together
  } else {
    console.log("Passed argument must be a boolean, string, or number");
  }
}

console.log(reverse("Stella"));

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
// ****The reverse function and addingMachine function are missing information.
function addingMachine() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let number = arguments[i];
    console.logInumber;
    sum += number;
    // 0= 0 + 1
    // 1 = 1 + 2
    // 3 =
  }
}
// create a function to bake a pie

let ingredient1 = "crust";
let ingredient2 = "apples";
let ingredient3 = "sugar";

function bakePie(i1, i2, i3) {
  //placeholder
  console.log("We need: ", i1);
  console.log("We need: ", i2);
  console.log("We need: ", i3);
}

bakePie(ingredient1, ingredient2, ingredient3); //baking the pie

// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
let grossInvoiced;
let profitMargain;
function myBonus() {
  grossInvoiced = 100000;
  profitMargain = 0.1;
  return grossInvoiced * profitMargain;
}
console.log("My bonus will be: " + myBonus());

// create and array or numbers

let myNumbers = [10, 100, 200, 500];

let sum = 0; //starts number at 0 before adding
for (let i = 0; i < myNumbers.length; i++) {
  // starts count process at 0 location, numbers.length sets to stop when it gets to the lenth of the array, and ++ increases each count by 1
  console.log(myNumbers[i]); // prints the loop to check it

  sum = sum + myNumbers[i];
  // 0 = 0 + 10
  // 10 = 10 + 100
  // 110 = 110 + 200
  // 310 = 310 + 500
}
console.log("sum", sum); // prints "sum ____"
