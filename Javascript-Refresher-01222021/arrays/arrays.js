let myStringArrays = ["array01", "array2", "array3", "array4", "array5", "array6"];
let myNumberArrays = [6, 9, 29, 30, 45, 18];
let myObjectArrays = [{name: "name1", color: "Black"}, {name: "name2", color: "Brown"}];

let textDisplayEl = document.getElementById("textDisplay");
let displayButtonEl = document.getElementById("displayButton");

displayButtonEl.addEventListener("click", displayTextsFunction);

function displayTextsFunction() {
  textDisplayEl.innerHTML = myStringArrays[0].toUpperCase();

  myNumberArrays.push(22); // adding an element (22) to the end of the array
  myNumberArrays.unshift(3); // adding an element (3) to the beginning of the array
  //myNumberArrays.shift(); // removing the first element (3) from the array
  //myNumberArrays.pop(); // removing the last element (22) from the array

  for(i=0; i<myNumberArrays.length; i++) {
  textDisplayEl.innerHTML += "<br /> " + myNumberArrays[i];
}
textDisplayEl.innerHTML += "<br /> " + myObjectArrays[1].name;

}


