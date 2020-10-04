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

// Create

// Create ASCII characters for password choices

// Create function to generate password
function generatePassword() {}
