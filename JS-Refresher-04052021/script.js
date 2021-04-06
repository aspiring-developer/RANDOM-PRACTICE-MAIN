let inputFieldEl = document.querySelector(".inputField");
let addBtnEl = document.querySelector(".addBtn");
let dynamicFieldEl = document.querySelector(".dynamicField");
let itemFieldEl = document.querySelector(".itemField");
let dynamicUlEl = document.querySelector(".dynamicUl");
let deleteBtnEl = document.querySelector(".deleteBtn");

addBtnEl.addEventListener("click", updateList);

function updateList(e) {
  let userInput = inputFieldEl.value;
  let getLocal = [];
  e.preventDefault();
  if (!localStorage.getItem('item')) {

    getLocal.push(userInput);
    localStorage.setItem('item', JSON.stringify(getLocal));
  } else {
    let getLocalInString = localStorage.getItem('item');
    getLocal = JSON.parse(getLocalInString);
    getLocal.push(userInput);
    localStorage.setItem('item', JSON.stringify(getLocal));
  }
  // get each item

  let result = '';
  getLocal.map(function (each, index) {
    console.log(each, index);
    result += `<li class="item mb-2 itemField">${each} <button type="button" class="btn-sm deleteBtn ml-4"> Delete </button> </li>`
  });
  dynamicUlEl.innerHTML = result;
}

deleteBtnEl.addEventListener("click", deleteItem);
function deleteItem(e) {
  if(e.target.classList.includes("deleteBtn")) {

    e.target.parentElement.remove();
  }
}