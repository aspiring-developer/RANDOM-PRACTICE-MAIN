// Referencing DOM elements
let firstFieldEl = document.getElementById("field1");
let secondFieldEl = document.getElementById("field2");
let ResultFieldEl = document.getElementById("ResultField");
let addButtonEl = document.getElementById("addButton");
let subtractButtonEl = document.getElementById("subtractButton");
let multiplyButtonEl = document.getElementById("multiplyButton");
let divideButtonEl = document.getElementById("divideButton");

addButtonEl.addEventListener("click", function() {
  let userEnteredField1 = firstFieldEl.value;
let userEnteredField2 = secondFieldEl.value;
  let addedResult = +userEnteredField1 + +userEnteredField2;
  console.log("AddedResult: " + addedResult);
  ResultFieldEl.innerText = "The added value is: " + addedResult;
});

subtractButtonEl.addEventListener("click", function() {
  let userEnteredField1 = firstFieldEl.value;
let userEnteredField2 = secondFieldEl.value;
  let subtractedResult = +userEnteredField1 - +userEnteredField2;
  console.log("SubtractedResult: " + subtractedResult);
  ResultFieldEl.innerText = "The subtracted value is: " + subtractedResult;
});

multiplyButtonEl.addEventListener("click", function() {
  let userEnteredField1 = firstFieldEl.value;
let userEnteredField2 = secondFieldEl.value;
  let multipliedResult = +userEnteredField1 * +userEnteredField2;
  console.log("MultipliedResult: " + multipliedResult);
  ResultFieldEl.innerText = "The multiplied value is: " + multipliedResult;
});

divideButtonEl.addEventListener("click", function() {
  let userEnteredField1 = firstFieldEl.value;
let userEnteredField2 = secondFieldEl.value;
  let dividedResult = +userEnteredField1 / +userEnteredField2;
  console.log("DividedResult: " + dividedResult);
  ResultFieldEl.innerText = "The divided value is: " + dividedResult;
});