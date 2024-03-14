//console.log("ASSIGNMENT NAME");

// WRITE YOUR CODE HERE

function warm1(temperature) {
  let message = "This porridge is ";

  if (temperature < 50) {
    message += "too cold.";
  } else if (temperature > 60) {
    message += "too hot.";
  } else {
    message += "just right.";
  }

  console.log(message);
}

function warm2(tooSoft, tooHard) {
  let message = "This chair is ";

  if (!tooSoft && !tooHard) {
    message += "just right.";
  } else if (!tooSoft && tooHard) {
    message += "too hard.";
  } else if (tooSoft && !tooHard) {
    message += "too soft.";
  } else {
    message = "I think you just enjoy complaining.";
  }

  console.log(message);
}

function ex1(start, end) {
  let counter = start;
  while (counter <= end) {
    console.log(counter);
    counter++;
  }
}

function ex2(start, end) {
  let counter = start;
  while (counter >= end) {
    console.log(counter);
    counter--;
  }
}

function ex3(start, end) {
  let counter = start;
  while (counter <= end) {
    console.log(counter);
    counter += 3;
  }
}

function ex4(start, end) {
  let counter = start;
  while (counter <= end) {
    console.log(counter);
    counter *= 2;
  }
}

function ex5(start, end) {
  let counter = start;
  while (counter <= end) {
    console.log(counter);
    counter++;
  }
}

function ex6(start, end) {
  let string = start;
  console.log(string);
  while (string !== end) {
    string += "ha";
    console.log(string);
  }
}

function ex7(start = "", end) {
  let string = start;
  console.log(string);
  while (string !== end) {
    string = string.substring(1);
    console.log(string);
  }
}

function ex8(start = "", end) {
  let string = start;
  console.log(string);
  while (string.length < end) {
    string = "0" + string;
    console.log(string);
  }
}

function ex9(sentence) {
  let counter = 0;
  let index = 0;
  while (index < sentence.length) {
    if (sentence[index] === "e") {
      counter++;
    }
    index++;
  }
  console.log("Quantity of Es " + counter);
}

function ex10(sentence) {
  let counter = 0;
  let index = 0;
  while (index < sentence.length) {
    if (sentence[index] === " ") {
      counter++;
    }
    index++;
  }
  console.log("Quantity of words " + (counter + 1));
}

let whileLoop1 = (start, end, countBy) => {
  let counter = start;

  if (start < end) {
    while (counter <= end) {
      console.log(counter);
      counter += countBy;
    }
  } else {
    while (counter >= end) {
      console.log(counter);
      counter -= countBy;
    }
  }
};

let whileLoop2 = (message, quantity) => {
  let counter = 0;

  while (counter < quantity) {
    console.log(message);
    counter++;
  }
};

let whileLoop3 = (start, end) => {
  let counter = start;
  let sum = 0;

  while (counter <= end) {
    sum += counter;
    counter++;
  }

  return sum;
};

let whileLoop4 = (number = 0, search = 0) => {
  let stringNumber = number.toString();
  let stringSearch = search.toString();
  let index = 0;
  let containsSearch = false;

  while (index < stringNumber.length) {
    if (stringNumber[index] === stringSearch) {
      containsSearch = true;
      break;
    }
    index++;
  }

  return containsSearch;
};

let whileLoop5 = (triangleSize) => {
  let counter = 0;
  let string = "X";
  while (counter < triangleSize) {
    console.log(string);
    string += "X";
    counter++;
  }
};

let challengeWhile6 = (start, end, skipNumber) => {
  let stringSkipNumber = skipNumber.toString();
  let counter = start;
  let sum = 0;
  while (counter <= end) {
    let stringCounter = counter.toString();
    let tempCounter = 0;
    let skip = false;
    while (tempCounter < stringCounter.length) {
      if (stringCounter[tempCounter] === stringSkipNumber) {
        skip = true;
        break;
      }
      tempCounter++;
    }
    if (!skip) {
      sum += counter;
    }
    counter++;
  }
  return sum;
};

let challengeWhile7 = (sentence = "", whatToCount = "") => {
  let counter = 0;
  let index = 0;

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let wordStartIndex = 0;
  let wordEndIndex = 0;
  let isWordStart = false;

  while (index < sentence.length) {
    let currentChar = sentence[index];
    let nextChar = sentence[index + 1];
    let lastChar = sentence[index - 1];
    if (alphabet.includes(currentChar) && !isWordStart) {
      wordStartIndex = index;
      isWordStart = true;
    } else if (
      (alphabet.includes(currentChar) && nextChar === undefined) ||
      (!alphabet.includes(currentChar) && alphabet.includes(lastChar))
    ) {
      wordEndIndex = index;
      isWordStart = false;
      let currentWord = sentence.substring(
        wordStartIndex,
        nextChar === undefined && alphabet.includes(currentChar) ? wordEndIndex + 1 : wordEndIndex
      );
      console.log(currentWord);
      if (currentWord === whatToCount) {
        counter++;
      }
    }
    index++;
  }

  return counter;
};

let challengeWhile8 = () => {
  let number = 1;

  while (number <= 10) {
    let multiplier = 1;
    let result = number * multiplier;
    while (multiplier <= 10) {
      console.log(number + " x " + multiplier + " = " + result);
      multiplier++;
    }
    number++;
  }
};

let challengeWhile9 = (sideLength) => {
  let rowIndex = 1;
  while (rowIndex <= sideLength) {
    let columnIndex = 1;
    let columnString = "";
    while (columnIndex <= sideLength) {
      if (rowIndex === 1 || rowIndex === sideLength) {
        columnString += "X";
      } else {
        if (columnIndex === 1 || columnIndex === sideLength) {
          columnString += "X"
        } else {
          columnString += " ";
        }
      }
      columnIndex++;
    }
    console.log(columnString);
    rowIndex++;
  }
};

// whileLoop1(0, 10, 1);
// whileLoop1(1, 10, 1);
// whileLoop1(1, 100, 3);
// whileLoop1(100, 1, 1);
// whileLoop1(100, 1, 1);
// whileLoop1(100, 1, 3);
// whileLoop2("Hello!", 4);
// console.log(whileLoop3(1, 1000));
// console.log(whileLoop3(1, 1000000));
// console.log(whileLoop4(195714002, 7));
// whileLoop5(5);
// console.log(challengeWhile6(1, 10000, 7));
// console.log(challengeWhile7("the rain in spain mainly falls on the plain.", "the"));
// challengeWhile8();
// challengeWhile9(15);

// warm1(53);
// warm2(true, true);
// ex1(0, 20);
// ex2(20, 0);
// ex3(1, 100);
// ex4(1, 16777216);
// ex5(-1, 1);
// ex6("", "hahahaha")
// ex7("abcdefghijklmnopqrstuvwxyz", "")
// ex8("1234", 8)
// ex9("this is a sentence with many words.");
// ex10("this is a sentence with many words.");
