let inputFieldEl = document.querySelector(".inputField");
let addBtnEl = document.querySelector(".addBtn");
let dynamicFieldEl = document.querySelector(".dynamicField");

addBtnEl.addEventListener("click", updateList);

function updateList(e) {
  let userInput = inputFieldEl.value;
  e.preventDefault();
  if (!localStorage.getItem('item')) {
    let getLocal = [];
    getLocal.push(userInput);
    localStorage.setItem('item', JSON.stringify(getLocal));
  } else {
    let getLocalInString = localStorage.getItem('item');
    getLocal = JSON.parse(getLocalInString);
    getLocal.push(userInput);
    localStorage.setItem('item', JSON.stringify(getLocal));
  }

  console.log(userInput);
  dynamicFieldEl.innerHTML = userInput;
}