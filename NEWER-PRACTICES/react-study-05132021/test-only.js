class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name)
  }
}
const person = new Person("SSSss");
person.printName();
//........................................

class Car {
  //constructor() {
  //  this.model = "Corolla";
  //}

    model = "Corolla";
    year = 1997;

  printModel() {
    console.log(this.model, this.year);
  }
}
const car = new Car();
car.printModel();
