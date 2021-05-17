class Person {
  constructor() {
    this.name = "MyName";
  }
  printName() {
    console.log(this.name + " In Person");
  }
}
const person = new Person();
person.printName();
//........................................

class Car extends Person {
  //constructor() {
  //  this.model = "Corolla";
  //}
  //** IF CONSTRUCTOR IS NOT DEFINED, JS AUTO DEFINES IT. */
  model = "Corolla";
  year = 1997;

  printModel() {
    console.log(this.model, this.year + " In Car");
  }
}
const car = new Car();
car.printModel();

//.................................................
class Owner extends Car {
  constructor() {
    super();
    this.home = "MyHome";
  }
  printHome() {
    console.log(this.home + " In Owner");
  }
}
const owner = new Owner();
owner.printHome();
owner.printModel();
owner.printName();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...