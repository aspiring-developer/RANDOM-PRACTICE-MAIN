// Retrieve DOM elements
const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");
const rollBtnEl = document.getElementById("rollBtn");

// Create dice-roll images array
const diceImageArray = ["./ludo-images/dice-1.png", "./ludo-images/dice-2.png", "./ludo-images/dice-3.png", "./ludo-images/dice-4.png", "./ludo-images/dice-5.png", "./ludo-images/dice-6.png"]

// Add event listener to the button
rollBtnEl.addEventListener("click", rollDice);

// Create rollDice function
function rollDice() {
for (i = 1; i<= diceImageArray.length; i++) {

  let player1Tern = Math.ceil(Math.random() * diceImageArray.length );

  console.log(player1Tern);
  //player1Tern = diceImageArray[0];


//player1El.innerHTML = ` <img src='${diceImageArray[i]}' /> `;
 player2El.innerHTML = ` <img src='${diceImageArray[1]}' /> `;
 player1El.innerHTML = ` <img src='${player1Tern}.${diceImageArray[2]} ' /> `;

}

}
