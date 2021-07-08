let colorButtonEl = document.getElementById("colorButton");
let backgroundEl = document.querySelector("body");

colorButtonEl.addEventListener("click", changeBg);

let bgColor = ["#E3D0B9", "#F7F7E8", "#A0C1B8", "#FFDF91", "#E7D9EA", "B#BF1FA", "#E8E9A1", "#FFE3DE"]

function changeBg() {
let randomizedBgColor = Math.floor(Math.random() * bgColor.length);
backgroundEl.style.backgroundColor = bgColor[randomizedBgColor];
  }
changeBg();

resetting();
function resetting() {
  backgroundEl.style.backgroundColor = "#fff";
}