// // // // console.log('Fundamental Part 2');

// // // // // Function - Declaration and Expression
// // // // console.log(`=== FUNCTIONS ===`);

// // // // function logger() {
// // // //   console.log("This function is working");
// // // // }

// // // // logger();
// // // // logger();
// // // // logger();

// // // // function fruitProcessor(apples, oranges) {
// // // //     console.log(apples, oranges);
// // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // //     return juice;
// // // // }

// // // // const appleJuice = fruitProcessor(5, 0);
// // // // console.log(appleJuice);

// // // // const appleOrangeJuice = fruitProcessor(2,4);
// // // // console.log(appleOrangeJuice);


// // // // //do not do this anymore
// // // // const juic1e1 =`Juice with 5 apples..`;
// // // // const juice2 =`Juioce with 3 apples...`;

// // // // //function expression
// // // // const calAge = function(birthYear) {
// // // //     return 2037 - birthYear;
// // // // }

// // // // const age1 = calAge(2000);
// // // // console.log(age1);

// // // // function calAge2 (birthYear, currentYear) {
// // // //     const age = currentYear - birthYear;
// // // //     return age;
// // // // }
// // // // const myage = calAge2(2000, 2025);
// // // // const someoneAge = calAge2(1995, 2025);

// // // // console.log(`I am ${myage} years old`);
// // // // console.log(`he is ${someoneAge} years old`);

// // // // console.log(calAge2(2000));

// // // // function introduce(firstName, lastName, age) {
// // // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // //   return introduction;
// // // // }

// // // // console.log(introduce("Jonas", "Schmedtmann", 46)); // All good
// // // // console.log(introduce("Sarah")); 
// // // // // Missing parameters become undefined

// // // // function calAge3(birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // function yearsUntilRetirement(birthYear, firstName) {
// // // //     const age = calAge3(birthYear);
// // // //     const retirement = 65 - age;

// // // //     if (retirement > 0) {
// // // //         return `$)firstName) retires in ${retirement} years`;
// // // //     } else {
// // // //         return `$(firstName) has already retired`;
// // // //     }
// // // // }




// // // // console.log(yearsUntilRetirement(1991, "Aiken"));
// // // // console.log(yearsUntilRetirement(1950, "Mark"));

// // // // // Global scope
// // // // const globalVar = "I am global";

// // // // function testScope() {
// // // //   // Function scope
// // // //   const localVar = "I am local";
// // // //   console.log(globalVar); // Can access global
// // // //   console.log(localVar); // Can access local
// // // // }

// // // // testScope();
// // // // // console.log(localVar); // Error! Can't access local from outside
// // // // console.log(globalVar); // Works fine


// // // // const userName = "Jonas"; // Global

// // // // function createWelcomeMessage(user) {
// // // //   const message = `Welcome back, ${user}!`; // Local to function
// // // //   const timestamp = new Date().toLocaleTimeString(); // Local to function

// // // //   return `${message} Current time: ${timestamp}`;
// // // // }

// // // // console.log(createWelcomeMessage(userName));
// // // // // console.log(message); // Error - message is local to function\


// // // // ////////////////////////////////////
// // // // // Coding Challenge #1

// // // // // Function to calculate average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //   return (score1 + score2 + score3) / 3;
// // // // }

// // // // // Function to check winner
// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // //     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
// // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // //     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
// // // //   } else {
// // // //     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
// // // //   }
// // // // }

// // // // // Test Data 1
// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // Test Data 2
// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // const student1Grade = 85;
// // // // const student2Grade = 92;
// // // // const student3Grade = 78;
// // // // // ... 27 more variables?

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // ////////////////////////////////////
// // // // // Arrays - Creation and Access
// // // // console.log("=== ARRAYS ===");

// // // // // Array creation
// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);

// // // // // Different data types in same array
// // // // const mixed = ["Jonas", 27, true, friends];
// // // // console.log(mixed);

// // // // // Alternative way (but literal notation is preferred)
// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);

// // // // //access array ekements
// // // // //zero based
// // // // //start at 0 to up, not start at 1 
// // // // console.log(grades[3]);
// // // // console.log(grades[0]);

// // // // console.log(grades.length);

// // // // console.log(grades[0]);
// // // // grades[0] = 99;
// // // // console.log(grades);
// // // // console.log(grades[0]);
// // // // console.log(grades[0]);

