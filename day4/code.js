//console.log("ASSIGNMENT NAME");
// WRITE YOUR CODE HERE

let square = (number) => {
  return number ** 2;
};

let getLast = (string = "") => {
  return string[string.length - 1];
};

let properCaps = (string = "") => {
  return string[0].toUpperCase() + string.substring(1) + (string.endsWith(".") ? "" : ".");
};

console.log(square(10));
console.log(getLast("Hello!"));
console.log(properCaps("i like monkeys"));

// Arrays: Exercises
let log = (array = []) => {
  array.forEach((currentElement) => console.log(currentElement));
};

let oneToTen = () => {
  let counter = 1;
  let newArray = [];
  while (counter <= 10) {
    newArray.push(counter);
    counter++;
  }
  return newArray;
};

let everyOtherLog = (array = []) => {
  array.forEach((currentElement, currentIndex) =>
    currentIndex % 2 === 0 ? console.log(currentElement) : undefined
  );
};

let sum = (array = []) => {
  let initialValue = 0;
  return array.reduce((totalSum, currentValue) => totalSum + currentValue, initialValue);
};

log(["Hello", "World", "!"]);
console.log(oneToTen());
everyOtherLog(oneToTen());
console.log(sum([42, 100, 1]));

// JavaScript Problem Set #1
let add = (number1, number2) => {
  return number1 + number2;
};

let weatherStatus = (temperature, isRaining) => {
  return (
    "It is " +
    temperature +
    " degree" +
    (temperature !== 1 ? "s" : "") +
    " and it is " +
    (isRaining ? "currently raining." : "not raining.")
  );
};

let doesListHaveString = (stringArray = [], string) => {
  return stringArray.includes(string);
};

let doesListMostlyHaveString = (stringArray = [], string) => {
  return (
    stringArray.filter((currentElement) => currentElement === string).length >
    stringArray.length / 2
  );
};

let phoneBookLookup = (names = [], character) => {
  return names.filter((currentElement) => currentElement[0] === character);
};

let containsSnakeEyes = (rolls = []) => {
  let lastElement = 0;
  for (const currentElement of rolls) {
    if (currentElement === 1 && currentElement === lastElement) {
      return true;
    }
    lastElement = currentElement;
  }
  return false;
};

let rightDownTheMiddle = (array = []) => {
  return array.map((currentArray) => currentArray[1]);
};

let isShoutingTooMuch = (string = "") => {
  let characterCounter = 0;
  for (const character of string) {
    if (character.toLowerCase() !== character) {
      characterCounter++;
    }
  }
  return characterCounter > string.length / 2;
};

let oppositeDay = (string = "") => {
  let newString = "";
  for (const character of string) {
    newString +=
      character.toLowerCase() === character ? character.toUpperCase() : character.toLowerCase();
  }
  return newString;
};

let noDoubles = (array = []) => {
  let currentIndex = 0;
  for (const value of array) {
    if (array.findLastIndex((element) => element === value) !== currentIndex) {
      return false;
    }
    currentIndex++;
  }
  return true;
};

console.log(weatherStatus(10, false));
console.log(doesListHaveString(["a", "b", "c", "b", "b", "b"], "a"));
console.log(doesListMostlyHaveString(["a", "b", "c", "b", "b", "b"], "b"));
console.log(phoneBookLookup(["Anne", "Andy", "Zeke"], "Z"));
console.log(containsSnakeEyes([4, 1, 5, 1, 1, 6]));
console.log(
  rightDownTheMiddle([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(isShoutingTooMuch("Uhh...hi?"));
console.log(oppositeDay("hEllO"));
console.log(noDoubles([5, 5, 6, 7]));
