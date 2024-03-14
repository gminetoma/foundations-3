"use strict";

// WRITE YOUR CODE HERE

// Warmup
// const letterPoints = {
//     A: 1, B: 3, C: 3, D: 2, E: 1,
//     F: 4, G: 2, H: 4, I: 1, J: 8,
//     K: 5, L: 1, M: 3, N: 1, O: 1,
//     P: 3, Q: 10, R: 1, S: 1, T: 1,
//     U: 1, V: 4, W: 4, X: 8, Y: 4,
//     Z: 10,
//   };

const scoreCheck = (string) => {
  let score = 0;

  for (const char of string) score += letterPoints[char];

  return score;
};

// console.log(scoreCheck("FEUDAL")); // --> 10
// console.log(scoreCheck("DIOXIDE")); // --> 16
// console.log(scoreCheck("AND")); // --> 4
// console.log(scoreCheck("KWYJIBO")); // --> 26

const changeTitle = (string) => {
  document.getElementById("page-title").innerText = string;
};

changeTitle("State facts");

const getRectangleStates = () => {
  const statesList = document.getElementById("state-list").children;
  const statesArray = [];

  for (const states of statesList) {
    statesArray.push(states.innerText);
  }

  return statesArray;
};

const getFacts = () => {
  const facts = document.getElementsByClassName("fact");
  const factsList = [];

  for (const fact of facts) {
    factsList.push(fact.innerText);
  }

  return factsList;
};

const changeStateList = (htmlString) => {
  const states = document.getElementById("state-list");
  states.innerHTML = htmlString;
};

console.log(getRectangleStates());
console.log(getFacts());

const htmlString = `
<li>Something Else 1</li>
<li>Something Else 2</li>
`;

changeStateList(htmlString);
