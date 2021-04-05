let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

function setUserName() {
  let myName = prompt("Please enter your name.");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
  myHeading.textContent = "Welcome to my site, " + myName;
  }
  }
setUserName();

if(!localStorage.getItem('name')) {
setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "Welcome to my site, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}