// TODO Block 1: Get all DOM element reference from the HTML page
const passwordFieldEl = document.getElementById("passwordDisplayField");
const formFieldEl = document.getElementById("mainForm");
const rangeLengthEl = document.getElementById("rangeLength");
const characterLengthEl = document.getElementById("characterLength");
const uppercaseChoiceEl = document.getElementById("uppercaseChoiceEl");
const lowercaseChoiceEl = document.getElementById("lowercaseChoice");
const numbersChoiceEl = document.getElementById("numbersChoice");
const symbolsChoiceEl = document.getElementById("symbolsChoice");

// TODO Block 2: Sync character range and text field's value
// Add "input-event" event listeners to both
rangeLengthEl.addEventListener("input", syncRangeAndTextFields);
characterLengthEl.addEventListener("input", syncRangeAndTextFields);
// Create the function for the syncing "input-event" listeners
function syncRangeAndTextFields(e) {
  rangeLengthEl.value = e.target.value;
  characterLengthEl.value = e.target.value;
}

// TODO Block 3: Sync character range and text field's value
// A
