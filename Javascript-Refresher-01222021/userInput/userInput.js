let inputFormEl = document.getElementById("inputForm");
let inputFieldEl = document.getElementById("inputField");
let displayButtonEl = document.getElementById("displayButton");
let itemListsEl  = document.getElementById("itemLists");

inputFormEl.addEventListener("submit", displayTextsFunction);


function displayTextsFunction(e) {
  e.preventDefault();
  itemListsEl.insertAdjacentHTML('beforebegin', `<li class="my-2 p-2"> ${inputFieldEl.value} <button class="btn btn-danger ml-2 p-1"> Delete </button> </li>`);
  inputFieldEl.value = "";
  inputFieldEl.focus();
}


