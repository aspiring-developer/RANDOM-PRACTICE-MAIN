// Holding a long chunk of HTML codes in a function to use below
function itemTemplate() {
  return ` <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${extractingToSingleItem.userInputText}</span>
  <div>
    <button class="edit-me btn btn-secondary btn-sm mr-1" data-id="${extractingToSingleItem._id}">Edit</button>
    <button class="delete-me btn btn-danger btn-sm" data-id="${extractingToSingleItem._id}">Delete</button>
  </div>
</li> `
};

// Create functionality
let createFormEl = document.getElementById("create-form");
let createFieldEl = document.getElementById("create-field");
let itemListEl = document.getElementById("item-list");
createFormEl.addEventListener("submit", function(e) {
e.preventDefault();
axios.post("/create-item", {textFieldValue: createFieldEl.value}).then(function(response) {
itemListEl.insertAdjacentHTML("beforeend", itemTemplate(response.data));
      }).catch(function () {
        console.log("Please try again, later!");
      });

});

//Edit/Update functionality
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-me")) {
    let userPrompt = prompt("Type what do you want to change or edit?",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if (userPrompt) {
      axios.post("/update-item", { userInputText: userPrompt, id: e.target.getAttribute("data-id") }).then(function () {
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userPrompt;
        console.log(userPrompt)
      }).catch(function () {
        console.log("Please try again, later!");
      });
    }
  }

  //Delete functionality
  if (e.target.classList.contains("delete-me")) {
    let userConfirm = confirm("Are you sure you want to delete the item?");
    if (userConfirm) {
      axios.post("/delete-item", { id: e.target.getAttribute("data-id") }).then(function () {
        e.target.parentElement.parentElement.remove();
      }).catch(function () {
        console.log("Please try again, later!");
      });
    }
  }
});