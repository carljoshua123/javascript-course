'use strict';

console.log('Game Setup Ready!');

//====== DOM ELEMENT SELECTION - the Founddation
console.log('Dom Element Selection');

const messageEl = document.querySelector('.message');
console.log(messageEl);

console.log(messageEl.textContent);

//messageEl.textContent = 'Hello from Javascript!';

// access score class name 

const scoreEl = document.querySelector('.score');

console.log('Score Element:',scoreEl);

const numberEl = document.querySelector('.number');
//numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');

console.log('Current highscore:',highscoreEl.textContent);

const guessEl = document.querySelector('.guess');

//guessEl.value = 10;

console.log('Guess Element:',guessEl.value);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Debbuging
console.log('Secret Number:', secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized');


//playerName attempts, gameActive
let playerName = 'Cj';
let attempts = 0;
let gameActive = true;


console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);


//Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
//code here
console.log('Check button clicked!');

const guess = Number(document.querySelector('.guess').value);
console.log(guess);

if (guess === secretNumber) {
    console.log('Correct guess');
    document.querySelector('.message').textContent = '🎉 Correct Number!'; 
    document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
 }

});

