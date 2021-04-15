const characterCounterEl = document.querySelector('#characterCounter');
const lowerCheckboxEl = document.querySelector('#lowerCheckbox');
const numberCheckboxEl = document.querySelector('#numberCheckbox');
const specialCheckboxEl = document.querySelector('#specialCheckbox');
const passwordResultEl = document.querySelector('#passwordResult');
const passwordButtonEl = document.querySelector('#passwordButton');

passwordButtonEl.addEventListener('click', generatePassword);
function generatePassword() {
const lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const copyCharacter = lowerCaseCharacter.slice(0);
let upperCaseCharacter = copyCharacter.map(function(eachChar) {
return eachChar.toUpperCase();
});

const specialCharacter = ["'!','#','$','%','&','?','@','_'"];
const numberCharacter = [0,1,2,3,4,5,6,7,8,9];
console.log(lowerCaseCharacter)
//console.log(copyCharacter)
console.log(upperCaseCharacter)
console.log(specialCharacter)
console.log(numberCharacter)
  console.log("The function is working...!")
}