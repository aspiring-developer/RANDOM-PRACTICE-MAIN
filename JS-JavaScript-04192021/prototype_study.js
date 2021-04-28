/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let user = {
  active: true
};

let teacher = {
  teaching: ["math", "science"]
};

Object.setPrototypeOf(teacher, user);
console.log(teacher.active);


/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let user1 = {
  active: true
};

let teacher1 = {
  teaching: ["math", "science"]
};

let student1 = {
  major: ["english", "arts"]
};

//let common = {function(schoolName) {
//schoolName = "Private School"
//}}

Object.setPrototypeOf(teacher1, user1);
Object.setPrototypeOf(student1, user1);
console.log(teacher1.active);
console.log(student1.active);
console.log(teacher1.teaching);
console.log(student1.major);




//Object.setPrototypeOf(common, student1);
//console.log(student1.active);

/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
/////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");