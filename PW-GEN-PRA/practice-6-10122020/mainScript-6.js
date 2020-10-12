// Retrieve DOM elements
passwordGeneratorFormEl = document.getElementById("passwordGeneratorForm");
passwordDisplayEl = document.getElementById("passwordDisplay");
characterAmountRangeEl = document.getElementById("characterAmountRange");
characterAmountNumberEl = document.getElementById("characterAmountNumber");
includeUppercaseEl = document.getElementById("includeUppercase");
includeNumbersEl = document.getElementById("includeNumbers");
includeSymbolsEl = document.getElementById("includeSymbols");

// Sync range and counter values
characterAmountRangeEl.addEventListener("input", syncRangeAndCounter);
characterAmountNumberEl.addEventListener("input", syncRangeAndCounter);
function syncRangeAndCounter(e) {
  characterAmountRangeEl.value = e.target.value;
  characterAmountNumberEl.value = e.target.value;
}

// Create a function with a loop for ASCII characters process
function asciiStartAndEnd(start, end) {

}

// Create submit event listener to the form


// Create generatePassword function

