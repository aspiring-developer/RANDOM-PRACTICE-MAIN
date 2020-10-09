// Retrieve DOM elements
const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");
const rollBtnEl = document.getElementById("rollBtn");
const resultDisplayEl = document.getElementById("resultDisplay");


// Create dice-roll images array
const diceImageArray = ["./ludo-images/dice-1.png", "./ludo-images/dice-2.png", "./ludo-images/dice-3.png", "./ludo-images/dice-4.png", "./ludo-images/dice-5.png", "./ludo-images/dice-6.png"]

// Add event listener to the button
rollBtnEl.addEventListener("click", rollDice);

// Create rollDice function
function rollDice() {
for (i = 1; i<=diceImageArray.length; i++) {
let player1Rolled = diceImageArray[Math.floor(Math.random() * diceImageArray.length)];
//console.log(player1Rolled);
player1El.innerHTML = ` <img src='${player1Rolled}' /> `;

let player2Rolled = diceImageArray[Math.floor(Math.random() * diceImageArray.length)];
//console.log(player2Rolled);
player2El.innerHTML = ` <img src='${player2Rolled}' /> `;

if(player1El.innerHTML > player2El.innerHTML) {
  resultDisplayEl.innerHTML = "The Winner is: PLAYER 1";

} if (player2El.innerHTML > player1El.innerHTML){
  resultDisplayEl.innerHTML = "The Winner is: PLAYER 2";
}
else {
  resultDisplayEl.innerHTML = "There is a tie in between player 1 and player 2."
}

}

}
