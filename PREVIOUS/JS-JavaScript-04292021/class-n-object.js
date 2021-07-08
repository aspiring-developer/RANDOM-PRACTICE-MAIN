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
  carInfo() {
    console.log(this.make + ", " + this.model + ", " + this.year + " was my first car!");
  }
}
let car1 = new Car("Toyota", "Corolla", 1997);
car1.carInfo();

//////////////////////////////////////////////////////
var emp = class Employee {
  constructor(id, empName) {
    this.id = id;
    this.empName = empName;
  }
};
emp.empName = "The person";
emp.id = 12;
document.writeln(`${emp.empName} with id ${emp.id} is awesome! `);
