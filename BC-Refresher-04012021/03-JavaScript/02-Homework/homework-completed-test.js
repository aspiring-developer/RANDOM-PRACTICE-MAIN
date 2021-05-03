// Retrieving DOM elements
const characterCounterEl = document.querySelector('#characterCounter');
const lowerCheckboxEl = document.querySelector('#lowerCheckbox');
const upperCheckboxEl = document.querySelector('#upperCheckbox');
const numberCheckboxEl = document.querySelector('#numberCheckbox');
const specialCheckboxEl = document.querySelector('#specialCheckbox');
const passwordResultEl = document.querySelector('#passwordResult');
const passwordButtonEl = document.querySelector('#passwordButton');

// Given character sets
const lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacter = ['!', '#', '$', '%', '&', '?', '@', '_'];
const numberCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Creating uppercase characters set from given lowercase set
let upperCaseCharacter = lowerCaseCharacter.map(function (eachChar) {
  eachChar = eachChar.toUpperCase();
  return eachChar;
});
console.log(upperCaseCharacter);

passwordButtonEl.addEventListener('click', generatePassword);

// Main password generator
function generatePassword() {
  let selectedCharacters = [];
  if (!lowerCheckboxEl.checked && !upperCheckboxEl.checked && !numberCheckboxEl.checked && !specialCheckboxEl.checked) {
    alert("You must check at least one character set!");
  }
  else {
    selectedCharacters.push()
    randomizedCharacters();
    console.log(randomizedCharacters())
  }
}

// Collection of selected characters

// Randomize selected characters
function randomizedCharacters() {
  let randomizedCharacters = Math.random(characterCounterEl.value) * 1
  return randomizedCharacters;
}