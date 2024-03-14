"use strict";

// WRITE YOUR CODE HERE

// Warmup

function Restaurant(name, cuisine, rating, hasDriveThru) {
  this.name = name;
  this.cuisine = cuisine;
  this.rating = rating;
  this.hasDriveThru = hasDriveThru;
}

let restaurants = [
  new Restaurant("Olive Garden", "Italian", 4.2, false),
  new Restaurant("IHOP", "American", 3.1, false),
  new Restaurant("Panda Express", "Chinese", 4.0, true),
];

let pickRandomRestaurant = () => {
  let index = Math.floor(Math.random() * restaurants.length);
  let restaurant = restaurants[index];
  let driveThruMessage = "";

  console.log("I have chosen the " + restaurant.cuisine + " restaurant " + restaurant.name + ".");
  console.log("It has a review score of " + restaurant.rating + ".");

  if (restaurant.hasDriveThru) {
    driveThruMessage = "A drive-thru window is available.";
  } else {
    driveThruMessage = "There is no drive-thru.";
  }

  console.log(driveThruMessage);
};

// pickRandomRestaurant();

// JavaScript Problem Set #3

let getThird = (array = []) => {
  let item = array[2];

  if (item) {
    return item;
  }

  return "No item found.";
};

console.log(getThird(["corn", "tomato", "broccoli"])); // "broccoli"
console.log(getThird(["corn", "pineapple"])); // "No item found."

let checkFirstLetter = (string = "", char = "") => {
  if (string[0] === char) {
    return true;
  }

  return false;
};

console.log(checkFirstLetter("Marie", "M")); // true
console.log(checkFirstLetter("Marie", "m")); // false
console.log(checkFirstLetter("Ken", "P")); // false

let weighIn = (string1 = "", string2 = "") => {
  if (string1.length > string2.length) {
    return string1;
  } else if (string1.length < string2.length) {
    return string2;
  }

  return [string1, string2];
};

console.log(weighIn("cat", "meow")); // "meow"
console.log(weighIn("mouse", "duck")); // "mouse"
console.log(weighIn("moose", "goose")); // ["moose", "goose"]

let sometimesSum = (number1 = 0, number2 = 0) => {
  let sum = number1 + number2;

  if (sum >= 10 && sum <= 20) {
    return "Forbidden number";
  }

  return sum;
};

console.log(sometimesSum(1, 2)); // 3
console.log(sometimesSum(15, 2)); // "Forbidden number"
console.log(sometimesSum(20, 1)); // 21
console.log(sometimesSum(6, 14)); // "Forbidden number"

let quote = (anotherFunction = () => {}) => {
  return '"' + anotherFunction() + '", said the other function.';
};

let sayHello = () => {
  return "Hello";
};

console.log(quote(sayHello)); // "Hello", said the other function.

let swapEnds = (array = []) => {
  let firstElement = array[0];

  array.splice(0, 1, array[array.length - 1]);
  array.splice(array.length - 1, 1, firstElement);

  return array;
};

console.log(swapEnds([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]
console.log(swapEnds(["a", "b"])); // ["b", "a"]
console.log(swapEnds([true])); // [true]

let woohoo = (string = "") => {
  let counter = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index] === "o" && string[index - 1] === "o") {
      counter++;
    }
  }

  // for (const index in string) {
  //   if (string[index - 1] === "o" && string[index] === "o") {
  //     counter++;
  //   }
  // }

  return counter;
};

console.log(woohoo("good")); // 1
console.log(woohoo("oops")); // 1
console.log(woohoo("dog")); // 0
console.log(woohoo("ooooh")); // 3

let arrayToPerson1 = (array = []) => {
  return { name: array[0], age: array[1] };
};

console.log(arrayToPerson1(["Harvey", 4])); // should return { name: "Harvey", age: 4 }

let arrayToPerson2 = (array = []) => {
  if (typeof array[0] === "string") {
    return { name: array[0], age: array[1] };
  }

  return { name: array[1], age: array[0] };
};

console.log(arrayToPerson2(["Harvey", 4])); // should return { name: "Harvey", age: 4 }
console.log(arrayToPerson2([20, "Denise"])); // should return { name: "Denise", age: 20 }

let arrayToPeople = (array = []) => {
  let people = [];

  for (let index = 0; index < array.length; index += 2) {
    people.push(arrayToPerson2([array[index], array[index + 1]]));
  }

  return people;
};

console.log(arrayToPeople(["Harvey", 4, 20, "Denise"]));
// should return [{ name: "Harvey", age: 4 }, { name: "Denise", age: 20 }]

let createGrid = (widthSize = 0, heightSize = 0) => {
  let grid = [];

  for (let rowIndex = 0; rowIndex < widthSize; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < heightSize; columnIndex++) {
      row.push(false);
    }
    grid.push(row);
  }

  return grid;
};

console.log(createGrid(3, 3));
// [[false, false, false], [false, false, false], [false, false, false]]
