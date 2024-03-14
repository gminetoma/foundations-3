// console.log("ASSIGNMENT NAME");

// WRITE YOUR CODE HERE

// warmup
let findSum = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

let findAverage = (numbers = []) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total / numbers.length;
};

let findLargestNumber = (numbers = []) => {
  let largestNumber = 0;

  let index = 0;
  while (index < numbers.length) {
    if (numbers[index] > largestNumber) {
      largestNumber = numbers[index];
    }
    index++;
  }

  //   for (const number of numbers) {
  //     if (number > largestNumber) {
  //       largestNumber = number;
  //     }
  //   }

  return largestNumber;
};

// console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(findAverage([1, 6, 2, 4]));
// console.log(findLargestNumber([1, 6, 2, 4]));

// class exercises
let sumArray = (nums = []) => {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
};

let happyNewYear = () => {
  for (let i = 60; i > 0; i--) {
    console.log(i);
  }
  console.log("Happy New Year!");
};

let spell = (word) => {
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
  console.log("That spells " + word + "!");
};

// spell("Hello");
// console.log(sumArray([5, 5, 5]));
// happyNewYear();

// for loop exercises
let countUp = (number) => {
  for (let count = 1; count <= number; count++) {
    console.log(count);
  }
};

let reversePrint = (numbers) => {
  for (let index = numbers.length - 1; index >= 0; index--) {
    console.log(numbers[index]);
  }
};

let kerningLoop = (string) => {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    newString += index !== 0 ? " " + string[index] : string[index];
  }
  return newString;
};

let zip = (array1, array2) => {
  let newArray = [];

  // get the length of the bigger array
  let length = array1.length >= array2.length ? array1.length : array2.length;

  // use the length that we found
  for (let index = 0; index < length; index++) {
    // if javascript try arrayN[index] and DO NOT returns undefined
    // do the arrayN.push(). After the "&&" only executes if the condition
    // before is true
    array1[index] && newArray.push(array1[index]);
    array2[index] && newArray.push(array2[index]);
  }
  return newArray;
};

let printSquare = (squareSize, character) => {
  let square = "";
  for (let rowIndex = 1; rowIndex <= squareSize; rowIndex++) {
    for (let columnIndex = 1; columnIndex <= squareSize; columnIndex++) {
      square += character + (columnIndex === squareSize && rowIndex < squareSize ? "\n" : "");
    }
  }
  console.log(square);
};

countUp(5);
reversePrint(["Almond Eye", "Efforia", "Equinox"]);
console.log(kerningLoop("Cat"));
console.log(zip(["A", "B", "C", "D", "E"], ["1", "2", "3"]));
printSquare(5, "$");
