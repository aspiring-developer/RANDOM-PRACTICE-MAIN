const myAwesomeArray1 = [1, 2, 3, 4, 5];
myAwesomeArray1.forEach(x => x * x);
////>>>>>>>>>>>>>return value: undefined

//////////////////////////////////////////
const myAwesomeArray2 = [1, 2, 3, 4, 5];
let extracted = myAwesomeArray2.map(x => x * x);
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
console.log(extracted);

//////////////////////////////////////////
const myAwesomeArray3 = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]

for (let i of myAwesomeArray3) {
  //console.log(i);
  for (let j in i) {
    console.log(i[j]);
  }
}

//////////////////////////////////////////
let string = "Substring";
// takes range from starting index 3rd to 4th index
// RESULT st
console.log(string.substring(3, 5));
// takes characters count from starting index 3rd to 5 characters -- includes 3rd index
// RESULT strin
console.log(string.substr(3, 5));

//////////////////////////////////////////
function capitalize(word) {
  let wordLower = word.substring(1).toLowerCase();
  //console.log(wordLower);
  let wordUpper = word.substring(0, 1).toUpperCase();
  //console.log(wordUpper);

  let combined = wordUpper + wordLower;
  return combined;
}

//sample usage
console.log(capitalize("john")); //John
console.log(capitalize("BRAVO")); //Bravo
console.log(capitalize("GLAne")); //Glane

//function capitalize(word){
//  let wordLower = word.toLowerCase();
//  let wordUpper = wordLower[0].toUpperCase();
//  let combined = wordUpper + wordLower.substring(1);
//  return combined;
//}

////sample usage
//console.log(capitalize("john")); //John
//console.log(capitalize("BRAVO")); //Bravo
//console.log(capitalize("BLAne")); //Blane

////////////////////////////////////////////////////
//class Car {
//  constructor(make, model, year) {
//    this.make = make,
//      this.model = model,
//      this.year = year
//  }
//  drive() {
//    console.log(this.make + " " + this.model + " " + this.year + " drive this!");
//  }
//}
//let car1 = new Car("Toyota", "Corolla", 1997);
//car1.drive();
//console.log(car1);

////////////////////////////////////////////////////
class Car {
  constructor(make, model, year) {
    this.make = make,
      this.model = model,
      this.year = year
  }
  drive() {
    console.log(this.make + ", " + this.model + ", " + this.year + " was my first car!");
  }
}
let car1 = new Car("Toyota", "Corolla", 1997);
car1.drive();