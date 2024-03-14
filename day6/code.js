"use strict";

// WRITE YOUR CODE HERE

// warmup
let countDown = () => {
  for (let count = 100; count >= 1; count--) {
    console.log(count);
  }
  console.log("Lift off!");
};

let buildTriangle = (triangleSize) => {
  let row = "";
  for (let rowIndex = 0; rowIndex < triangleSize; rowIndex++) {
    row += "#";
    console.log(row);
  }
};

let buildReverseTriangle = (triangleSize) => {
  let triangle = ""; // Our triangle string
  // This for will decide the character quantity of each row of the triangle
  for (let characterQuantity = triangleSize; characterQuantity > 0; characterQuantity--) {
    // We can use method string.repeat() instead of the next for
    // triangle += "#".repeat(characterQuantity);
    // This loop is repeating the string "#"" using the character quantity of the last loop
    for (let characterCounter = 0; characterCounter < characterQuantity; characterCounter++) {
      triangle += "#";
    }
    // Finishing the line
    triangle += "\n";
  }
  // showing our string
  console.log(triangle);
};

// countDown();
// buildTriangle(5);
// buildReverseTriangle(5);

// Math.random(): Exercises
let dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let coinToss = () => {
  return Math.floor(Math.random() * 2) === 1;
};

let pickRandom = (array = []) => {
  return array[Math.floor(Math.random() * array.length)];
};

let shuffle = (array = []) => {
  let slicedArray = array;
  let maxIndex = array.length;
  let shuffledArray = [];

  let removeIndex = (array = [], popIndex) => {
    let tempArray = [];
    for (let index = 0; index < array.length; index++) {
      index !== popIndex && tempArray.push(array[index]);
    }
    return tempArray;
  };

  while (slicedArray.length !== 0) {
    let randomIndex = Math.floor(Math.random() * maxIndex);
    shuffledArray.push(slicedArray[randomIndex]);
    slicedArray = removeIndex(slicedArray, randomIndex);
    maxIndex--;
  }

  return shuffledArray;
};

console.log(dice());
console.log(coinToss());
console.log(pickRandom(["a", "b", "c", "d"]));
console.log(shuffle(["a", "b", "c", "d"]));
