//FUNCTIONS
/* function ADDNAME(PARAMETERS) {
/    ADD CONDITIONS OR RETURN STATEMENT (IF ELSE, RETURN, CONSOLE.LOG, ETC.)
}
 CALL FUNCTION: name(ARGUMENT FOR PARAMETER);
 OR
 PRINT FUNCTION AND CALL: console.log(name(ARGUMENT FOR PARAMETER));

 ES6 introduces new ways of handling arbitrary parameters through default 
 parameters which allow us to assign a default value to a parameter in 
 case no argument is passed into the function.
*/

const plantNeedsWater = function(day){ // set variable with anonymous function (day)
    if(day === 'Wednesday'){ // if statement declaring if the day is Wednesday
        return true; // direction to return the statement true is matching above
    }else {
        return false; // direction to return the statement to false if not matching if statement
    }
};
console.log(plantNeedsWater('Wednesday')); // prints to the console AND alls the function to execute response

// Alternate code for writing function using arrow function syntax
const catNeedsMedicine = (day) => { // function code using arrow syntax - removes the word function
    if(day === 'Monday' || day === 'Wednesday'){ // if statement saying day is Monday or Wednesday
        return true // direction to return function as true
    }else{
        return false; // direction to return function as false
    }
}
console.log(catNeedsMedicine('Wednesday')); // prints to console and calls function

// Concise body arrow functions
// Zero parameters and two or more parameters need parentheses
// Only one parameter does not needs parentheses

const dogGoesToDaycare = day => day === 'Friday' ? 'yes':'no';
// single-line block: variable (const dogGoesToDaycare) ; paramater (day); function (=>); condition (day === 'Friday' ?) ; implicit return (true:false;)
console.log(dogGoesToDaycare('Sunday'));

// Final practice to test independence

// function statement multi-lines
function nextStep(status){
    if (status === 'done'){
      return 'Go to OpenClass.'
    }else{
      return 'Keep practicing.'
    }
  } 
  console.log(nextStep('done'));
  // Prints/returns: Go to OpenClass.
  
  // function statement with arrow syntax and ternary operator
  const areYouSure = answer => answer === 'yes' ? 'Go to OpenClass.' : 'Keep practicing.'
  
  console.log(areYouSure('yes'));
  // Prints/returns: Go to OpenClass.
  
  // Single-line function with arrow syntax and if/else statement
  const areYouReallySure = response => {
    if (response === 'Yes, I\'ve got this!'){
      return 'Okay, go to OpenClass.'
    } else {
      return 'You still need more practice.'
    }
  }
  console.log(areYouReallySure('Yes, I\'ve got this!'));
  // Prints/returns: Okay, go to OpenClass.

  // OPENCLASS
   /* Function isBlue: Create a function named isBlue. 
 - isBlue will take one parameter, 
 - and it will return true if it is passed "blue", 
 - otherwise it will return false.

 > The passed value can be "blue" with any of the letters capitalized as well.
 (i.e."Blue", "bLue", "BLUE", etc…) 
 > All forms of the word blue should return true. 
 > Use toLowerCase() on the passed value to accomplish this. 
 For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.
 */
let a = 'BLUE'
// MY ANSWER
  function isBlue(color){
    if(color == 'blue' || color == 'bLUe'){ // includes blue and bLUe
        return true;
    }else if(color == 'BLUE' || color == 'Blue'){ // includes BLUE and Blue
        return true;
    }
    else{
        return false;
    }
}
console.log(isBlue(a));

// INSTRUCTOR EXAMPLE USING .toLowerCase
function isBlue(color){
    return color.toLowerCase() === "blue"; // shortcut to lowercase different versions
}

console.log(isBlue(a));

/* Function checkout: Create a function named checkout that accepts 2 parameters named cardBalance and price. 
If the price is more than the card balance, return false; otherwise, return the new card balance.
*/
let card = 50
let cost = 25
// MY ANSWER
function checkout(cardBalance, price){
    if(price > cardBalance){
        return false;
    }else {
        return cardBalance - price; // new cardBalance would mean you need to subtract price from cardBalance
    }
}

//do not change below, used for testing purposes
console.log(checkout(card, cost)); // example uses already defined a, b; substituted my own for test

// INSTRUCTOR ANSWER
// Instructor response is same as mine. :)

// MASTERY REACHED : ADDITION PRACTICE BELOW

/* Function findCircumference: 
Create a function named findCircumference that returns the circumference of a circle if given the radius.
*/

// MY ANSWER USING SINGLE-LINE FUNCTIOM WITH ARROW SYNTAX
const findCircumference = radius =>  2 * Math.PI * radius;

console.log(findCircumference(7));

/* INSTRUCTOR ANSWER
function findCircumference(radius){
    return Math.PI * (2 * radius);
}
console.log(findCircumference(7));
*/

/* Function sumOfTwo: 
Write a function named sumOfTwo that takes two numbers as parameters and returns the sum.
*/

// MY ANSWER
let num1 = 761
let num2 = 564

function sumOfTwo(){
    return num1 + num2;
}

console.log(sumOfTwo(num1, num2))

// INSTRUCTOR ANSWER
// same as mine :)

/* Function speakFriend: Write a function named speakFriend that takes one parameter. 
Return the string "Access Denied". 
But, if the passed in value is "Mellon", return "Enter"
*/

// MY ANSWER USING SINGLE-LINE FUNCTION WITH ARROW SYNTAX
const speakFriend = parameter => parameter == 'Mellon' ? 'Enter' : 'Access Denied';

console.log(speakFriend('Awesome'));

// INSTRUCTOR ANSWER USING MULTI-LINE FUNCTION SYNTAX
/* function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    } 
    return "Access Denied";
}
console.log(speakFriend('Awesome'));
*/

/*  Function loopUntilX: 
Write a function named loopUntilX that takes one parameter. 
Within the function, write a loop that loops as many times as the passed in value, starting at 0. 
Within the loop, print the number of iterations to the console. 
Once the loop is done, return true.
*/

function loopUntilX(parameter){
    for(let i = 0; i < parameter; i++){
        console.log(i);
    }
    return true;
}
    console.log(loopUntilX(5));