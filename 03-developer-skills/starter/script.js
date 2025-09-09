// // // Remember, we're gonna use strict mode in all scripts now!
// // 'use strict';

// // // Professional Development Environment Setup

// // console.log("=== Development Environment Setup ===");

// // // Create some messy code - don't worry about formatting yet
// // const messyCode = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult";
// //   } else {
// //     return "Hello " + name + ", you are a minor";
// //   }
// // };

// // console.log("Current messy code example:", messyCode("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // ////////////////////////////////////
// // // Extension Installation Test

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);

// // ////////////////////////////////////
// // // Prettier Configuration Test

// // // This code has terrible formatting - Prettier will fix it!
// // const prettierTest = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   skills: ["JavaScript", "React", "Node.js"],
// //   isActive: true,
// // };

// // const messyFunction = function (x, y, z) {
// //   if (x > 0 && y > 0) {
// //     return x + y + z;
// //   } else {
// //     return 0;
// //   }
// // };

// // const messyArrow = (items) => {
// //   return items.map((item) => {
// //     return item.toUpperCase();
// //   });
// // };

// // console.log(
// //   "Before Prettier formatting - this code works but looks unprofessional"
// // );

// // // Create this with terrible formatting:
// // const studentTest = {
// //   firstName: "your-name",
// //   skills: ["HTML", "CSS", "JavaScript"],
// //   experience: "beginner",
// //   goals: ["become-developer", "build-projects"],
// // };

// // const testFunc = function (data) {
// //   for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// //   }
// // };

// // ////////////////////////////////////
// // // Live Server Testing

// // // Test 1: Basic live reload
// // let liveServerTest = "Initial message - change #1";
// // console.log("Live Server test:", liveServerTest);

// // // Test 2: Time-based updates
// // const timeStamp = new Date().toLocaleTimeString();
// // const updateCount = 1;

// // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // Test 3: Function testing
// // function demonstrateLiveReload() {
// //   const randomColor = ["red", "blue", "green", "purple", "orange"][
// //     Math.floor(Math.random() * 5)
// //   ];
// //   const message = `Live Server rocks! Random color: ${randomColor}`;

// //   console.log(message);
// //   return message;
// // }

// // demonstrateLiveReload();

// // // Student Exercise: Add this function and test live reload
// // function showCurrentTime() {
// //   const now = new Date().toLocaleTimeString();
// //   console.log("Current time:", now);
// //   return now;
// // }

// // showCurrentTime();

// // ////////////////////////////////////
// // // Code Snippets Testing

// // // Type 'cl' then press Tab - it should expand to console.log();
// // console.log("Testing snippet functionality - cl + Tab created this!");

// // // Type 'func' then press Tab - it should create a function template
// // function testSnippets() {
// //   console.log("Function created with snippet - func + Tab!");
// //   return "Snippets working perfectly!";
// // }

// // testSnippets();

// // // Type 'arrow' then press Tab - it should create an arrow function template
// // const snippetTest = (message) => {
// //   console.log(`Arrow function from snippet: ${message}`);
// //   return message;
// // };

// // snippetTest("Snippets save so much typing time!");

// // ////////////////////////////////////
// // // Environment Setup Verification

// // console.log("🎉 Professional Development Environment Complete!");
// // console.log("✅ Prettier: Automatic code formatting");
// // console.log("✅ Live Server: Automatic browser refresh");
// // console.log("✅ Snippets: Fast code generation");
// // console.log("✅ Extensions: Enhanced productivity");
// // console.log("Ready for professional JavaScript development!");

// // // Calculate time savings
// // function calculateTimeSavings() {
// //   const dailyConsoleLogs = 50;
// //   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
// //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// //   const monthlySavings = dailySavings * 22; // work days

// //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// //   return { daily: dailySavings, monthly: monthlySavings };
// // }

// // calculateTimeSavings();

// "use strict";

// console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

// /*
// The Reality of Learning to Code:
// - Most people expect: Learn syntax → Become developer
// - Actual process: Learn basics → Feel confident → Try real project → 
//   Get stuck everywhere → Question everything → Keep pushing → 
//   Gradual improvement → Success
// - Key insight: Problem-solving matters more than syntax memorization
// */

// console.log(
//   "Key insight: Professional developers think systematically, not just code"
// );

// console.log("Goal: beginner to professional problem-solver");

// console.log("4-Step Framework: Understand → Divide → Research → Implement");


// // Handles one or multiple arrays of temps
// const calcTempAmplitudeUniversal = function (...arrays) {
//   // Merge all arrays into one
//   const temps = [].concat(...arrays);
//   console.log("Merged Temps:", temps);

