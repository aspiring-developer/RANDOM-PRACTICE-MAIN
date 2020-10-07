// Retrieve DOM elements
const formEl = document.getElementById("operatorForm");
const resultDisplayEl = document.getElementById("resultDisplay");
const operatorOptionEl = document.getElementById("operatorOption");
const inputField1El = document.getElementById("inputField1");
const inputField2El = document.getElementById("inputField2");
const calculateBtnEl = document.getElementById("calculateBtn");

// Add submit-event event listener to the form
calculateBtnEl.addEventListener("click", calculate);
function calculate(e) {
  e.preventDefault();
  let optionChosen = operatorOptionEl.value;
  console.log(optionChosen);
     if(optionChosen === "Add") {
        resultDisplayEl.innerText = parseInt(inputField1El.value) + parseInt(inputField2El.value);
    } else if(optionChosen === "Subtract") {
      resultDisplayEl.innerText = parseInt(inputField1El.value) - parseInt(inputField2El.value);
    } else if(optionChosen === "Multiply") {
      resultDisplayEl.innerText = parseInt(inputField1El.value) * parseInt(inputField2El.value);
    } else if(optionChosen === "Divide") {
      resultDisplayEl.innerText = parseInt(inputField1El.value) / parseInt(inputField2El.value);
    } else {
     resultDisplayEl.innerHTML = ` <h4 style="color:red"> Select an operator option! </h4> `;
    }
    if(inputField1El.value === "" && inputField2El.value === '') {
      resultDisplayEl.innerHTML = ` <h4 style="color:red"> Type both numbers! </h4> `;
    }
      }


