let textDisplayEl = document.getElementById("textDisplay");
let whatCatSaysEl = document.getElementById("whatCatSays");
let catColorEl = document.getElementById("catColor");

textDisplayEl.addEventListener("click", displayFunction);

function displayFunction(e) {
  textDisplayEl.innerHTML = "Cat says Meawoooooo! <br /> ";
  textDisplayEl.innerText += " Cat says MEAWOO!";
}

let cat = {
  name: "cat-1",
  age: 4,
  color: {
    LgCat: "Black",
    MdCat: "Brown",
    SmCat: "White"
  },
  catAction() {
    whatCatSaysEl.innerHTML = "Cat name is: " + cat.name;
    whatCatSaysEl.innerHTML += "<br />";
    whatCatSaysEl.innerHTML += "Cat is " + cat.age + " years old.";
  }
}
cat.catAction();

catColorEl.innerHTML = "The large cat color is " + cat.color.LgCat + "." +
 "<br /> " + " The medium cat color is " + cat.color.MdCat + ". <br /> " + " The small cat color is " + cat.color.SmCat + ". <br />";