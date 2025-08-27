// console.log('Fundamental Part 2');

// // Function - Declaration and Expression
// console.log(`=== FUNCTIONS ===`);

// function logger() {
//   console.log("This function is working");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);


// //do not do this anymore
// const juic1e1 =`Juice with 5 apples..`;
// const juice2 =`Juioce with 3 apples...`;

// //function expression
// const calAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calAge(2000);
// console.log(age1);

// function calAge2 (birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     return age;
// }
// const myage = calAge2(2000, 2025);
// const someoneAge = calAge2(1995, 2025);

// console.log(`I am ${myage} years old`);
// console.log(`he is ${someoneAge} years old`);

// console.log(calAge2(2000));

// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
// console.log(introduce("Sarah")); 
// // Missing parameters become undefined

// function calAge3(birthYear) {
//     return 2025 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calAge3(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `$)firstName) retires in ${retirement} years`;
//     } else {
//         return `$(firstName) has already retired`;
//     }
// }




// console.log(yearsUntilRetirement(1991, "Aiken"));
// console.log(yearsUntilRetirement(1950, "Mark"));

// // Global scope
// const globalVar = "I am global";

// function testScope() {
//   // Function scope
//   const localVar = "I am local";
//   console.log(globalVar); // Can access global
//   console.log(localVar); // Can access local
// }

// testScope();
// // console.log(localVar); // Error! Can't access local from outside
// console.log(globalVar); // Works fine


// const userName = "Jonas"; // Global

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`; // Local to function
//   const timestamp = new Date().toLocaleTimeString(); // Local to function

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));
// // console.log(message); // Error - message is local to function\


// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;
// // ... 27 more variables?

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// ////////////////////////////////////
// // Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// // Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// // Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //access array ekements
// //zero based
// //start at 0 to up, not start at 1 
// console.log(grades[3]);
// console.log(grades[0]);

// console.log(grades.length);

// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades);
// console.log(grades[0]);
// console.log(grades[0]);

// const calAge = function (birthYear){
//     return 2025 - birthYear;
// };

// const ages = (calAge(2000), calAge(1995), calAge(1991));
// console.log(ages);
// ages[1] = calAge(1950);
// console.log(ages);

// //Array Methods - add elements

// const friend = ["Michael", "Steven", "Peter"];

// // Push - add to end
// const newLength = friends.push("Jay");
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength); // 4 (push returns new length)

// // Unshift - add to beginning
// friends.unshift("John");
// console.log(friends);


// //remove elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);


// //pop\
// //shift

// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("John"));

// console.log(friends.includes("Michael"));
// console.log(friends.includes("John"));

// //array iteration - loop

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// // forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Real-world example - grade processing
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     total += grades[i]; // fixed array access
// }

// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`); // fixed template literal

// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
