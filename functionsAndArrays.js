// ARRAYS IN CLASS
/*
let numbers = [5, 7]; // array
numbers.push(10); // adds elements into numbers array
console.log(numbers); // prints array
console.log(numbers.length); // prints length of array
console.log(numbers[0]); // prints 5
numbers[10] = 51; // adds 51 to the 50th element, all elements in between will be undefined
for (let i = 0; i < numbers.length; i++) {
  console.log("[" + i + "] =" + numbers[i]); // i within brackets will print the element location and adding i instead of element with numbers runs through loop to print it all
}
let objects = ["Brittni", 32, new Date()];
for (let obj of objects) {
  console.log(obj);
}

let twoDimArrays = [ // two dimensional array
  [1, 2, 3],
  ["A", "B", "C"],
];
console.log(twoDimArrays[0]); // references the first array
console.log(twoDimArrays[1][2]); // references second array and element 3
*/

// FUNCTIONS IN CLASS
let number = 10;
console.log(number + " is even = " + (number % 2 == 0));
let number2 = 11;
console.log(number2 + " is even = " + (number2 % 2 == 0));

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(number + " is Even = " + isEven(number));

function isOdd(number) {
  return number % 2 !== 0;
}
console.log(number + " is Odd = " + isOdd(number));

let numberArray = [1, 2, 4, 6, 8, 9, 21];

for (let number of numberArray) {
  if (isEven(number)) {
    console.log(number); // calls just the even numbers from array
  }
}

function outputEvenNumbers(myNumbers) {
  for (let number of myNumbers) {
    if (isEven(number)) {
      console.log(number);
    }
  }
}
outputEvenNumbers(numberArray);
console.log("--------------------");
outputEvenNumbers([1, 43, 5, 78, 10, 434]); //prints even numbers based on additional function option above

// Write a method that will find the minimimal value in an array of integers
let theseNumbers = [73, 45, 7, 9, 10, 10, 11, 996, 13];

/**
 * Gets the minimum or lowest value from the array
 * @param {Array} values The values to search
 * @returns {Number} The minimum or lowest value found
 */

function getMinimumValue(values) {
  let minimum = undefined;
  // repeat until we've looked at all the numbers
  for (let i = 0; i < values.length; i++) {
    // look at the next number
    let current = values[i];
    // If I havene't seen the lowest number yet OR the current number is lower than the lowest number I've seen, set that as the lowest number
    if (minimum == undefined || current < minimum) {
      //set the current number as the lowest number
      minimum = current;
    }
  }
  return minimum;
}

let minimum = getMinimumValue(theseNumbers);
console.log("Minimum: " + minimum);

// ALTERNATE METHOD TO FIND MINIMUM
let thoseNumbers = [7, 5, 4, 3, 9];

function getMinimumValuesAgain(valuesAgain) {
  let minimumAgain = Math.min(thoseNumbers);
  console.log(minimumAgain);
}
let minimumAgain = Math.min(thoseNumbers);
console.log("Minimum: " + getMinimumValuesAgain(minimumAgain));

// Map method - transforms each element into something different

let fruits = ["apple", "banana", "orange"]; //new array

let slices = fruits.map(function sliceFruit(fruits, index) {
  //uses .map to create new array as defined by the function
  return "slice of " + fruits;
});

/* for (let slice of slices) {
  console.log(slice);
}
*/

//Shorter loop than for of loop above

slices.forEach(function (slice) {
  console.log(slice);
});

// Reduce method - takes multiple items and reduce down to single value

let mixFruitsFunc = function (previousValue, currentValue) {
  // reduce method passes in the previous value and current value hence the parameter names
  return previousValue + "+" + currentValue;
};

console.log(mixFruitsFunc("grape", "cherry"));

// apple+banana+orange
let mixedFruits = fruits.reduce(mixFruitsFunc);
console.log(mixedFruits);

let setOfNumbers = [1, 2, 3, 4, 5];
let total = setOfNumbers.reduce(function (previous, current) {
  return previous + current;
}, 0); // tells it start at 0
console.log(total);

// Filter method
let veggies = ["carrots", "lettuce", "broccoli"];

let search = "lettuce";

let results = veggies.filter(function (veggie) {
  //filter returns an array of items that matched function
  return veggie == search;
});
for (let result of results) {
  console.log(results); //
}

// Objects

let person = {
  // key/attribute name: value
  lastName: "Toporek",
  firstName: "Brittni",
  pets: ["Jack", "Stella", "Luna"],
  address: {
    street: "1234 ACME Way",
    state: "AZ",
    zipCode: 12345,
  },
  addresses: [
    { type: "Home", street: "321 Street Drive", state: "CA" },
    { type: "Work", street: "Microsoft Avenue", state: "CA" },
  ],
  age: 32,
};

console.log("Last Name = " + person.lastName); //pulls last name from object
console.log("First Name = " + person.firstName); //pulls first name from object
for (let address of person.addresses) {
  // loops through addresses in object
  console.log(address.type + ": " + address.street); // prints the type and street names in object under addresses
}

// for of vs for in loops

let names = ["Brittni", "Mike", "Ashlee", "Sonjia"];
//traditional for loop
for (let i = 0; i < names.length; i++) {
  let name = names[i];
  console.log("[INDEX] " + i + " " + name);
}

//for in loop will read indexes of elements
for (let name in names) {
  console.log("[IN] " + name);
  // output: [IN] 0
  // output: [IN] 1
  // output: [IN] 2
  // output: [IN] 3
}

//for of loop will read elements
for (let name of names) {
  console.log("[IN] " + name);
  // output: [IN] Brittni
  // output: [IN] Mike
  // output: [IN] Ashlee
  // output: [IN] Sonjia
}

// POST-CLASS CHALLENGES

//Challenge: Write the code necessary to populate an array that contains 50 numbers that are evenly divisible by 7.

const divisibleBySeven = []; // make array

for (let i = 1; i <= 50; i++) {
  // use for loop to increment numbers up to 50 times
  let divisors = i * 7; // create numbers that are multiples of 7
  divisibleBySeven.push(divisors); // push multiples of 7 into array
}
console.log(divisibleBySeven); // print new array
// Prints: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140, 147, 154, 161, 168, 175, 182, 189, 196, 203, 210, 217, 224, 231, 238, 245, 252, 259, 266, 273, 280, 287, 294, 301, 308, 315, 322, 329, 336, 343, 350]

//Challenge: Would you rather… get a penny doubled every day for 30 days, or $10,000 every day?
let penniesDoubled = 0.01 * 2;
let penniesForThirty = Math.pow(penniesDoubled) * 30;
let thousandsEveryday = 10000 * 30;

function wouldYouRather() {
  //function to run with if statement
  if (penniesForThirty < thousandsEveryday) {
    console.log("Get $10,000 everyday."); //prints this statement if pennies amount is less than thousands
  } else {
    console.log("Get a penny doubled everyday for 30 days."); //prints this statement if thousands amount is less than pennies
  }
}
wouldYouRather(); // returns Get a penny doubled everyday for 30 days.
