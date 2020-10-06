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
//console.log(i)

}
return asciiLoop;
}
asciiStartAndEnd (65, 90)

// Process the ASCII characters
const lowerAscii = asciiStartAndEnd(97, 122);
const upperAscii = asciiStartAndEnd(65, 90);
const numbersAscii = asciiStartAndEnd(48, 57);
const symbolsAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(58, 64)).concat(asciiStartAndEnd(91, 96)).concat(asciiStartAndEnd(123, 126));

// Create "submit-event" event listener to the form
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const counterNumberDesired = counterEl.value;
  const uppercaseSelect = uppercaseEl.checked;
  const numbersSelect = numbersEl.checked;
  const symbolsSelect = symbolsEl.checked;
  const password = generatePassword(counterNumberDesired, uppercaseSelect, numbersSelect, symbolsSelect);
  passwordFieldEl.innerText = password;
  //console.log(counterNumberDesired, uppercaseSelect, numbersSelect, symbolsSelect, rangeEl.value)

});

// Create the generatePassword function
function generatePassword(counterNumberDesired, uppercaseSelect, numbersSelect, symbolsSelect) {
let passwordAscii = lowerAscii;
if(uppercaseSelect) {passwordAscii= passwordAscii.concat(upperAscii)};
if(numbersSelect) {passwordAscii= passwordAscii.concat(numbersAscii)};
if(symbolsSelect) {passwordAscii= passwordAscii.concat(symbolsAscii)};
//console.log(passwordAscii);
let passwordCharacters = [];
for(i = 0; i <= counterNumberDesired.length; i++) {
  console.log(counterNumberDesired);
}
let randomizeCharacters = passwordAscii[Math.floor(Math.random() * passwordAscii.length)];
passwordCharacters.push(String.fromCharCode(randomizeCharacters));
return passwordCharacters.join('');
}