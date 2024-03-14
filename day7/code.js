"use strict";

// WRITE YOUR CODE HERE

// Warmup
let rollADice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let flipACoin = () => {
  return Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails";
};

let rollCheatingDice = (number) => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber > 6 ? number : randomNumber;
};

// console.log(rollADice());
// console.log(flipACoin());
// console.log(rollCheatingDice(6));

// exercise
let getLengths = (array) => {
  let result = [];
  for (const element of array) {
    result.push(element.length);
  }
  return result;
};

let charCount = (array) => {
  return getLengths(array);
};

let charCount2 = (array = [], charToCount = "") => {
  let count = 0;
  for (const element of array) {
    for (const char of element) {
      char === charToCount && count++;
    }
  }
  return count;
};

// console.log(
//   getLengths([
//     [1, 2, 3],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4, 5],
//   ])
// );
// console.log(charCount(["cat", "monkey", "hippopotamus"]));
// console.log(charCount2(["cat", "monkey", "hippopotamus"], "o"));

// JavaScript Problem Set #2
let anyoneThere = (array = []) => {
  return array.length !== 0;
};

let addTheEnds = (array = []) => {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + array[array.length - 1];
  }
};

let thisSparksJoy = (array = []) => {
  let newArray = [];
  for (const number of array) {
    number >= 0 && newArray.push(number);
  }
  return newArray;
};

let isLetter = (string = "") => {
  return string.length === 1 && string.toUpperCase() !== string.toLowerCase();
};

let secondWordStartsWith = (string = "") => {
  let firstChar = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] === " ") {
      return string[index + 1];
    }
  }
};

let previewText = (string = "") => {
  if (string.length > 100) {
    let newString = "";
    for (let index = 0; index < 100; index++) {
      newString += string[index];
    }
    return (newString += "...");
  }
  return string;
};

let numJoiner = (array = []) => {
  let newArray = [];
  for (const element of array) {
    let sum = 0;
    for (const number of element) {
      sum += number;
    }
    newArray.push(sum);
  }
  return newArray;
};

let upToTwenty = (number) => {
  let numbers = [];
  for (let counter = number; counter <= 20; counter++) {
    numbers.push(counter);
  }
  return numbers;
};

let containsTwo = (items = [], value) => {
  let counter = 0;
  for (const item of items) {
    if (item === value) counter++;
    if (counter === 2) return true;
  }
  return false;
};

let tellMeQuickly = (string) => {
  let newString = "";
  for (let word of string.split(" ")) {
    newString += word[0];
  }
  return newString;
};

let sentenceSplit = (string) => {
  let sentences = [];
  let endPunctuations = [".", "?", "!"];
  let isStartingNewSentence = true;
  let sentence = "";
  for (const char of string) {
    if (isStartingNewSentence && char === " ") continue;
    else if (isStartingNewSentence && char !== " "){
        sentence = "";
        isStartingNewSentence = false;
    }
    for (const endPunctuation of endPunctuations) {
      if (char === endPunctuation) {
        isStartingNewSentence = true;
        break;
      }
    }
    sentence += char;
    if (isStartingNewSentence) sentences.push(sentence);
  }
  return sentences;
};

console.log(anyoneThere([1, 2, 3])); // true
console.log(anyoneThere([])); // false
console.log(addTheEnds([1, 3, 5]));
console.log(addTheEnds([4]));
console.log(addTheEnds([]));
console.log(thisSparksJoy([1, 2, -5, 7, -100])); // [1, 2, 7]
console.log(isLetter("a")); // true
console.log(isLetter("b")); // true
console.log(isLetter("bee")); // false
console.log(isLetter("2")); // false
console.log(secondWordStartsWith("this is an example")); // i
console.log(previewText("This movie is about adventure, I guess."));
// returns "This movie is about adventure, I guess"
console.log(
  previewText(
    "This movie is about a group of space explorers, stranded on a strange planet full of danger, mystery, and silicon based life forms!"
  )
);
// returns "This movie is about a group of space explorers, stranded on a strange planet full of danger, mystery..."
console.log(
  numJoiner([
    [1, 2],
    [3, 3],
    [5, 0],
  ])
); // [3, 6, 5]
console.log(upToTwenty(12)); // [12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(upToTwenty(19)); // [19, 20]
console.log(containsTwo([1, 2, 3, 4, 5], 2));
// false, because it only contains one 2.
console.log(containsTwo([1, 4, 4, 2, 5, 4, 7], 4));
// true, because there are three 4's and that is more than two.
console.log(tellMeQuickly("Hello, I am a cat")); // "HIaac"
let sentence = "Hello? This is my story! Please enjoy at your leisure.";
console.log(sentenceSplit(sentence));
// [
//   "Hello?",
//   "This is my story!",
//   "Please enjoy at your leisure."
// ]
