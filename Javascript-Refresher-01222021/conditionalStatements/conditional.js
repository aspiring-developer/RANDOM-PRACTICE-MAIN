let textDisplayEl = document.getElementById("textDisplay");
let displayButtonEl = document.getElementById("displayButton");

displayButtonEl.addEventListener("click", displayTextsFunction);

let count = -1000;

function displayTextsFunction() {
  textDisplayEl.innerHTML = count;
  if(count >= 1 && count <= 10) {
    textDisplayEl.innerHTML = "Total count is in between 1 to 10. Actually it is " + count + ".";
  } else if(count >= 11 && count <= 20) {
    textDisplayEl.innerHTML = "Total count is in between 11 to 20. Actually it is " + count + ".";
  } else if(count == 0) {
    textDisplayEl.innerHTML = "There is nothing left. Actually it is " + count + ".";
  }
  else if(count > 20) {
    textDisplayEl.innerHTML = "The limit is only 20, but you entered " + count + ".";
  } else {
    textDisplayEl.innerHTML = `The ${count} is a negative number that is not allowed. Enter 1 to 20 only`;
  }
}


