/////////////////////////////////////////////////////
console.log("Study # 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2; // NOT invoking, BUT returning function definition!
}
const generatedFunc = instructionGenerator();
console.log(generatedFunc); // RESULT -->  Returns whole function definition like below:
/* ƒ multiplyBy2(num) {
  return num * 2;
} */
console.log(generatedFunc(3)); // RESULT -->  6
/////////////////////////////////////////////////////
console.log("Study # 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter() // Invoking function in the same scope where it was declared
}
outer();
console.log(outer()); // RESULT --> Undefined

/////////////////////////////////////////////////////
console.log("Study # 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");




/////////////////////////////////////////////////////
console.log("Study # 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");




/////////////////////////////////////////////////////




/////////////////////////////////////////////////////
