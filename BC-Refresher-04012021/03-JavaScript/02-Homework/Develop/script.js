// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialCharacter = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbersList = "0123456789";

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (let i = 0; i < uppercaseLetters.length; i++) {
    let randomizedUppercase = uppercaseLetters.charAt(
      Math.floor(Math.random() * uppercaseLetters.length)
    );
    passwordText.innerHTML += randomizedUppercase;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
