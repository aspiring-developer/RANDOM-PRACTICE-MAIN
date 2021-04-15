const characterCounterEl = document.querySelector('#characterCounter');
const lowerCheckboxEl = document.querySelector('#lowerCheckbox');
const upperCheckboxEl = document.querySelector('#upperCheckbox');
const numberCheckboxEl = document.querySelector('#numberCheckbox');
const specialCheckboxEl = document.querySelector('#specialCheckbox');
const passwordResultEl = document.querySelector('#passwordResult');
const passwordButtonEl = document.querySelector('#passwordButton');
const eachCheckBoxEl = document.querySelectorAll('.eachCheckBox');

passwordButtonEl.addEventListener('click', generatePassword);

const lowerCaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const copyCharacter = lowerCaseCharacter.slice(0);
let upperCaseCharacter = copyCharacter.map(function (eachChar) {
  return eachChar.toUpperCase();
});

const specialCharacter = ['!', '#', '$', '%', '&', '?', '@', '_'];
const numberCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword() {
  selectedCharacter();
}


let checkedCharacters = [];
function selectedCharacter() {
  // Checking if the character option is checked or not
  if (!lowerCheckboxEl.checked && !upperCheckboxEl.checked && !numberCheckboxEl.checked && !specialCheckboxEl.checked) {
    alert("You must check at least one character option!");
  }

  // Collecting selected character option
  if (lowerCheckboxEl.checked) { checkedCharacters.push(lowerCaseCharacter); }
  if (upperCheckboxEl.checked) { checkedCharacters.push(upperCaseCharacter); }
  if (numberCheckboxEl.checked) { checkedCharacters.push(numberCharacter); }
  if (specialCheckboxEl.checked) { checkedCharacters.push(specialCharacter); }
console.log(checkedCharacters)

  // Randomising selected characters
  function randomizeCharacter(random) {
    let randomizedArray = [];
    for (let i = 0; i < checkedCharacters.length; i++) {
      randomizedArray.push(random[i].sort(() => Math.random() - 0.5));
    }
    //console.log(randomizedArray);

    // Processing randomized characters to generate password
    let abc = [];
    for (let k = 0; k < randomizedArray.length; k++) {
      abc.push(randomizedArray[k]);
      console.log(abc);
    }

    let newOne = [];
    for (let j = 0; j < abc.length; j++) {
      const elementJ = abc[j];
      //newOne.push(elementJ)
      //console.log(newOne);
      newOne = newOne.concat(elementJ)
      console.log(newOne);
      return newOne;
    }
    //console.log(elementJ + " <--elementJ")
  }
  randomizeCharacter(checkedCharacters);
}

