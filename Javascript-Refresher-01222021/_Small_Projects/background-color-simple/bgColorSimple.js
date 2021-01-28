let colorButtonEl = document.getElementById("colorButton");
let backgroundEl = document.querySelector("body");

colorButtonEl.addEventListener("click", changeBg);

let bgColor = ["red", "green", "blue", "purple", "#aeaeae", "orange", "brown", "yellow"]

function changeBg() {
let randomizedBgColor = Math.floor(Math.random() * bgColor.length);
backgroundEl.style.backgroundColor = bgColor[randomizedBgColor];
  }
changeBg();

resetting();
function resetting() {
  backgroundEl.style.backgroundColor = "#fff";
}