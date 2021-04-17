// DOM Elements
const guessFormEl = document.getElementById('guess-form');
const inputFieldEl = document.getElementById('inputField');
const messageFieldEl = document.getElementById('messageField');
const messageTextsEl = document.getElementById('messageTexts');

// Add event listener to the form
guessFormEl.addEventListener('submit', processGame);

let userResponse = parseInt(inputFieldEl.value);
let allowedAttempt = 3;
let attemptCount = 1;
let message = '';
let min = 1;
let max = 10;

// Randomize the max/min and get a random number as a correct answer
let randomized = Math.floor(Math.random(max - min + 1) * max + 1);
console.log(randomized, typeof(randomized));

// Process game
function processGame(e) {
  e.preventDefault();
  console.log(userResponse);
console.log(typeof(userResponse));
if(userResponse === randomized) {
  console.log("Right! You won!");
} else {
  console.log("Wrong! It is not the number!");
}
}