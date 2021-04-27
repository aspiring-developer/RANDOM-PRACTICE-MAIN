// Object
let car = {
  name: "Toyota",
  model: "Corolla",
  year: 1997,
  hasWifi: false
}
for (let i in car) {
  console.log(car[i]);
}

/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// Array
let car1 = [
  "Toyota",
  "Corolla",
  1997,
  false
]
for (let j of car1) {
  console.log(j);
  //console.log(j);
}

/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

/////////////////////////////////////////////
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')