// Retrieve DOM elements
const formEl = document.getElementById("operatorForm");
const resultDisplayEl = document.getElementById("resultDisplay");
const inputField1El = document.getElementById("inputField1");
const inputField2El = document.getElementById("inputField2");
const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");

// Add submit-event event listener to the form
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  addEl.addEventListener("click", doAddition);
  function doAddition() {
    let addition = parseInt(inputField1El.value) + parseInt(inputField2El.value);
    resultDisplayEl.innerText = addition;
   }
  subtractEl.addEventListener("click", doSubtraction);
  function doSubtraction() {
    let subtraction = parseInt(inputField1El.value) - parseInt(inputField2El.value);
    resultDisplayEl.innerText = subtraction;
  }
  multiplyEl.addEventListener("click", doMultiplication);
  function doMultiplication() {
    let multiplication = parseInt(inputField1El.value) * parseInt(inputField2El.value);
    resultDisplayEl.innerText = multiplication;
  }
  divideEl.addEventListener("click", doDivision);
  function doDivision() {
    let division = parseInt(inputField1El.value) / parseInt(inputField2El.value);
    resultDisplayEl.innerText = division;
  }
});
