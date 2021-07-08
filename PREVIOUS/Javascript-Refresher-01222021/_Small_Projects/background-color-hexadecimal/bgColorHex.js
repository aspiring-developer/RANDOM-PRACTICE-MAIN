let colorButtonEl = document.getElementById("colorButton");
let backgroundEl = document.querySelector("body");
let colorNameEl = document.getElementById("colorName");

colorButtonEl.addEventListener("click", changeBgColor);

let hexadecimalValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeBgColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomizedHex = Math.floor(Math.random() * hexadecimalValues.length);
    hexColor += hexadecimalValues[randomizedHex];
  }
  console.log(hexColor);
  backgroundEl.style.backgroundColor = hexColor;
  colorNameEl.innerHTML = hexColor;
}

// ############## Default body bg color and reset ############################
function defaultBgColor() {
  backgroundEl.style.backgroundColor = "#BBF1FA";
}
defaultBgColor();