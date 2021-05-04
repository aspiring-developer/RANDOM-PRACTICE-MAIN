const characterCounterEl = document.querySelector('#characterCounter');
const lowerCheckboxEl = document.querySelector('#lowerCheckbox');
const upperCheckboxEl = document.querySelector('#upperCheckbox');
const numberCheckboxEl = document.querySelector('#numberCheckbox');
const specialCheckboxEl = document.querySelector('#specialCheckbox');
const passwordResultEl = document.querySelector('#passwordResult');
const passwordButtonEl = document.querySelector('#passwordButton');

const lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
const copyCharacter = lowerCaseCharacter;
const upperCaseCharacter = copyCharacter.toUpperCase();
const specialCharacter = "!#$%&?@_";
const numberCharacter = "0123456789";

passwordButtonEl.addEventListener('click', generatePassword);
function generatePassword() {
  let checkedCharacters = '';

  // Checking and restricting allowed character count
  if (characterCounterEl.value < 8 || characterCounterEl.value > 128) {
    characterCounterEl.value = '';
    characterCounterEl.focus();
    alert("Please enter between 8 to 128 number only!");
  }

  // Checking if the character option is checked or not
  if (!lowerCheckboxEl.checked && !upperCheckboxEl.checked && !numberCheckboxEl.checked && !specialCheckboxEl.checked) {
    alert("You must check at least one character option!");
  }

  // Collecting selected character option
  if (lowerCheckboxEl.checked) { checkedCharacters += (lowerCaseCharacter); }
  if (upperCheckboxEl.checked) { checkedCharacters += (upperCaseCharacter); }
  if (numberCheckboxEl.checked) { checkedCharacters += (numberCharacter); }
  if (specialCheckboxEl.checked) { checkedCharacters += (specialCharacter); }

  //console.log(checkedCharacters);
  //console.log(checkedCharacters.length);

  // Randomizing selected characters
  let randomizedCharacters = '';
  function randomizeFunc(receivingCharacters) {
    for (let i = 0; i < characterCounterEl.value; i++) {
      randomizedCharacters += checkedCharacters.charAt(Math.random() * checkedCharacters.length);
    }
    console.log(randomizedCharacters);
    passwordResultEl.value = randomizedCharacters;
    return randomizedCharacters;
  }
  randomizeFunc(checkedCharacters);
}
//****************************************** */

function generateRandomNumber(numberOfCharacters) {
  var randomValues = '';
  var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
  for (var i = 0; i < numberOfCharacters; i++) {
    randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * stringValues.length));
  }
  return randomValues;
}
console.log(generateRandomNumber(8));






