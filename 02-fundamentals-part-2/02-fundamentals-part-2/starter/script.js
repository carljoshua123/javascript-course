console.log('Fundamental Part 2');

// Function - Declaration and Expression
console.log(`=== FUNCTIONS ===`);

function logger() {
  console.log("This function is working");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


//do not do this anymore
const juic1e1 =`Juice with 5 apples..`;
const juice2 =`Juioce with 3 apples...`;

//function expression
const calAge = function(birthYear) {
    return 2037 - birthYear;
}

const age1 = calAge(2000);
console.log(age1);

function calAge2 (birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}
const myage = calAge2(2000, 2025);
const someoneAge = calAge2(1995, 2025);

console.log(`I am ${myage} years old`);
console.log(`he is ${someoneAge} years old`);

console.log(calAge2(2000));

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
console.log(introduce("Sarah")); 
// Missing parameters become undefined

function calAge3(birthYear) {
    return 2025 - birthYear;
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `$)firstName) retires in ${retirement} years`;
    } else {
        return `$(firstName) has already retired`;
    }
}




console.log(yearsUntilRetirement(1991, "Aiken"));
console.log(yearsUntilRetirement(1950, "Mark"));

// Global scope
const globalVar = "I am global";

function testScope() {
  // Function scope
  const localVar = "I am local";
  console.log(globalVar); // Can access global
  console.log(localVar); // Can access local
}

testScope();
// console.log(localVar); // Error! Can't access local from outside
console.log(globalVar); // Works fine


const userName = "Jonas"; // Global

function createWelcomeMessage(user) {
  const message = `Welcome back, ${user}!`; // Local to function
  const timestamp = new Date().toLocaleTimeString(); // Local to function

  return `${message} Current time: ${timestamp}`;
}

console.log(createWelcomeMessage(userName));
// console.log(message); // Error - message is local to function\


////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Extra Test Data 3 (to match your Koalas win example)
scoreDolphins = calcAverage(50, 60, 70);   // avg 60.0
scoreKoalas = calcAverage(90, 85, 79);     // avg 84.7
console.log(checkWinner(scoreDolphins, scoreKoalas));







