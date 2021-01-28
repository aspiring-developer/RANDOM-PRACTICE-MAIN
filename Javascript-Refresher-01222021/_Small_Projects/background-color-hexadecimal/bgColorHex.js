let colorButtonEl = document.getElementById("colorButton");
let backgroundEl = document.querySelector("body");

colorButtonEl.addEventListener("click", changeBg);

function changeBg() {
  console.log ("changeBg function body");
}
changeBg()