// // // // const calAge = function (birthYear){
// // // //     return 2025 - birthYear;
// // // // };

// // // // const ages = (calAge(2000), calAge(1995), calAge(1991));
// // // // console.log(ages);
// // // // ages[1] = calAge(1950);
// // // // console.log(ages);

// // // // //Array Methods - add elements

// // // // const friend = ["Michael", "Steven", "Peter"];

// // // // // Push - add to end
// // // // const newLength = friends.push("Jay");
// // // // console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// // // // console.log(newLength); // 4 (push returns new length)

// // // // // Unshift - add to beginning
// // // // friends.unshift("John");
// // // // console.log(friends);


// // // // //remove elements
// // // // const popped = friends.pop();
// // // // console.log(popped);
// // // // console.log(friends);

// // // // const shifted = friends.shift();
// // // // console.log(shifted);
// // // // console.log(friends);


// // // // //pop\
// // // // //shift

// // // // console.log(friends.indexOf("Michael"));
// // // // console.log(friends.indexOf("John"));

// // // // console.log(friends.includes("Michael"));
// // // // console.log(friends.includes("John"));

// // // // //array iteration - loop

// // // // for (let i = 0; i < friends.length; i++) {
// // // //     console.log(friends[i]);
// // // // }

// // // // // forEach method - modern approach
// // // // friends.forEach(function (friend, index) {
// // // //   console.log(`${index}: ${friend}`);
// // // // });

// // // // // Real-world example - grade processing
// // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;

// // // // for (let i = 0; i < grades.length; i++) {
// // // //     total += grades[i]; // fixed array access
// // // // }

// // // // const average = total / grades.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`); // fixed template literal

// // // // let passedCount = 0;
// // // // grades.forEach((grade) => {
// // // //   if (grade >= 70) passedCount++;
// // // // });
// // // // console.log(`${passedCount} out of ${grades.length} students passed`);

// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // // Function to calculate average
// // // // function calculateAverage(grades) {
// // // //   let total = 0;
// // // //   for (let i = 0; i < grades.length; i++) {
// // // //     total += grades[i];
// // // //   }
// // // //   return total / grades.length;
// // // // }

// // // // // Function to find highest grade
// // // // function findHighestGrade(grades) {
// // // //   let highest = grades[0];
// // // //   for (let i = 1; i < grades.length; i++) {
// // // //     if (grades[i] > highest) {
// // // //       highest = grades[i];
// // // //     }
// // // //   }
// // // //   return highest;
// // // // }

// // // // // Function to find lowest grade
// // // // function findLowestGrade(grades) {
// // // //   let lowest = grades[0];
// // // //   for (let i = 1; i < grades.length; i++) {
// // // //     if (grades[i] < lowest) {
// // // //       lowest = grades[i];
// // // //     }
// // // //   }
// // // //   return lowest;
// // // // }

// // // // // Function to count passing students
// // // // function countPassing(grades, passingGrade) {
// // // //   let count = 0;
// // // //   for (let i = 0; i < grades.length; i++) {
// // // //     if (grades[i] >= passingGrade) {
// // // //       count++;
// // // //     }
// // // //   }
// // // //   return count;
// // // // }

// // // // // Generate complete report
// // // // const average = calculateAverage(grades);
// // // // const highest = findHighestGrade(grades);
// // // // const lowest = findLowestGrade(grades);
// // // // const passing = countPassing(grades, 70);

// // // // console.log("=== GRADE REPORT ===");
// // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // console.log(`Highest: ${highest}`);
// // // // console.log(`Lowest: ${lowest}`);
// // // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // // ////////////////////////////////////
// // // // Arrays - Creation and Access
// // // console.log("=== ARRAYS ===");

// // // // Array creation
// // // const friends = ["Michael", "Steven", "Peter"];
// // // console.log(friends);

// // // // Different data types in same array
// // // const mixed = ["Jonas", 27, true, friends];
// // // console.log(mixed);

// // // // Alternative way (but literal notation is preferred)
// // // const years = new Array(1991, 1984, 2008, 2020);
// // // console.log(years);

// // // //array indexing start at 0
// // // console.log(friends[0]);
// // // console.log(friends[1]);
// // // console.log(friends[2]);

// // // //array length property
// // // console.log(friends.length);

// // // //Get last element
// // // console.log(friends.length);

// // // //Changing array element
// // // friends[1] = "Jay";
// // // console.log(friends);