//   let max = -Infinity;
//   let min = Infinity;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log("Max:", max, "Min:", min);
//   return max - min;
// };

// //  Works with 1 array
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// console.log("Amplitude:", calcTempAmplitudeUniversal(temperatures));

// //  Works with 2 arrays
// const array1 = [3, 5, 1];
// const array2 = [9, 0, 5];
// console.log("Amplitude (2 arrays):", calcTempAmplitudeUniversal(array1, array2));

// //  Works with more than 2 arrays
// const array3 = [-10, "error", 20];
// console.log("Amplitude (3 arrays):", calcTempAmplitudeUniversal(array1, array2, array3));

// function demonstrateArrayMax(numbers) {
//   // Method 1 - Using Math.max with spread operator (from research)
//   const method1 = Math.max(...numbers);

//   // Method 2 - Using for loop (traditional approach)
//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   // Method 3 - Using reduce method (functional approach)
//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log("Multiple approaches from research:", maxResults);

// function reverseStringMethods(str) {
//   // Method 1 - Most common Stack Overflow solution
//   const method1 = str.split("").reverse().join("");

//   // Method 2 - Manual loop approach (educational)
//   let method2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   // Method 3 - Modern spread operator approach
//   const method3 = [...str].reverse().join("");

//   return { method1, method2, method3 };
// }

// // Test our Stack Overflow research results
// const reverseResults = reverseStringMethods("hello");
// console.log("Stack Overflow research results:", reverseResults);

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);
//   const multiple = array1.concat(array2, array3);

//   // Verify concat doesn't modify original arrays
//   console.log("Original array1 unchanged:", array1);

//   return { simple, multiple };
// }

// const concatResults = demonstrateConcat();
// console.log("MDN documentation applied:", concatResults);



// function calculateAverageScore(scores) {
//   let total = 0;

//   for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }

//   return total / scores.length;
// }

// // Test the fixed function
// const testScores = [85, 92, 78, 96, 88];
// const correctResult = calculateAverageScore(testScores);
// console.log("Correct result:", correctResult); 


// function demonstrateConsoleDebugging(data) {
//   console.group("Debugging Session");

//   console.log("Input data:", data);

//   // Handle null separately
//   if (data === null) {
//     console.error("Error: Data is null!");
//     console.groupEnd();
//     return 0;
//   }

//   if (typeof data !== "object") {
//     console.warn("Warning: Expected object/array, got", typeof data);
//   }

//   // Display as table if object/array
//   if (Array.isArray(data) || typeof data === "object") {
//     console.table(data);
//   }

//   console.groupEnd();

//   // Return something useful
//   if (Array.isArray(data)) {
//     return data.length;
//   } else if (typeof data === "object") {
//     return Object.keys(data).length;
//   } else {
//     return 0; // non-object values
//   }
// }

// // Test console debugging with different data types
// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: "John", age: 30, city: "New York" };
// const stringData = "Hello";
// const numberData = 42;
// const nullData = null;

// console.log("Array:", demonstrateConsoleDebugging(arrayData));    // 5
// console.log("Object:", demonstrateConsoleDebugging(objectData));  // 3
// console.log("String:", demonstrateConsoleDebugging(stringData));  // 0
// console.log("Number:", demonstrateConsoleDebugging(numberData));  // 0
// console.log("Null:", demonstrateConsoleDebugging(nullData));      // 0


// function stepThroughDebugging(numbers) {
//   debugger; // Pause execution if DevTools is open

//   console.log("Input array:", numbers);

//   const result = numbers.reduce(
//     (acc, current, index) => {
//       console.log(`Processing index ${index}: value = ${current}`);

//       if (Number.isFinite(current)) {
//         acc.sum += current;
//         acc.count++;
//       } else {
//         console.error(`Invalid number at index ${index}:`, current);
//       }

//       return acc;
//     },
//     { sum: 0, count: 0 } // initial accumulator
//   );

//   const average = result.count > 0 ? result.sum / result.count : 0;

//   console.log("Final results:", {
//     sum: result.sum,
//     count: result.count,
//     average,
//   });

//   return average;
// }

// // ✅ Test debugging function
// const mixedNumbers = [10, 20, "error", 30, null, 40];
// const debugResult = stepThroughDebugging(mixedNumbers);
// console.log("Debug session result:", debugResult);



