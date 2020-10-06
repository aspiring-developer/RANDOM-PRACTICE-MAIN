// Get all DOM elements
const formEl = document.getElementById("passwordGeneratorForm");
const passwordFieldEl = document.getElementById("passwordDisplay");
const rangeEl = document.getElementById("characterAmountRange");
const counterEl = document.getElementById("characterAmountNumber");
const uppercaseEl = document.getElementById("includeUppercase");
const numbersEl = document.getElementById("includeNumbers");
const symbolsEl = document.getElementById("includeSymbols");

// Sync range and counter values // First add "input-event" event listeners to them
rangeEl.addEventListener("input", rangeAndCounterSync);
counterEl.addEventListener("input", rangeAndCounterSync);
function rangeAndCounterSync (e) {
rangeEl.value = e.target.value;
counterEl.value = e.target.value;
}

// Create a loop for processing ASCII characters
function asciiStartAndEnd (start, end) {
let asciiLoop = [];
for(i = start; i <= end; i++) {
asciiLoop.push(i);
console.log(i)

}
return asciiLoop;
}
asciiStartAndEnd (65, 90)

// Process the ASCII characters
const upperAscii = asciiStartAndEnd(65, 90);
const lowerAscii = asciiStartAndEnd(97, 122);
const numbersAscii = asciiStartAndEnd(48, 57);
const symbolsAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(58, 64)).concat(asciiStartAndEnd(91, 96)).concat(asciiStartAndEnd(123, 126));

// Create "submit-event" event listener to the form
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const counterNumberDesired = counterEl.value;
  const uppercaseSelect = uppercaseEl.value;
  const lowercaseSelect = lowercaseEl.value;
  const numbersSelect = numbersEl.value;
  const symbolsSelect = symbolsEl.value;
  const password = generatePassword(uppercaseSelect, lowercaseSelect, numbersSelect, symbolsSelect);
  passwordFieldEl.innerText = password;
});

// Create the generatePassword function
function generatePassword(uppercaseSelect, lowercaseSelect, numbersSelect, symbolsSelect) {

}