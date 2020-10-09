// Retrieve the DOM elements
const resultDisplayEl = document.getElementById("resultDisplay");
const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");
const rollBtnEl = document.getElementById("rollBtn");

// Create images array
const diceImagesArray = ["./ludo-images-2/dice-1.png", "./ludo-images-2/dice-2.png", "./ludo-images-2/dice-3.png", "./ludo-images-2/dice-4.png", "./ludo-images-2/dice-5.png", "./ludo-images-2/dice-6.png"]

// Add event listener to the button
rollBtnEl.addEventListener("click", diceResult);

// Create the diceResult function
function diceResult() {
  for(i = 1; i <= diceImagesArray.length; i++ ) {

let player1Roll = diceImagesArray[Math.floor(Math.random() * diceImagesArray.length)];
player1El.innerHTML = ` <img src=${player1Roll} /> `;
console.log(diceImagesArray[i]);

let player2Roll = diceImagesArray[Math.floor(Math.random() * diceImagesArray.length)];
player2El.innerHTML = ` <img src=${player2Roll} /> `;
  }
}