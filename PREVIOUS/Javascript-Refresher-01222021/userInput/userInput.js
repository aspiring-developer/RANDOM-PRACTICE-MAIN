let inputFormEl = document.getElementById("inputForm");
let inputFieldEl = document.getElementById("inputField");
let itemListsEl  = document.getElementById("itemLists");

inputFormEl.addEventListener("submit", displayItemFunction);

function displayItemFunction(e) {
  e.preventDefault();
  if(inputFieldEl.value) {
  itemListsEl.insertAdjacentHTML('afterbegin', `<li class="my-2 p-2"> ${inputFieldEl.value} <button class="btn btn-danger ml-2 p-1" onclick="deleteItemFunction(this)"> Delete </button> </li>`);
  //console.log(this);
  }
  inputFieldEl.value = "";
  inputFieldEl.focus();
}

function deleteItemFunction(itemToDelete) {
  itemToDelete.parentElement.remove();
}