// function calculateAverageScoreFixed(scores) {
//   // STEP 5 - PREVENT: Add input validation
//   if (!Array.isArray(scores)) {
//     console.error("Invalid input: scores must be an array");
//     return 0;
//   }

//   if (scores.length === 0) {
//     console.warn("Empty array provided");
//     return 0;
//   }

//   let total = 0;
//   let validCount = 0;

//   for (let i = 0; i < scores.length; i++) {
//     const v = scores[i];
//     // Accept only finite numbers
//     if (Number.isFinite(v)) {
//       total += v;
//       validCount++;
//     } else {
//       console.warn(`Skipping non-number at index ${i}:`, v);
//     }
//   }

//   if (validCount === 0) {
//     console.warn("No valid numeric values found.");
//     return 0;
//   }

//   return total / validCount;
// }

// // Comprehensive debugging verification
// console.group("Debugging Verification Tests");

// // Test 1 - Normal case
// const normalScores = [85, 92, 78, 96, 88];
// const normalResult = calculateAverageScoreFixed(normalScores);
// console.log("Normal case result:", normalResult); // 87.8

// // Test 2 - Edge case with invalid data
// const mixedScores = [85, "invalid", 92, null, 78];
// const mixedResult = calculateAverageScoreFixed(mixedScores);
// console.log("Mixed data result:", mixedResult); // 85

// // Test 3 - Error case with invalid input
// const errorResult = calculateAverageScoreFixed("not an array");
// console.log("Error case result:", errorResult); // 0

// // Test 4 - Edge case with empty array
// const emptyResult = calculateAverageScoreFixed([]);
// console.log("Empty array result:", emptyResult); // 0

// console.groupEnd();

// console.log("Systematic debugging process successfully applied!");
// console.log(
//   "All bugs identified, isolated, investigated, fixed, and prevented"
// );

console.log("Ready to tackle complex problems using systematic approaches");
console.log("Challenge: Build solutions that work under pressure")

////////////////////////////////////
// MAIN CHALLENGE: Weather Forecast String Builder (polished)

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("...");
    return;
  }

  const body = arr
    .map((temp, i) => `${temp}°C in ${i + 1} day${i === 0 ? "" : "s"}`)
    .join(" ... ");

  console.log(`... ${body} ...`);
}

// Tests
printForecast(data1); 
printForecast(data2); 
console.log("Weather forecast formatter working correctly!");


////////////////////////////////////
// Time Tracking App - Weekly Analyzer

function analyzeWorkWeek(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error("Input must be an array of 7 numbers (hours per day).");
  }

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // 1. Total hours
  const totalHours = dailyHours.reduce((sum, h) => sum + h, 0);

  // 2. Average daily hours (based on 7 days)
  const avgDailyHours = totalHours / 7;

  // 3. Day with most hours
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const mostHoursDay = weekDays[maxDayIndex];

  // 4. Days worked (non-zero)
  const daysWorked = dailyHours.filter(h => h > 0).length;

  // 5. Full-time check
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    avgDailyHours,
    mostHoursDay,
    daysWorked,
    isFullTime,
  };
}

// Test the solution
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log("Work week analysis:", analysis);

console.log("Challenge completed under time pressure!");

// Optimized version with error handling
function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error("Invalid input: Expected array of 7 daily hours");
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter((day) => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log("Optimized analysis:", optimizedAnalysis);


function legacyForecastFunction(temperatures) {
  // Multiple bugs hidden in this code!
  var result = "";
  for (var i = 1; i <= temperatures.length; i++) {
    result = result + temperatures[i] + " degrees in day " + i + ", ";
  }
  return result;
}

// Test the buggy function to see what goes wrong
const testData = [15, 18, 22, 19];
console.log("Buggy function output:", legacyForecastFunction(testData));

//fixed debugging and enhanced
// Completely fixed and enhanced version
function enhancedForecastFunction(temperatures, options = {}) {
  // Step 5 - PREVENT: Add comprehensive input validation
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  // Step 4 - FIX: Use modern JavaScript with proper declarations
  const { unit = "°C", separator = "...", includeIndex = true } = options;

  // Step 4 - FIX: Correct loop bounds and string building
  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  // Step 5 - PREVENT: Return clean result without trailing separator
  return separator + result.slice(0, -separator.length);
}

// Test the enhanced function with multiple configurations
console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log(
  "Enhanced function (custom):",
  enhancedForecastFunction(testData, {
    unit: "°F",
    separator: " | ",
    includeIndex: true,
  })
);

console.log("🎯 Complete developer skills successfully applied!");
console.log("Legacy code debugged, fixed, and enhanced systematically");