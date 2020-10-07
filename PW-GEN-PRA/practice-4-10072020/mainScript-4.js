// Retrieve the DOM elements
const form = document.getElementById("passwordGeneratorForm");
const rangeEl = document.getElementById("characterAmountRange");
const counterEl = document.getElementById("characterAmountNumber");
const upperEl = document.getElementById("includeUppercase");
const numbersEl = document.getElementById("includeNumbers");
const symbolsEl = document.getElementById("includeSymbols");

// Sync the range and the counter values // Add "input-event" listeners to grab user input
rangeEl.addEventListener("input", syncRangeAndCounter);
counterEl.addEventListener("input", syncRangeAndCounter);
function syncRangeAndCounter(e) {
  rangeEl.value = e.target.value;
  counterEl.value = e.target.value;
}

// Create a function and loop to process ASCii characters
function asciiStartAndEnd(start, end) {
  let asciiRetrieve = [];
  for(i= start; i <= end; i++) {
    asciiRetrieve.push(i);
  }
  //console.log(asciiRetrieve);
}
//asciiStartAndEnd(1, 8)

// Retrieve ASCII characters to process
const lowerAscii = asciiStartAndEnd(97, 122);
const upperAscii = asciiStartAndEnd(65, 90);
const upperAscii = asciiStartAndEnd(48, 57);
const upperAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(58, 64)).concat(asciiStartAndEnd(91, 96)).concat(asciiStartAndEnd(123, 126));

// Create submit-event to the form

// Create generate function




// TODO: Reference ASCII Values
// UC: 65, 90  |  LC: 97, 122 |  Num: 48, 57 | (Sym: 33, 47  &&  58, 64  &&  91, 96  &&  123, 126  )