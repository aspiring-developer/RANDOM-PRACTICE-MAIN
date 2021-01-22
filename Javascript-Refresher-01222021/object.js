let textDisplayEl = document.getElementById("textDisplay");
let whatCatSaysEl = document.getElementById("whatCatSays");
textDisplayEl.addEventListener("click", displayFunction);

function displayFunction(e) {
  textDisplayEl.innerText = ("Cat says Meawoooooo!");
  textDisplayEl.innerText += (" Cat says MEAWOO!");
}

let cat = {
  name: "cat-1",
  age: 4,
  catAction() {
    whatCatSaysEl.innerHTML = "Cat says something!!!!!!!!!!! <br />"
    whatCatSaysEl.innerHTML += cat.name;
    whatCatSaysEl.innerHTML += "<br />";
    whatCatSaysEl.innerHTML += cat.age;
     }
}
cat.catAction();

