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
  let asciiLoop = [];
  for (i = start; i <= end; i++) {
    asciiLoop.push(i);
  }
  return asciiLoop;
}
//asciiStartAndEnd(97, 122);

const lowerAscii = asciiStartAndEnd(97, 122);
const upperAscii = asciiStartAndEnd(65, 90);
const numbersAscii = asciiStartAndEnd(48, 57);
let symbolsAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(58, 64)).concat(asciiStartAndEnd(91, 96)).concat(asciiStartAndEnd(123, 126));

// Create submit event listener to the form
passwordGeneratorFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("WORKING!")
  const characterCount = characterAmountNumberEl.value;
  const includeUppercase = includeUppercaseEl.checked;
  const includeNumbers = includeNumbersEl.checked;
  const includeSymbols = includeSymbolsEl.checked;
  const password = generatePassword(characterCount, includeUppercase, includeNumbers, includeSymbols);
  passwordDisplayEl.innerHTML = password;
})

// Create generatePassword function
function generatePassword(characterCount, includeUppercase, includeNumbers, includeSymbols) {
  console.log(characterCount, includeUppercase, includeNumbers, includeSymbols);
  let passwordAscii = lowerAscii;

  if(includeUppercase) {passwordAscii = passwordAscii.concat(upperAscii)};
  if(includeNumbers) {passwordAscii = passwordAscii.concat(numbersAscii)};
  if(includeSymbols) {passwordAscii = passwordAscii.concat(symbolsAscii)};

  let passwordCharacters = [];

  for (i = 0; i < characterCount; i++) {
    let finalPassword = passwordAscii[Math.floor(Math.random() * passwordAscii.length)];
    passwordCharacters.push(String.fromCharCode(finalPassword));
    }
  return passwordCharacters.join("");
  }



// TODO: Reference ASCII Values
// UC: 65, 90  |  LC: 97, 122 |  Num: 48, 57 | (Sym: 33, 47  &&  58, 64  &&  91, 96  &&  123, 126  )