/////////////////////////////////////////////////////
//console.log("Study # 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//function instructionGenerator() {
//  function multiplyBy2(num) {
//    return num * 2;
//  }
//  return multiplyBy2; // NOT invoking, BUT returning function definition!
//}
//const generatedFunc = instructionGenerator();
//console.log(generatedFunc); // RESULT -->  Returns whole function definition like below:
///* ƒ multiplyBy2(num) {
//  return num * 2;
//} */
//console.log(generatedFunc(3)); // RESULT -->  6
/////////////////////////////////////////////////////
//console.log("Study # 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
//function outer() {
//  let counter = 0;
//  function incrementCounter() {
//    counter++;
//  }
//  incrementCounter() // Invoking function in the same scope where it was declared
//}
//outer();
//console.log(outer()); // RESULT --> Undefined

/////////////////////////////////////////////////////
//console.log("~~~~~ Study # 3 Lexical Scoping ~~~~~");

//function init() {
//  let name = 'Mozilla'; // name is a local variable created by init
//  function displayName() { // displayName() is the inner function, a closure
//    console.log(name); // use variable declared in the parent function
//  }
//  displayName();
//}
//init();
/////////////////////////////////////////////////////
//console.log("~~~~~ Study # 4 Actual Closure ~~~~~");

//function makeFunc() {
//  let name = 'Firefox';
//  function displayName() {
//    console.log(name);
//  }
//  console.log(displayName);
//  return displayName;
//}
//let myFunc = makeFunc();
////console.log(myFunc);
////console.log(makeFunc);
////console.log(makeFunc());
//myFunc();

/////////////////////////////////////////////////////
//console.log("~~~~~ Study # 5 Another Closure Example ~~~~~");

//function makeAdder(x) {
//  return function (y) {
//    return x + y;
//  };
//}

//let add5 = makeAdder(5);
//let add10 = makeAdder(10);

//console.log(add5(2));  // 7
//console.log(add10(2)); // 12
/////////////////////////////////////////////////////
//console.log("~~~~~ TESTING ONLY ~~~~~");

//function makeAdderTest(x) {
//  function inner(y) {
//    console.log(x + y);
//    return x + y;
//  };
//  return inner;
//}

//let add5Test = makeAdderTest(5);
//let add10Test = makeAdderTest(10);

//console.log(add5Test(2));  // 7
//console.log(add10Test(2)); // 12



/////////////////////////////////////////////////////
//{
//  // do some job with local variables that should not be seen outside

//  var message = "Hello"; // only visible in this block

//  console.log(message); // Hello
//}

//console.log(message); // Error: message is not defined


/////////////////////////////////////////////////////
console.log("~~~~~ TESTING ONLY ~~~~~");

function makeCounter(x) {
  let count = 0;
  return function (y) {
    return count++ * (x + y);
  };
}
let counter = makeCounter(2);
console.log(counter(1)); // 0
console.log(counter(2)); // 4
console.log(counter(3)); // 10
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//function f() {
//  let value = 123;

//  return function () {
//    console.log(value);
//    return value + 1;
//  }
//}

//let g = f();
//console.log(g, "What is this?");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function f() {
  let value = Math.random();

  return function () { alert(value); };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let arr = [f(), f(), f()];
console.log(arr)

/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function f1() {
  let value1 = 123;

  return function () {
    console.log(value1);
  }
}

let g1 = f1(); // while g function exists, the value stays in memory
console.log(g1)
g1 = null; // ...and now the memory is cleaned up
console.log(g1)

/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function f2() {
  let value2 = Math.random();

  function g2() {
    let value2 = 123;
    //debugger; // in console: type alert(value2); No such variable!
  }
  return g2;
}

let g2 = f2();
console.log(g2());

/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // What will it show: "John" or "Pete"?  ANSWER: Hi, Pete
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function makeWorker1() {
  let name1 = "Pete";

  return function () {
    console.log(name1);
  };
}

let name1 = "John";

// create a function
let work1 = makeWorker1();

// call it
work1(); // what will it show?  ANSWER: Pete

/////////////////////////////////////////////////////

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");



/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");