// Retrieve the DOM elements
const passwordDisplayEL = document.getElementById("passwordDisplay");
const formEl = document.getElementById("passwordGeneratorForm");
const characterAmountRangeEl = document.getElementById("characterAmountRange");
const characterAmountNumberEl = document.getElementById("characterAmountNumber");
const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");

// Sync range and counter field
characterAmountRangeEl.addEventListener("input", syncRangeAndCounter);
characterAmountNumberEl.addEventListener("input", syncRangeAndCounter);
function syncRangeAndCounter(e) {
  const syncRangeAndCounterValue = e.target.value;
  characterAmountRangeEl.value = syncRangeAndCounterValue;
  characterAmountNumberEl.value = syncRangeAndCounterValue;
}

// Create a function to loop the ASCII character lists
function asciiBeginAndEnd(begin, end) {
  let asciiLoop = [];
  for(i=begin; i<=end; i++){
  asciiLoop.push(i);
  }
  //console.log(asciiLoop)
  return asciiLoop;
}
//asciiBeginAndEnd(65, 90);

// Process the ASCII characters
const upperAscii = asciiBeginAndEnd(65, 90);
const lowerAscii = asciiBeginAndEnd(97, 122);
const numbersAscii = asciiBeginAndEnd(48, 57);
const symbolsAscii = asciiBeginAndEnd(33, 47).concat(asciiBeginAndEnd(58, 64)).concat(asciiBeginAndEnd(91, 96)).concat(asciiBeginAndEnd(123, 126));

// UC: 65-90, LC: 97-122, Num: 48-57, (Sym: 33-47, 58-64, 91-96, 123-126)

// Create submit event listener to the form
formEl.addEventListener("submit", function(e){
e.preventDefault();
const characterCounter = characterAmountNumberEl.value;
const includeUppercase = includeUppercaseEl.checked;
const includeNumbers = includeNumbersEl.checked;
const includeSymbols = includeSymbolsEl.checked;
const password = generatePassword(characterCounter, includeUppercase, includeNumbers, includeSymbols)
passwordDisplayEL.innerText = password;
});

// Create the function to generate password
function generatePassword(characterCounter, includeUppercase, includeNumbers, includeSymbols) {
  let asciiCodes = lowerAscii;
  if(includeUppercase) {
    asciiCodes = asciiCodes.concat(upperAscii)
  };
  if(includeNumbers) {
    asciiCodes = asciiCodes.concat(numbersAscii)
  };
  if(includeSymbols) {
    asciiCodes = asciiCodes.concat(symbolsAscii)
  };

const passwordCharacters = [];
//console.log(characterCounter, includeUppercase, includeNumbers, includeSymbols);
for(i = 0; i < characterCounter; i++) {
let asciiCodesRandomize = asciiCodes[Math.floor(Math.random() * asciiCodes.length)];
passwordCharacters.push(String.fromCharCode(asciiCodesRandomize));
}
return passwordCharacters.join("");
}
