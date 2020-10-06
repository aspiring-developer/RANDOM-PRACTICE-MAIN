// Retrieve DOM elements
const formEl = document.getElementById("operatorForm");
const resultDisplayEl = document.getElementById("resultDisplay");
const inputField1El = document.getElementById("inputField1");
const inputField2El = document.getElementById("inputField2");
const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");

//function userInputValue(e) {
// inputField1El.value = e.target.value;
// inputField2El.value = e.target.value;
// console.log(inputField1El, inputField2El)
//}


//addEl.addEventListener("click", generateResult);

// Add submit-event event listener to the form
formEl.addEventListener("submit", function(e){
 e.preventDefault();
 //let inputField1Number = 0;
inputField1El.value = e.target.value;
if (inputField1El.value == e.target.value) {
 // console.log("you typed something!");
 resultDisplayEl.innerText = "The result is: ";
};
// inputField2El.value = e.target.value;
//console.log(inputField1El, inputField2El)
})
