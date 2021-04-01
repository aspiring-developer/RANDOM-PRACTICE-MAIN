// let generateBtn = document.querySelector("#generate"); // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  let complexity = document.getElementById("slider").value;
  let values =
    "#$%&'()*+,-./:;<=>?@[]^_`{|}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  document.getElementById("display").value = password;
}
