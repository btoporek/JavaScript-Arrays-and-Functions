// ARRAYS LAB

/* Array Fun: Using the given function, gradList, add the following names to the passed array: "Mary", "Steven", "Eddie". 
Then, sort the remaining students from Z-A, and return the modified array.
*/
// First, use .sort to put in order. Then, use .reverse to reverse that order.
// MY ANSWER:
function gradList(graduates) {
  // Previous written
  //write your code here
  graduates.push("Mary", "Steven", "Eddie"); // adds these names to the array graduates
  graduates.sort();
  {
    // sorts the names in alphabetical order
    return graduates.reverse(); // Tells function to return this method
  }
}
console.log(gradList(grads)); // Previous written

// INSTRUCTOR ANSWER: (instructor adds a variable to define reverse and them returns that variable)
/* function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
}

console.log(gradList(grads)); */

/* Write a Function to Reverse an Array: 
Write a function called reverseArray that accepts an array as an argument. 
Within the function, reverse the array. Return the reversed array.
*/
// MY ANSWER:
const input = ["Hello", "Goodbye", "Eddie"];
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(input));

// INSTRUCTOR ANSWER:
// same as above

/* Grocery List Array: Create an array called groceryList and add "granola", "milk", and "eggs" */
// MY ANSWER:
const groceryList = ["granola", "milk", "eggs"];

//ALTERNATE ANSWER with .push
const groceryList2 = [];
groceryList2.push("granola", "milk", "eggs");

// INSTRUCTOR ANSWER:
// same as first example

/* Write a Function to Sort an Array: 
Write a function called sortArray that accepts an array as an argument. 
Within the function, sort the array alphabetically or numerically. Return the sorted array.
*/
// MY ANSWER:
const input2 = [1, 2, 3, 4, 5]; // example array to use
function sortArray(array) {
  return array.sort();
}
console.log(sortArray(input2)); // example print

// INSTRUCTOR SOLUTION:
// same as above

/* Add an Element to the Student List Array: Given the array studentList, add the name "Mary". */
// MY ANSWER:
let studentList2 = ["Allen", "Jessica", "Eddie", "Sarah"]; // already inputted code
//my code below
studentList.push("Mary");

// already inputted code
function checkArray() {
  return studentList2.sort();
}
console.log(checkArray());

/* Replace an Element of An Array: Given the attendanceList array, replace the first element in the array with "Steven".*/
// sample array to test
const attendanceList = ["Eddie", "Sarah", "Jessica", "Joey"];
// my code
attendanceList.splice(0, 1, "Steven");
// already inputted code
console.log(attendanceList);

//INSTRUCTOR CODE:
attendanceList[0] = "Steven"; // alternate method to replace an element without using .splice

/* Remove an Element from the Student List Array: Given the array studentList, remove the name "Eddie". */
// already inputted code
let studentList = ["Allen", "Jessica", "Eddie", "Sarah"];
// my code
studentList.splice(2, 1);
// already inputted code
function checkArray(array) {
  return array.sort();
}
console.log(checkArray(studentList));

// INSTRUCTOR CODE:
// same as above

/* Write a Function to Print the Elements of an Array: 
Write a function called printArray that accepts an array as an argument, 
and contains a loop that will print each value of the passed in array.
*/
//sample array to use
const input3 = ["Eddie", "Sarah", "Jessica", "Joey"];
// instructor code:
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// already written code
printArray(input3);

/* Write a Function to Join Two Arrays: 
Write a function called joinArrays that accepts two arrays as arguments, 
joins the two arrays and returns the new array.
*/
// sample arrays to use
const firstArray = ["Phillip", "Eddie", "Jason", "Brook"];
const secondArray = ["Henry", "Peter", "Julie"];
// my code
function joinArrays(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray;
  // already inputted print
}
console.log(joinArrays(firstArray, secondArray));

// END ARRAYS OPEN CLASS
