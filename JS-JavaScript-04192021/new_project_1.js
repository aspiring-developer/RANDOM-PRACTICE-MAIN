//'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuItem, mainMenuItem) {
    return [this.starterMenu[starterMenuItem], this.mainMenu[mainMenuItem]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    }
  },
  orderDelivery: function (obj) {
    console.log(obj)
  }

};
restaurant.orderDelivery({
  time: '22:30',
  address: "123 ABC Ln"
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


////////////////////////////////////////////////////////////////////////////////
//console.log(restaurant);
//let [main, , , secondary] = restaurant.categories;
//console.log(main, secondary);

////SWITCHING VARIABLES
//[main, secondary] = [secondary, main]
//console.log(main, secondary);

//// Receive 2 return values from a function
//const [starter, mainCourse] = restaurant.order(2, 0);
//console.log(starter + " AND " + mainCourse);
////////////////////////////////////////////////////////////////////////////////



function OuterFunction() {
  var outerVariable = 100;

  function InnerFunction() {
    console.log(outerVariable);
  }
  //return InnerFunction;
  InnerFunction();
}
//var innerFunc = OuterFunction();

//innerFunc(); // 100

OuterFunction();
////////////////////////////////////////////////////////////////////////////////
function Counter() {
  var counter = 0;

  function IncreaseCounter() {
      return counter++;
  };
  return IncreaseCounter;
}

var result = Counter();
console.log(result()); // 0
console.log(result()); // 1
////////////////////////////////////////////////////////////////////////////////
// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//openingHours: {
//  thu: {
//    open: 12,
//    close: 22,
//  },
//  fri: {
//    open: 11,
//    close: 23,
//  },
//  sat: {
//    open: 0, // Open 24 hours
//    close: 24,
//  },
//},

////////////////////////////////////////////////////////////////////////////////
