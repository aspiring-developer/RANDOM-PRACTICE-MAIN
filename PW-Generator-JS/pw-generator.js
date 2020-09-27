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

// TODO Block 3: Get/Process the ASCII characters
// Create a function to process the ASCII characters
function asciiMinMaxValues(min, max) {
  let asciiCodes = [];
  for (i = min; i <= max; i++) {
    asciiCodes.push(i);
  }
  return asciiCodes;
}
// Get the ASCII character codes and process them
const uppercaseAscii = asciiMinMaxValues(65, 90);
const lowercaseAscii = asciiMinMaxValues(97, 122);
const numbersAscii = asciiMinMaxValues(49, 57);
const symbolsAscii = asciiMinMaxValues(33, 47)
  .concat(asciiMinMaxValues(58, 64))
  .concat(asciiMinMaxValues(91, 96))
  .concat(asciiMinMaxValues(123, 126));
// NOTE: The symbols are in different range in ASCII codes table, so needed to combine them with .concat() method

// TODO Block 4: Work on Form submit event
// Create a "submit-event" event listener to the form
formFieldEl.addEventListener("submit", function (e) {
  e.preventDefault();
});
