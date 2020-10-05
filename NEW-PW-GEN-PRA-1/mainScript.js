// Retrieve the DOM elements
const form = document.getElementById("mainForm");
const rangeSliderEl = document.getElementById("Input_CharacterRange");
const numberCounterEl = document.getElementById("Input_CharacterNumber");
const lowercaseEl = document.getElementById("Input_Lowercase");
const uppercaseEl = document.getElementById("Input_Uppercase");
const numbersEl = document.getElementById("Input_Numbers");
const symbolsEl = document.getElementById("Input_Symbols");
const submitEl = document.getElementById("submitButton");

// Add event listener to the button
submitEl.addEventListener("click", generatePassword);

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

// Create function to generate password
function generatePassword(e) {
  e.preventDefault();
}
