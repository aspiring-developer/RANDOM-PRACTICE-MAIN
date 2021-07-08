// Reference to the DOM elements
let inputFieldEl = document.querySelector(".inputField");
let addBtnEl = document.querySelector(".addBtn");
let dynamicFieldEl = document.querySelector(".dynamicField");
let itemFieldEl = document.querySelector(".itemField");
let dynamicUlEl = document.querySelector(".dynamicUl");
let deleteBtnEl = document.querySelector(".deleteBtn");

addBtnEl.addEventListener("click", updateList);

function updateList() {
  let userInput = inputFieldEl.value;
  let itemsInLocalStorage;

  if (!localStorage.getItem('itemAsKey')) {
    itemsInLocalStorage = [];
    // console.log(itemsInLocalStorage)
  } else {
    itemsInLocalStorage = JSON.parse(localStorage.getItem('itemAsKey'));
    // console.log(JSON.parse(localStorage.getItem('items')) + " <--After JSON.parse")
  }

  itemsInLocalStorage.push(userInput);
  // console.log(itemsInLocalStorage + " <--After pushed")
  localStorage.setItem('itemAsKey', JSON.stringify(itemsInLocalStorage));
  // console.log('items', JSON.stringify(itemsInLocalStorage) + " <--After JSON.stringify");
 }


//function printInDOM() {
//  let itemsInLocalStorage = [];
//  itemsInLocalStorage = JSON.parse(localStorage.getItem('itemAsKey'));
//console.log(eachItem + " <--eachItem, index--> " + index)
//dynamicUlEl.innerHTML += `<li class="item mb-2 itemField">${eachItem} &nbsp; ${index}<button type="button" class="btn-sm ml-4" onclick="deleteItem()"> Delete </button> </li>`

//}
//printInDOM();

//function deleteItem(itemIndex) {
//  console.log("deleted!");
//  let itemsInLocalStorage = [];
//  itemsInLocalStorage = JSON.parse(localStorage.getItem('itemAsKey'));
//  itemsInLocalStorage.forEach(function (eachItem, index) {
//    console.log(eachItem + " <--eachItem, index--> " + index)
//    itemsInLocalStorage.splice(index, 1);

//  })
//  //  // getLocal.splice(itemIndex,1);
//  //  // let getLocalInString = localStorage.getItem('item');
//  //  //localStorage.setItem('item', JSON.stringify(getLocal));
//  //  //updateList();
//  // localStorage.removeItem('item');
//}

//localStorage.removeItem("item");