// // // // Arrays can contain expressions and function calls
// // // const firstName = "Jonas";
// // // const jonas = [firstName, "Schmedtmann", 2037 - 1991];
// // // console.log(jonas);

// // // // Using our calcAge function from Hour 1
// // // const calcAge = function (birthYear) {
// // //   return 2037 - birthYear;
// // // };

// // // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // console.log(ages);


// // // //Exercise 1: Personal Arrays
// // // // 1. Create an array 'hobbies' with 3 of your hobbies
// // // const hobbies = ["Coding", "Basketball", "Gaming"];

// // // // 2. Create an array 'numbers' with 5 different numbers
// // // const numbers = [10, 25, 47, 89, 100];

// // // // 3. Log the first and last element of each array
// // // console.log("First hobby:", hobbies[0]);
// // // console.log("Last hobby:", hobbies[hobbies.length - 1]);
// // // console.log("First number:", numbers[0]);
// // // console.log("Last number:", numbers[numbers.length - 1]);

// // // // 4. Change the second element in hobbies array
// // // hobbies[1] = "Reading";
// // // console.log("Updated hobbies:", hobbies);

// // // // 5. Create an array that includes your name, age, and a boolean
// // // const aboutMe = ["Carl", 20, true];
// // // console.log("About me:", aboutMe);


// // // //Exercise 2: Fruit Basket
// // // //Practice array methods
// // // let fruits = ["Apple", "Banana"];

// // // // 2. Add "Orange" to the end of the array
// // // fruits.push("Orange");

// // // // 3. Add "Grape" to the beginning 
// // // fruits.unshift("Grape");
// // // console.log("After unshift:", fruits);


// // // // 4. Remove the last element
// // // fruits.pop();
// // // console.log("After pop:", fruits);

// // // // 5. Check if 'banana' is in the array
// // // const hasBanana = fruits.includes("banana");
// // // console.log("includes('banana'):", hasBanana);

// // // // 6. Find the index of 'grape'
// // // const grapeIndex = fruits.indexOf("grape");
// // // console.log("indexOf('grape'):", grapeIndex);

// // // // 7. Log the final array
// // // console.log("Final array:", fruits);

// // // ////////////////////////////////////
// // // // Array Iteration - Loops

// // // const friend = ["Michael", "Steven", "Peter"];

// // // // Traditional for loop
// // // for (let i = 0; i < friend.length; i++) {
// // //   console.log(friend[i]);
// // // }

// // // // For loop with processing
// // // const year = [1991, 2007, 1969, 2020];
// // // const age = [];

// // // for (let i = 0; i < years.length; i++) {
// // //   ages.push(2037 - years[i]);
// // // }
// // // console.log(ages)

// // // // forEach method - modern approach
// // // friends.forEach(function (friend, index) {
// // //   console.log(`${index}: ${friend}`);
// // // });

// // // // Arrow function version (even cleaner)
// // // friends.forEach((friend, index) => {
// // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // });

// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //   let sum = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     sum += grades[i];
// // //   }
// // //   return sum / grades.length;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   let highest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] > highest) {
// // //       highest = grades[i];
// // //     }
// // //   }
// // //   return highest;
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] < lowest) {
// // //       lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   let count = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if (grades[i] >= passingGrade) {
// // //       count++;
// // //     }
// // //   }
// // //   return count;
// // // }

// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);


// // ////////////////////////////////////
// // // The Array Problem
// // const jonasArray = [
// //   "Jonas",
// //   "Schmedtmann",
// //   2037 - 1991,
// //   "teacher",
// //   ["Michael", "Peter", "Steven"],
// // ];

// // console.log(jonasArray[0]); // What is this? firstName?
// // console.log(jonasArray[1]); // lastName?
// // console.log(jonasArray[2]); // age?

// // ////////////////////////////////////
// // // Objects - Creation with Object Literal Syntax
// // console.log("=== OBJECTS ===");

// // // Object literal syntax - curly braces create objects
// // const jonas = {
// //   firstName: "Jonas", // property: string value
// //   lastName: "Schmedtmann", // property: string value
// //   age: 2037 - 1991, // property: calculated value
// //   job: "teacher", // property: string value
// //   friends: ["Michael", "Peter", "Steven"], // property: array value
// // };
// // console.log(jonas);


// // // Dot notation - clean and readable
// // console.log(jonas.firstName); 
// // console.log(jonas.lastName); 
// // console.log(jonas.age); 
// // console.log(jonas.job); 
// // console.log(jonas.friends); 

// // // Bracket notation - uses strings
// // console.log(jonas["firstName"]); // Same result as dot notation
// // console.log(jonas["lastName"]);
// // console.log(jonas["age"]);

// // // Both notations work for modification
// // jonas.job = "programmer";
// // jonas["age"] = 35;
// // console.log(jonas);

// // // Objects can grow - add properties after creation
// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// // jonas.hasDriversLicense = true;
// // console.log(jonas);

// // // 1. Create a 'book' object with title, author, pages, and isRead properties
// // const book = {
// //   title: "The Hobbit",
// //   author: "J.R.R. Tolkien",
// //   pages: 310,
// //   isRead: true
// // };

// // // 2. Create a 'playlist' object with name, creator, songs array, and genre
// // const playlist = {
// //   name: "Chill Vibes",
// //   creator: "Carl",
// //   songs: ["Lofi Beats", "Ocean Waves", "Morning Sunrise"],
// //   genre: "Lo-Fi"
// // };

// // // 3. Access and log different properties using both dot and bracket notation
// // console.log(book.title);         // Dot notation
// // console.log(book["author"]);     // Bracket notation

// // console.log(playlist.name);      // Dot notation
// // console.log(playlist["creator"]); // Bracket notation

// // // 4. Add a new property to each object
// // book.publishedYear = 1937;
// // playlist.totalSongs = playlist.songs.length;

// // // 5. Modify an existing property in each object
// // book.isRead = false; // Changed from true to false
// // playlist.genre = "Chill / Relaxing"; // Changed from Lo-Fi

// // // Log the final objects
// // console.log("Updated Book:", book);
// // console.log("Updated Playlist:", playlist);

// // // Named, descriptive data - think entities
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };
// // // Objects can contain arrays, arrays can contain objects
// // const student = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], // Array inside object
// //   address: {
// //     // Object inside object
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); // 85
// // console.log(student.address.city); // 'New York'

// // // Objects can contain arrays, arrays can contain objects
// // const students = {
// //   name: "Sarah",
// //   grades: [85, 92, 78], // Array inside object
// //   address: {
// //     // Object inside object
// //     street: "123 Main St",
// //     city: "New York",
// //   },
// // };

// // console.log(student.grades[0]); 
// // console.log(student.address.city); 

// // const jonasAdvanced = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear; // Store result as new property
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// //       this.job
// //     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
// //   },
// // };

// // console.log(jonasAdvanced.calcAge()); // 46
// // console.log(jonasAdvanced.age); 
// // console.log(jonasAdvanced.getSummary());

// // // Create a 'calculator' object
// // const calculator = {
// //   // 1. Properties: num1, num2, operator
// //   num1: 10,
// //   num2: 5,
// //   operator: "+", // can be "+", "-", "*", or "/"

// //   // 2. Methods: add(), subtract(), multiply(), divide()
// //   add: function () {
// //     // Use 'this' to access the object's properties
// //     return this.num1 + this.num2;
// //   },

// //   subtract: function () {
// //     return this.num1 - this.num2;
// //   },

// //   multiply: function () {
// //     return this.num1 * this.num2;
// //   },

// //   divide: function () {
// //     // Handle divide-by-zero case
// //     if (this.num2 === 0) {
// //       return "Error: Division by zero";
// //     }
// //     return this.num1 / this.num2;
// //   },

// //   // 3. Method: calculate() that uses the operator to perform the right operation
// //   calculate: function () {
// //     if (this.operator === "+") return this.add();
// //     if (this.operator === "-") return this.subtract();
// //     if (this.operator === "*") return this.multiply();
// //     if (this.operator === "/") return this.divide();

// //     // If operator is invalid
// //     return "Invalid operator";
// //   },

// //   // 4. Method: getResult() that returns a formatted string
// //   getResult: function () {
// //     // Example: "10 + 5 = 15"
// //     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
// //   },
// // };

// // // -------------------
// // // Test your calculator
// // // -------------------

// // console.log(calculator.calculate());  // Runs the calculation → 15
// // console.log(calculator.getResult());  // Shows formatted result → "10 + 5 = 15"

// // // Try changing values:
// // calculator.num1 = 20;
// // calculator.num2 = 4;
// // calculator.operator = "*";

