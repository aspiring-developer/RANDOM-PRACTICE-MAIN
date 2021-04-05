let inputFieldEl = document.querySelector(".inputField");
let addBtnEl = document.querySelector(".addBtn");
let dynamicFieldEl = document.querySelector(".dynamicField");

addBtnEl.addEventListener("click", updateList);

function updateList(e) {
e.preventDefault();

let userInput = inputFieldEl.value;
console.log(userInput);
dynamicFieldEl.innerHTML = userInput;
}