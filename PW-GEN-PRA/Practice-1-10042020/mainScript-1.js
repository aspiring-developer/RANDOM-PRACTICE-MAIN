// Retrieve the DOM elements
const form = document.getElementById("mainForm");
const passwordFieldEl = document.getElementById("passwordField");
const rangeSliderEl = document.getElementById("Input_CharacterRange");
const numberCounterEl = document.getElementById("Input_CharacterNumber");
const lowercaseEl = document.getElementById("Input_Lowercase");
const uppercaseEl = document.getElementById("Input_Uppercase");
const numbersEl = document.getElementById("Input_Numbers");
const symbolsEl = document.getElementById("Input_Symbols");
const submitEl = document.getElementById("submitButton");

// Sync range and counter
rangeSliderEl.addEventListener("input", syncSliderAndCounter);
numberCounterEl.addEventListener("input", syncSliderAndCounter);
function syncSliderAndCounter(e) {
  let syncValue = e.target.value;
  rangeSliderEl.value = syncValue;
  numberCounterEl.value = syncValue;
}
// Create function to process ASCII characters

function asciiProcess(min, max) {
  let asciiCharacter = [];
  for (i = min; i <= max; i++) {
    asciiCharacter.push(i);
    //console.log(i);
  }
  return asciiCharacter;
}
//asciiProcess(65, 90); // Note: calling this here and console logging (i) will show numbers 65 to 90 printed, we need to randomize and convert to ASCII characters using charAt() method

// Create ASCII characters for password choices
let uppercaseAscii = asciiProcess(65, 90);
let lowercaseAscii = asciiProcess(97, 122);
let numbersAscii = asciiProcess(48, 57);
let symbolsAscii = asciiProcess(33, 47)
  .concat(asciiProcess(58, 64))
  .concat(asciiProcess(91, 96))
  .concat(asciiProcess(123, 126));

// Create submit event handler function

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const countSelected = numberCounterEl.value;
  const lowercaseSelected = lowercaseEl.checked;
  const uppercaseSelected = uppercaseEl.checked;
  const numbersSelected = numbersEl.checked;
  const symbolsSelected = symbolsEl.checked;
  const password = generatePassword(countSelected, uppercaseSelected, numbersSelected, symbolsSelected);
  passwordFieldEl.innerText = password;
});

// Create function to generate password
function generatePassword(countSelected, uppercaseSelected, numbersSelected, symbolsSelected) {
  let userChoice = lowercaseAscii;
  if (uppercaseSelected) {
    userChoice = userChoice.concat(uppercaseAscii);
  }
  if (numbersSelected) {
    userChoice = userChoice.concat(numbersAscii);
  }
  if (symbolsSelected) {
    userChoice = userChoice.concat(symbolsAscii);
  }
  const passwordCharacters = [];
  for (i = 0; i < countSelected; i++) {
    const characterCodes =
      userChoice[Math.floor(Math.random() * userChoice.length)];
    passwordCharacters.push(String.fromCharCode(characterCodes));
  }
  return passwordCharacters.join("");
}
