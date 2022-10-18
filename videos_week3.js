// Intro to Arrays
/*
let customerNames = [];
customerNames.push('Sam Smith'); // Pushes name into above array; placment 0
customerNames.push('Tommy Guns'); // Pushes name into above array; placment 1
*/
// console.log(customerNames[1]); // Prints Tommy Guns

/* for(let i = 0; i < customerNames.length; i++){
    console.log(customerNames[i]); // Prints all customer names
}
*/

/* for(name of customerNames) {
    console.log(name); // Also prints customer names; cleaner code
}
*/

// Intro to Functions
/*
function myFunction (){ // myFunction is the name you give it
    for (let i = 0; i < 100; i++){ 
        console.log(i);             // for loop conditions put in function
    }
}

myFunction(); // Executes the function we created above; prints 0-99
*/

function createFullName(firstName, lastName) { // code in parentheses are the parameters acting as placeholders
    console.log(firstName + ' ' + lastName); //makes the function print to the console the full name when executed
}

createFullName('Tom', 'Sawyer'); // Function declaration: strings in parentheses are the argument that goes into the parameters

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName; /* passes the values when calling/executing the function, 
    but will not print the info to the console without console.log */  
}

// Since we used return instead of console.log, we need to use console.log when executing the function if we want it printed to the console
console.log(createFullName('Jack', 'Smith')); // Now prints the names in the function to the console

// ***Use descriptive names/verbs when naming functions***

// Intermediate Array Methods : Map, reduce, for each, filter, splice

// Map method invokes a function for each element of an array and then creates a new array from the values of each iteration called from the function
 let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas']; // original array
 let lengths = names.map(function(element){ // using variable to assign to map method with direction for new array (element is a type of parameter)
    return element.length;
 }); // takes a function and calls that function for each element in the array, whatever it returns is an element in the new array
console.log(lengths); /* prints to the console: a new array listed as length of names (in this case 5) and each element of the array 
is the length of each name listed by their placement number
Example of what prints:
Array(5)
0: 3
1: 3
2: 4
3: 5
4: 8
length: 5
*/

/* Reduce method is useful for taking all the values in an array and reducing them down to one value.
-The one/final value is a result of a reducer function we pass in as an argument. 
-Reduce methods are good for when you want to perform an operation on all elements in an array that results in a single value. 
Ex: summing up all values, finding the average of a set of values, or reutnring on a object with properties composed of multipe objects. */

// Ex: finding the sum of the above lengths array

let sum = lengths.reduce(function(accumulator, currentValue){ // added reduce function to above lengths array with mapping; included parameters
    return accumulator + currentValue; /* combines parameters to return the sum of that value; accumulator is used to accumulate all values together 
    from previous execution, in this case it was lengths; currentValue is the current value or element in the array */
}, 10); // adding this 10 makes an inital value, telling the array to start at 10 instead of the default number (in this case 0)
// **Adding the above initial value will change the answer printed to the console to 33 instead of 23


console.log(sum); // prints final sum of all the lengths of names; adds the numbers from above (3+3+4+5+8); prints 23

// For each method: invokes a function for each element in the array but does not return a new array like the map method
// Examples using for each method: If we wanted to log out each element in the array, we could use a loop OR the for each method (see below)

names.forEach(function(element){ // element a type of parameter
    console.log(element); // prints out each element in the names array, in this example it will print out all the names from above
});

// Filter method allows us to invoke a function that returns a boolean value on each element in an array
// Additionally, filter returns a new array for element that returns true; allowing us to filter out specific elements that pass out boolean expression.
// Example of filter method below:

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
console.log(evens); //Prints out results, which should only be names that have even lengths
/* RESULTS:
(2) ['Eric', 'Nicholas']
0: "Eric"
1: "Nicholas"
length: 2
*/

// Splice method can be used to alter the contents of an array by adding, modifying, or removing elements of an array at a specific location.
// A common use of the splice method is to remove an element from an array. See example below:
let removedElement = names.splice(1, 1); /* creates variable removedElement and assigns the splice method to the names array 
 the 1, 1 represents the location to start at and how many elements to remove; 
 First parameter 1 = start at Tom; Second parameter 1 = remove 1 element or name) */
console.log(removedElement); // prints to the console the spliced method from above named as removeElement; prints like an array with []

// Intro to Objects
/* In JavaScript, an object is a standalone entity, with properties and type. 
Compare it with a DVD player, for example. A DVD player is an object, with properties. 
A DVD player has a color, a design, size, weight, what DVD is loaded in it, etc. 
The same way, JavaScript objects can have properties, which define their characteristics. */
// Object literals make up an object's property and functionality or methods by wrapping a comma-separated list of key value pairs inside {}.
// Example: If we wanted to create an object literal representation of our DVD player.

let dvdPlayer = { // Inside {} are key value pairs.
    // The keys are the names of the properties of the object. Ex: height, width, depth, etc.
    // The values are the values of the property of the function of each method. Ex: 3, 18, 12, etc.
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan', // All properties need to be separated by commas except the last one.
    printDVDName: function() { // This is the method to provide some functionality.
        console.log(this.dvdName) // The .this allows us to call the variable as a property inside the object since it isn't defined outside the object.
    }
};

console.log(dvdPlayer.depth); // By adding the . to dvdPlayer, it pulls up the list of properties named above for use; Prints 12
dvdPlayer.printDVDName(); // Prints Mulan
/* The above code allows us to group pieces of data and functionality together to make it more relevant to what we're doing, 
instead of random variables floating around. It is related data we can use.*/
// Important note about function vs method. Function is a standalone piece of functionality. A method is a function that belongs to an object.

// JS comes with its own objects, in addition to use being able to make objects. Use MDN to find different objects for use and how to code them.

// Equality vs Identity Operators
// Equality operator: == impicitly converts types to see if there is a match in value, even though they are different types of operands (ex: number vs string)
console.log(2 == '2'); // prints true
// Identity operator: === only returns true if operands have the same value AND are the same type (ex: number vs number)
console.log(2 === '2'); // prints false
// **It is best practice to use the identity operator, unless there is a need to use the equality operator.
