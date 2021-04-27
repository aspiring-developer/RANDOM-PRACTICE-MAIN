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
console.log("~~~~~ Study # 3 Lexical Scoping ~~~~~");

function init() {
  let name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
/////////////////////////////////////////////////////
console.log("~~~~~ Study # 4 Actual Closure ~~~~~");

function makeFunc() {
  let name = 'Firefox';
  function displayName() {
    console.log(name);
  }
  console.log(displayName);
  return displayName;
}
let myFunc = makeFunc();
//console.log(myFunc);
//console.log(makeFunc);
//console.log(makeFunc());
myFunc();

/////////////////////////////////////////////////////
console.log("~~~~~ Study # 5 Another Closure Example ~~~~~");

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
/////////////////////////////////////////////////////
console.log("~~~~~ TESTING ONLY ~~~~~");

function makeAdderTest(x) {
  function inner(y) {
    console.log(x + y);
    return x + y;
  };
  return inner;
}

let add5Test = makeAdderTest(5);
let add10Test = makeAdderTest(10);

console.log(add5Test(2));  // 7
console.log(add10Test(2)); // 12



/////////////////////////////////////////////////////
