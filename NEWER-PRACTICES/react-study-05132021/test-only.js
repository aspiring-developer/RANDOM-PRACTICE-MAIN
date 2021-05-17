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
  constructor() {
    this.model = "Corolla";
  }
  printModel() {
    console.log(this.model);
  }
}
const car = new Car();
car.printModel();
