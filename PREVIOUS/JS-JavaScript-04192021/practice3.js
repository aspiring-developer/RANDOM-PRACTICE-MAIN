//'use strict';
//////////////////////////////////////////////////////

//const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//// ignore error
//// find min and min value
//// subtract min from max

//function temperature(num) {
//  let max = -1000000;
//  let min = 1000000;
//  for (let i = 0; i < num.length; i++) {

//    if (num[i] > max) { max = num[i] };
//    if (num[i] < min) { min = num[i] };
//  }
//  let amplitude = max - (-min);

//  //******************************/
//  function second() {
//    let name = "Me";
//    console.log(name + " <--From second function")
//  }
//  second();
//  //********************************/
//  console.log(max, min, amplitude);
//  return { max, min, amplitude };
//}
//console.log(temperature(temp));

//////////////////////////////////////////////////////
//const calcAge = function (birthYear) {
//  //'use strict';
//  //console.log(2037 - birthYear);
//  console.log(this);
//}
//calcAge(1991);
//////////////////////////////////////////////////////
//function test(yob) {
//  'use strict';
//  //console.log(2037 - yob);
//  console.log(this);
//}
//test(1991);
//////////////////////////////////////////////////////
//const test2 = (year) => {
//  //'use strict';
//  //console.log(2037 - year);
//  console.log(this);
//}
//test2(1991);

//////////////////////////////////////////////////////
//const jonas = {
//  firstName: 'jonas',
//  year: 1991,
//  calcAge: function () {
//    console.log(this);
//  }
//}
//jonas.calcAge();

//
//////////////////////////////////////////////////////
// Destructuring Array
const fruits = ["apple", "orange", "banana", "mango"];
const [first, , , second] = fruits;
console.log(first, second);

//////////////////////////////////////////////////////
// Destructuring Object
const car = {
  name: "Toyota",
  models: ["Corolla", "Rav4", "Highlander", "Tacoma", "ABC"],
  price: [20000, 25000, 28000],
}
const [item1, item2] = car.price;
console.log(item1, item2)
//////////////////////////////////////////////////////
//Destructuring
let myArray = [10, 20, 30, 40, 50];

[a, b] = myArray;
console.log(a, myArray);

[a, b, ...c] = myArray;
console.log(a + " <--A | ", b + " <--B | ", c + " <--C");



//////////////////////////////////////////////////////


//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