// // console.log(calculator.calculate());  // 80
// // console.log(calculator.getResult());  // "20 * 4 = 80"


// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // 1. Calculate age method
// //   calcAge: function () {
// //     const currentYear = new Date().getFullYear();
// //     this.age = currentYear - this.birthYear; // store as property
// //     return this.age;
// //   },

// //   // 2. Add friend method
// //   addFriend: function (name, status = "active") {
// //     this.friends.push({ name, status });
// //     return this.friends.length; // return new length
// //   },

// //   // 3. Get active friends count
// //   getActiveFriends: function () {
// //     return this.friends.filter(friend => friend.status === "active").length;
// //   },

// //   // 4. Toggle active status
// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //     return this.isActive; // return updated status
// //   },

// //   // 5. Generate profile summary
// //   getSummary: function () {
// //     this.calcAge(); // make sure age is calculated
// //     const totalFriends = this.friends.length;
// //     const activeFriends = this.getActiveFriends();

// //     return `
// //     👤 Profile Summary:
// //     ---------------------------
// //     Name: ${this.firstName} ${this.lastName}
// //     Age: ${this.age}
// //     Location: ${this.location}
// //     Status: ${this.isActive ? "Online ✅" : "Offline ❌"}
// //     Friends: ${totalFriends} (Active: ${activeFriends})
// //     Interests: ${this.interests.join(", ")}
// //     `;
// //   },
// // };

// // // -------------------
// // // Test your user profile system
// // // -------------------

// // console.log(user.getSummary()); // Show initial profile
// // user.addFriend("Alex", "active"); // Add new friend
// // user.toggleStatus(); // Change active status
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary()); // Show updated profile


// ////////////////////////////////////
// // Selecting DOM Elements

// // querySelector - works with any CSS selector
// const message = document.querySelector(".message"); // Select by class
// const button = document.querySelector("#btn"); // Select by ID
// const heading = document.querySelector("h1"); // Select by tag
// const input = document.querySelector(".guess"); // Select by class

// console.log(message);
// console.log(button);
// console.log(heading);

// // Different selector types
// document.querySelector(".className"); 
// document.querySelector("#idName"); 
// document.querySelector("tagName"); 
// document.querySelector('[type="text"]'); 
// document.querySelector("div p"); 

// // getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button); 

// // querySelectorAll - gets ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); 
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length);


// // -------------------------------
// // Practice selecting elements
// // -------------------------------

// // 1. Select the element with class 'guess' and log it
// const guessInput = document.querySelector(".guess");
// console.log("Guess Input:", guessInput);

// // 2. Select the element with ID 'btn' using both querySelector and getElementById
// const buttonQuery = document.querySelector("#btn"); // querySelector
// const buttonId = document.getElementById("btn");  // getElementById
// console.log("Are both methods selecting the same element?", buttonQuery === buttonById); // true

// // 3. Select all span elements and log the collection (NodeList)
// const allSpans = document.querySelectorAll("span");
// console.log("All Spans:", allSpans);

// // 4. Select the first span element and log its textContent
// const firstSpan = document.querySelector("span");
// console.log("First span text:", firstSpan.textContent);

// // 5. Experiment with different CSS selectors
// console.log("Select by tag <h1>:", document.querySelector("h1"));
// console.log("Select by class (.message):", document.querySelector(".message"));
// console.log("Select by ID (#btn):", document.querySelector("#btn"));
// console.log("Select descendant (div .score-value):", document.querySelector("div .score-value"));


// ////////////////////////////////////
// // Modifying Element Content

// const messages = document.querySelector(".message");

// // textContent - gets/sets just the text, no HTML
// console.log(message.textContent); // "Start interacting!"
// message.textContent = "Hello from JavaScript!";

// // innerHTML - includes HTML tags (more powerful but be careful)
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// // innerText - respects styling (what user actually sees)
// console.log(message.innerText);

// // Input elements use .value property, not textContent
// const inputs = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here"; 


// // -------------------------------
// // Practice content and style manipulation
// // -------------------------------

// // Select elements (renamed with "El" suffix to avoid conflict)
// const headingEl = document.querySelector("h1");
// const buttonEl = document.querySelector("#btn");
// const inputEl = document.querySelector(".guess");
// const messageEl = document.querySelector(".message");
// const scoreValueEl = document.querySelector(".score-value");

// // 1. Change h1 text to your name
// headingEl.textContent = "Carl Joshua Bernardo";

