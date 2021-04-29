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
