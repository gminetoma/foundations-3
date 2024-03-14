"use strict";

// WRITE YOUR CODE HERE

const countLetters = (string) => {
  const counter = {};

  for (const char of string) {
    if (counter[char]) counter[char]++;
    else counter[char] = 1;
  }

  return counter;
};

console.log(countLetters("salamander"));

const removeRepeats = (stringArray) => {
  return Object.keys(countLetters(stringArray));
};

console.log(removeRepeats(["a", "b", "c", "b", "a", "d"]));

const countVowels = (string) => {
  const vowels = { i: 0, o: 0, a: 0, e: 0, u: 0 };

  for (const char of string) {
    if (vowels[char] !== undefined) {
      vowels[char]++;
    }
  }

  return vowels;
};

console.log(countVowels("digging for apples"));

const checkDuplicated = (stringArray) => {
  //   for (const value of Object.values(countLetters(stringArray))) {
  //     if (value !== 1) return true;
  //   }
  //   return false;
  return Object.values(countLetters(stringArray)).reduce(
    (isDuplicated, value) => isDuplicated || value !== 1,
    false
  );
};

console.log(checkDuplicated(["Hello", "World", "Hello"]));
