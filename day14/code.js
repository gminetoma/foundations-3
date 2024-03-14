"use strict";

// WRITE YOUR CODE HERE

const simpleStart = (numberParam) => {
  const number = numberParam;
  return () => {
    return number;
  };
};

let foo = simpleStart(42);
console.log(typeof foo); // function
console.log(foo()); // 42
console.log(foo()); // 42
console.log(foo()); // 42

const slowSilencer = (stringParam) => {
  let string = stringParam;
  return () => {
    string = string.slice(0, -1);
    return string;
  };
};

let speak = slowSilencer("Greetings!");
console.log(speak()); // Greetings
console.log(speak()); // Greeting
console.log(speak()); // Greetin
console.log(speak()); // Greeti
console.log(speak()); // Greet
console.log(speak()); // Gree

const createTaxChecker = (taxMultiplierParam) => {
  return (number) => {
    return (number * taxMultiplierParam).toFixed(2);
  };
};

let townsvilleTax = createTaxChecker(1.1);
let citytropolisTax = createTaxChecker(1.08);

console.log(townsvilleTax(100)); // 110
console.log(citytropolisTax(100)); // 108
