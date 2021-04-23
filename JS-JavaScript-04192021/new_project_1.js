'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterMenuItem, mainMenuItem) {
    return [this.starterMenu[starterMenuItem], this.mainMenu[mainMenuItem]]
  }

};
console.log(restaurant);
let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

//SWITCHING VARIABLES
[main, secondary] = [secondary, main]
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter + " AND " + mainCourse);












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