// // 2. Style the button
// buttonEl.style.backgroundColor = "blue";
// buttonEl.style.color = "white";
// buttonEl.style.padding = "10px 20px";
// buttonEl.style.border = "none";
// buttonEl.style.borderRadius = "5px";
// buttonEl.style.cursor = "pointer";

// // 3. Set placeholder
// inputEl.placeholder = "Type something cool...";

// // 4. HTML formatting in message
// messageEl.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// // 5. Style the score
// scoreValueEl.style.fontSize = "2rem";
// scoreValueEl.style.color = "green";
// scoreValueEl.style.fontWeight = "bold";

// const headingE1 = document.querySelector("h1");
// const inputE1 = document.querySelector(".guess");
// const buttonE1 = document.querySelector("#btn");
// const messageE1 = document.querySelector(".message");

// // Practice event listeners:
// // 1. Click event on h1
// headingE1.addEventListener("click", function () {
//   headingE1.style.color = "purple";
// });

// // 2. Character count display
// inputE1.addEventListener("input", function () {
//   const count = inputE1.value.length;
//   messageE1.textContent = `Character count: ${count}`;
// });

// // 3. Spacebar response
// document.addEventListener("keydown", function (event) {
//   if (event.code === "Space") {
//     messageE1.textContent = "Spacebar pressed!";
//   }
// });

// // 4. Hover effect
// const originalText = buttonE1.textContent;
// buttonE1.addEventListener("mouseover", function () {
//   buttonE1.textContent = "Hovering!";
// });
// buttonE1.addEventListener("mouseout", function () {
//   buttonE1.textContent = originalText;
// });

// // 5. Double-click event
// headingE1.addEventListener("dblclick", function () {
//   headingE1.textContent = "Double-clicked!";
//   headingE1.style.backgroundColor = "lightblue";
// });


// -------------------------------
// Game State
// -------------------------------
const gameState = {
  scores: [0, 0], // index 0 = Player 1, index 1 = Player 2
  target: 5,
  isGameOver: false,
};

// -------------------------------
// DOM Elements
// -------------------------------
const scoreElements = [
  document.querySelector("#score-1"),
  document.querySelector("#score-2"),
];
const playerElements = [
  document.querySelector(".player-1"),
  document.querySelector(".player-2"),
];

const btnAdd = document.querySelectorAll(".btn-add");
const btnReset = document.querySelector("#btn-reset");
const inputTarget = document.querySelector("#winning-score");
const targetText = document.querySelector(".target");
const statusText = document.querySelector(".status");
const winnerText = document.querySelector(".winner");
const winnerName = document.querySelector(".winner-name");

// -------------------------------
// Functions
// -------------------------------
function updateScores() {
  scoreElements.forEach((el, i) => {
    el.textContent = gameState.scores[i];
  });
}

function addPoint(player) {
  if (gameState.isGameOver) return;

  gameState.scores[player - 1]++;

  if (gameState.scores[player - 1] >= gameState.target) {
    gameState.isGameOver = true;
    showWinner(player);
  }

  updateScores();
}

function showWinner(player) {
  const loser = player === 1 ? 2 : 1;

  playerElements[player - 1].classList.add("winner");
  playerElements[loser - 1].classList.add("loser");

  winnerName.textContent = `Player ${player}`;
  winnerText.classList.remove("hidden");
  statusText.textContent = "Game Over!";
}

function resetGame() {
  gameState.scores = [0, 0];
  gameState.isGameOver = false;

  playerElements.forEach((el) => {
    el.classList.remove("winner", "loser");
  });

  updateScores();
  winnerText.classList.add("hidden");
  statusText.textContent = `First to ${gameState.target} wins!`;
}

function updateTarget() {
  gameState.target = parseInt(inputTarget.value);
  targetText.textContent = gameState.target;
  resetGame();
}

// -------------------------------
// Event Listeners
// -------------------------------
btnAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = parseInt(btn.dataset.player);
    addPoint(player);
  });
});

btnReset.addEventListener("click", resetGame);
inputTarget.addEventListener("change", updateTarget);

// Keyboard Shortcuts: "1", "2", "R"
document.addEventListener("keydown", (event) => {
  if (event.key === "1") addPoint(1);
  if (event.key === "2") addPoint(2);
  if (event.key.toLowerCase() === "r") resetGame();
});

// -------------------------------
// Initial Render
// -------------------------------
updateScores();
