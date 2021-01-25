document.addEventListener("click", function (e) {

  //Edit/Update functionality
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