// JavaScript Fundamentals - Part 1
// We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 -10);


// //First Part
// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// let lastName = "Sarah";
// let myCurrentJob = "teacher";
// let PIZ = 3.14;

// const country = "Portugal";
// const language = "Portugese";
// const population = 10;

// let ageNow = 25;
// ageNow = 26;

// console.log("=== DATA TYPES ===");
// let age1 = 23;
// console.log(age);
// console.log(typeof age1);

// let firstName1 = "Jonas";
// console.log(firstName1);
// console.log(typeof firstName1);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


// Second Part
// Basic Operators
// console.log("=== BASIC OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations;");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15/3);
// console.log("Experimentation: ", 2 ** 3);


// //String Concat
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old.");

// // Assignment Operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x*= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);   // fixed: was logging 2 instead of x

// x ++; 
// console.log("After x++:", x);

// x --;
// x --;
// console.log("After x-- twice:", x);


// // Comparison Operators
// console.log("=== COMPARISON OPERATORS");

// console.log("Age comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);


// const isFullAge1 = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge1);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);


// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);
// console.log(ageJonas > ageSarah);


// //Operator Precedence
// console.log("=== Operator Precedence ===");

// // ⚠️ FIX: renamed variables to avoid redeclaration error
// const now2 = 2037;
// const ageJonas2 = now2 -1991;
// const ageSarah2 = now2 - 2018;

// console.log(now2 - 1991 > now2 - 2018);

// let a,b;
// a = b = 25 - 10 - 5;
// console.log(a,b);

// const averageAge = (ageJonas2 + ageSarah2) / 2;
// console.log(ageJonas2, ageSarah2, averageAge);


// // Your code here:
// // 1. Calculate BMIs
// // 2. Create markHigherBMI variable
// // 3. Log results to console

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiMark2 = massMark / (heightMark * heightMark);

// const bmiJohn = massJohn / heightJohn ** 2;
// const bmiJohn2 = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log("Mark's bmi is higher than John:" + markHigherBMI);


// // Test Data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark21 = massMark2 / heightMark2 ** 2;
// const bmiMark22 = massMark2 / (heightMark2 * heightMark2);

// const bmiJohn21 = massJohn2 / heightJohn2 ** 2;
// const bmiJohn22 = massJohn2 / (heightJohn2 * heightJohn2);

// const markHigherBMI2 = bmiMark21 > bmiJohn21;
// console.log("Mark's bmi is higher than John:" + markHigherBMI2);





// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);


// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3}`);


// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear1 = 2012;

// let century;
// if (birthYear1 <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); // 21


// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));


// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }


// if (height !== undefined) {
//   console.log("Height is defined");
// }



// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // 2. Create markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// // 3. Log results to console
// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);
// console.log("Is Mark's BMI higher than John's?", markHigherBMI);

// // Your if/else statement here:
// // Compare BMIs and create intelligent messages
// // Use template literals for beautiful output

// //Intelligent message using if/else + template literals
// if (markHigherBMI) {
//   console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
// }

//Type Conversion Coercion

//type conversion manual
const inputYear = "1991"
console.log(Number(inputYear),inputYear);

console.log(Number(inputYear), + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);


console.log(String(23), 23);
console.log(typeof String(23)); 

// type coercion(automatic)
console.log("I am " + 23 + " years old"); 
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 

// Can you guess what these will output?
let n = "1" + 1; // What do you think?
n = n - 1; // What about now?
console.log(n);

console.log(2 + 3 + 4 + "5"); // Try to guess!
console.log("10" - "4" - "3" - 2 + "5"); // This one's tricky!

//output
// 10
// 95
// 15


//Excerise 1
// Predict the output, then test:
console.log("5" + 2); // Your guess: "52" ?
console.log("5" - 2); // Your guess: 3 ?
console.log("5" * 2); // Your guess: 10 ?
console.log("5" / 2); // Your guess: 2.5 ?


// Explicit Conversions 
const userAge = "25"; // Convert to number
const userScore = 95; // Convert to string

// Conversion
const ageAsNumber = Number(userAge);        // 25 (number)
const scoreAsString = String(userScore);    // "95" (string)

// Output results
console.log(typeof ageAsNumber, ageAsNumber);     // number 25
console.log(typeof scoreAsString, scoreAsString); // string "95"

//Exercise 2
//  Fixed Calculator 
const num1 = Number(prompt("First number:"));   // Convert to number
const num2 = Number(prompt("Second number:"));  // Convert to number
const sum = num1 + num2;                        // Proper addition
console.log(`Sum: ${sum}`);


// Equality Operators: == vs. ===

const ageNow = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

// Let's see what happens:
console.log("18" === 18); // false - different types
console.log("18" == 18); // true - coercion happens
console.log(18 === 18); // true - same type and value

// Why == can be dangerous
console.log("0" == 0); // true (string converted)
console.log(0 == false); // true (boolean converted)
console.log("0" == false); // true (both converted!)
console.log(null == undefined); // true (special case)

// Weird cases that cause bugs
console.log("" == 0); // true
console.log("   " == 0); // true (spaces trimmed!)


// Convert explicitly, then compare strictly
const favourite = Number(prompt("What's your favourite number?")); 
// prompt() returns a string, so wrap it in Number() ✅

console.log(favourite);
console.log(typeof favourite); // Should log "number"

// Strict equality checks (=== checks both value AND type)
if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Not-equal strict operator
if (favourite !== 23) {
  console.log("Why not 23?");
} 


//Exercise 1: Equality Detective

// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess:false ?
console.log(5 == "5"); // Your guess:true ?
console.log(true === 1); // Your guess:false ?
console.log(true == 1); // Your guess:true?
console.log(false === 0); // Your guess:false ?
console.log(false == 0); // Your guess: true?

//Exercise 2: Fix the Login System
// === Fixed Login System ===
const username = prompt("Username:");
const password = prompt("Password:");

// Use strict equality checks
if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
} 

//Exercise 1: Club Entry System
// === Club Entry System ===
const age = 19;      // Try different values
const hasID = true;  // Try different values
const isVIP = false; // Try different values

// Logic: Entry allowed if (age >= 21 AND hasID) OR isVIP
if ((age >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

//Exercise 2: Weather Advisor
//  Weather Advisor 
const temperature = 25; // Celsius
const isRaining = false;
const isWindy = true;

// Advice rules
if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
  console.log("Perfect day!");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
  console.log("Good day!");
} else {
  console.log("Stay inside!");
}

//  Coding Challenge #4 

const bill = 275; // Test with 275, 40, and 430

// Step 1: Tip calculation using ternary operator
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Step 2: Template literal for beautiful output
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
