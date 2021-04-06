let inputFieldEl = document.querySelector(".inputField");
let addBtnEl = document.querySelector(".addBtn");
let dynamicFieldEl = document.querySelector(".dynamicField");
let itemFieldEl = document.querySelector(".itemField");

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
// get each item
getLocal.forEach(each => {
  let eachItem = `<li class="item mb-2 itemField">${each} <button type="button" class="btn-sm deleteBtn ml-4"> Delete </button> </li>`;
  console.log(eachItem);
  dynamicFieldEl.innerText = eachItem;
return eachItem;
});


}