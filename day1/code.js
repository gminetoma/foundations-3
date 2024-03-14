console.log("ASSIGNMENT NAME");

// WRITE YOUR CODE HERE

let name = "Bojack";

if (name === "Gustavo") {
  console.log("Hello!");
} else {
  console.log("Sorry, I don't know you.");
}

let min = 1024;
let max = 16384;

let number = 1025;

if (number > min && number < max) {
  console.log("In range");
} else {
  console.log("Out of range");
}

//Leap Year
let year = 700;
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

//4
let age = 19;
console.log(age >= 20);

//5
let password = "password";
if (password === "password") {
  console.log("Correct! Welcome.");
} else {
  console.log("Incorrect password, please try again.");
}

//6
let variable = "string";
let typeOfVariable = typeof variable;
if (!(typeOfVariable === "number" || typeOfVariable === "boolean" || typeOfVariable === "string")) {
  typeOfVariable = "something else";
}
console.log("This is " + typeOfVariable);

//7
let language = "spanish";
let message = "";

switch (language) {
  case "english":
    message = "Hello, Kitty";
    break;
  case "japanese":
    message = "Konnichwa, Neko";
    break;
  case "spanish":
    message = "Hola, Gato";
    break;
}

console.log(message);

//8

console.log(Math.random() <= 0.3 ? true : false);

//9

let ex9 = (age) => {
  let message = "You can";
  if (age < 15) {
    message += " only exist.";
  } else if (age === 15) {
    message += " drive.";
  } else if (age <= 18) {
    message += " drive and vote.";
  } else if (age <= 25) {
    message += " drive, vote and rent a car.";
  } else if (age <= 35) {
    message += " drive, vote, rent a car and be president.";
  }
  return message;
};

let ex10 = () => {
    let secondsSince1970 = new Date().getTime() / 1000;
    let remainder = secondsSince1970 % 65;
    let trafficLightColor = "";

    if (remainder <= 20){
        trafficLightColor = "Green";
    } else if(remainder > 20 && remainder <=25){
        trafficLightColor = "Yellow";
    } else {
        trafficLightColor = "Red";
    }

    return trafficLightColor;
}

console.log(ex9(25));
console.log(ex10());