// TODO Block 1: Get all DOM element reference from the HTML page
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");
// const includeLowercaseElement = document.getElementById("lowercaseChoice");

// TODO Block 2: Sync character range and text field's value
// Add "input-event" event listeners to both
characterAmountNumber.addEventListener("input", syncRangeAndTextFields);
characterAmountRange.addEventListener("input", syncRangeAndTextFields);

// Create the function for the syncing "input-event" listeners
function syncRangeAndTextFields(e) {
  characterAmountNumber.value = e.target.value;
  characterAmountRange.value = e.target.value;
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
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

// TODO Block 5: Generate the password
// Create a function to generate password
function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = lowercaseAscii;
  if (includeUppercase) charCodes = charCodes.concat(uppercaseAscii);
  if (includeSymbols) charCodes = charCodes.concat(symbolsAscii);
  if (includeNumbers) charCodes = charCodes.concat(numbersAscii);

  const passwordCharacters = [];
  for (i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  //return passwordCharacters;
  return passwordCharacters.join("");
}
