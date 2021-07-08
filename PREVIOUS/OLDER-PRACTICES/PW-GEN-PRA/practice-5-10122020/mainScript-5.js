// Retrieve the DOM elements
const passwordGeneratorFormEl = document.getElementById("passwordGeneratorForm");
const passwordDisplayEl = document.getElementById("passwordDisplay");
const characterAmountRangeEl = document.getElementById("characterAmountRange");
const characterAmountNumberEl = document.getElementById("characterAmountNumber");
const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");

// Sync range value and counter value
characterAmountRangeEl.addEventListener("input", syncRangeAndCounter);
characterAmountNumberEl.addEventListener("input", syncRangeAndCounter);

function syncRangeAndCounter(e) {
  characterAmountRangeEl.value = e.target.value;
  characterAmountNumberEl.value = e.target.value;
}

// Loop process ASCII codes
function startAndEndAscii(start, end) {
  let asciiLoop = [];
  for (i = start; i <= end; i++) {
    asciiLoop.push(i);
  }
  return asciiLoop;
}

// Retrieve ASCII codes
const lowercaseAscii = startAndEndAscii(97, 122);
const uppercaseAscii = startAndEndAscii(65, 90);
const numbersAscii = startAndEndAscii(48, 57);
const symbolsAscii = startAndEndAscii(33, 47).concat(startAndEndAscii(58, 64)).concat(startAndEndAscii(91, 96)).concat(startAndEndAscii(123, 126))

// Create form submit event with a callback function
passwordGeneratorFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const characterCountChoice = characterAmountNumberEl.value;
  const includeUppercase = includeUppercaseEl.checked;
  const includeNumbers = includeNumbersEl.checked;
  const includeSymbols = includeSymbolsEl.checked;

  const password = generatePassword(characterCountChoice, includeUppercase, includeNumbers, includeSymbols);

  //passwordDisplayEl.innerHTML = "HELLO!!!!!!!!!!!!!!!!!!!!!!"
  passwordDisplayEl.innerHTML = password;

})

// Create the generatePassword function
function generatePassword(characterCountChoice, includeUppercase, includeNumbers, includeSymbols) {
  let passwordAscii = lowercaseAscii;
//console.log(lowercaseAscii);
 if (includeUppercase) { passwordAscii = passwordAscii.concat(uppercaseAscii) };
  if (includeNumbers) { passwordAscii = passwordAscii.concat(numbersAscii) };
  if (includeSymbols) { passwordAscii = passwordAscii.concat(symbolsAscii) };
  //console.log(passwordAscii);
  let passwordCharacters = [];
for (i = 0; i < characterCountChoice; i++) {
 //console.log("FOR LOOP WORKING!!!!")
  let finalPassword = passwordAscii[Math.floor(Math.random() * passwordAscii.length)];
  passwordCharacters.push(String.fromCharCode(finalPassword));
  console.log(finalPassword);
  //console.log(passwordCharacters);
 //passwordCharacters.join("");
}
return passwordCharacters.join("");
}

// TODO: Reference ASCII Values
// UC: 65, 90  |  LC: 97, 122 |  Num: 48, 57 | (Sym: 33, 47  &&  58, 64  &&  91, 96  &&  123, 126  )