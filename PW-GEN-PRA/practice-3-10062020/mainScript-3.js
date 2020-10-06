// Get all DOM elements
const formEl = document.getElementById("passwordGeneratorForm");
const rangeEl = document.getElementById("characterAmountRange");
const counterEl = document.getElementById("characterAmountNumber");
const uppercaseEl = document.getElementById("includeUppercase");
const numbersEl = document.getElementById("includeNumbers");
const symbolsEl = document.getElementById("includeSymbols");

// Sync range and counter values // First add "input-event" event listeners to them
rangeEl.addEventListener("input", rangeAndCounterSync);
counterEl.addEventListener("input", rangeAndCounterSync);
function rangeAndCounterSync (e) {
rangeEl.value = e.target.value;
counterEl.value = e.target.value;
}

// Create a loop for processing ASCII characters
function asciiStartAndEnd (start, end) {
let asciiLoop = [];
for(i = start; i <= end; i++) {
asciiLoop.push(i);
console.log(i)

}
return asciiLoop;
}
asciiStartAndEnd (65, 90)

// Process the ASCII characters
const upperAscii = asciiStartAndEnd(65, 90);
const lowerAscii = asciiStartAndEnd(97, 122);
const numbersAscii = asciiStartAndEnd(48, 57);
const symbolsAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(65, 90));
// UC: 65-90, LC: 97-122, Num: 48-57, (Sym: 33-47, 58-64, 91-96, 123-126)