'use strict';

//ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//cached selectors (single source of truth)
const bodyEl = document.body;
const messageE1 = document.querySelector('.message');
const numberE1 = document.querySelector('.number');
const scoreE1= document.querySelector('.score');
const highscoreE1 = document.querySelector('.highscore');
const guessInputE1 = document.querySelector('.guess');
const checkBtnE1 = document.querySelector('.check');
const againBtnE1 = document.querySelector('.again');

//Ui Helpers
function setMessage(text) {
  messageE1.textContent = text;
}
function setNumber(value) {
  numberE1.textContent = value;
}
function setScores(value) {
  scoreE1.textContent = value;
}
function setHighscore(value) {
  highscoreE1.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputE1.disabled = disabled;
  checkBtnE1.disabled = disabled;
}
function clearInput() {
  guessInputE1.value = '';
}


// Game State & Reset

let secretnumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let scores = START_SCORE;
let highscores = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScores(scores);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Initial render
renderInitialUI();

checkBtnE1.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnE1.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});


// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnE1.addEventListener('click', function () {
  guessInputEl.focus();
});


// // Game State Variables
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// //Debbuging
// console.log('Secret Number:', secretNumber);
// let score = 20;
// let highscore = 0;

// document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent = highscore;

// console.log('Game state initialized');


// //playerName attempts, gameActive
// let playerName = 'Cj';
// let attempts = 0;
// let gameActive = true;


// console.log('Player:', playerName);
// console.log('Attempts:', attempts);
// console.log('Game active:', gameActive);


// //Basic Game Logic

// document.querySelector('.check').addEventListener('click', function () {
// //code here
// console.log('Check button clicked!');

// const guess = Number(document.querySelector('.guess').value);
// console.log(guess);
//  if (guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent =
//       'Number must be between 1 and 20!';
//     return; // stop here
//   }
// if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//     return; // stop here
//   }

// if (guess === secretNumber) {
//     console.log('Correct guess');
//     document.querySelector('.message').textContent = '🎉 Correct Number!'; 
//     document.querySelector('.number').textContent = secretNumber;
//     document.body.style.backgroundColor = 'green';


//     if (score > highscore){
//         highscore = score;
//         document.querySelector('.highscore').textContent = highscore;
//         document.querySelector('.message').textContent = '🎉You have won!!';
//         document.querySelector('.guess').disabled = true;
//         document.querySelector('.check').disabled = true;
//         document.body.style.backgroundColor = 'green';
//     }
//     } else if (guess > secretNumber) {
//     console.log('Too high!');
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//     if (score < 1){
//         document.querySelector('.message').textContent = '💥 You lost!';
//         document.querySelector('.number').textContent = secretNumber;
//         //disabled guess input type 
//         document.querySelector('.guess').disabled = true;
//         //disabled button click
//         document.querySelector('.check').disabled = true;
       
//     }
//   } else if (guess < secretNumber) {
//     console.log('Too low!');
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//      document.body.style.backgroundColor = 'red';
//  }

// });

// ////////////////////////////////////
// // Game restart - reset everything for new game

// document.querySelector('.again').addEventListener('click', function () {
//   // Reset game state
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log('Your new secret number after restart', secretNumber);

//   // Reset display
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';

//   // Re-enable input and button
//   document.querySelector('.guess').disabled = false;
//   document.querySelector('.check').disabled = false;
//   document.body.style.backgroundColor = '';
// });



