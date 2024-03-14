// console.log("ASSIGNMENT NAME");

// WRITE YOUR CODE HERE

function warmup1(endNumber) {
  let counter = 0;
  while (counter < endNumber) {
    console.log(counter + 1);
    counter++;
  }
}

function warmup2(eQuantity) {
  let counter = 0;
  let string = "";
  while (counter < eQuantity) {
    string += "E";
    counter++;
  }
  console.log(string);
}

// Function exercises

let max = (number1, number2) => {
  return (number1 >= number2) ? number1 : number2;
}

let min = (number1, number2) => {
  return (number1 <= number2) ? number1 : number2; 
}

let celsiusToFahrenheit = (celsius) => {
  return (celsius * 1.8) + 32;
}

let isEqual = (number1, number2) => {
  return number1 === number2;
}

let applyTax = (price, taxRate) => {
  return price * taxRate + price;
}

let asteriskCreator = (asteriskLength) => {
  let asterisks = "";
  let counter = 0;
  while (counter < asteriskLength){
    asterisks += "*";
    counter++
  }
  return asterisks;
}

let triangleCreator = (triangleLength) => {
  let counter = 1;
  while (counter < triangleLength){
    console.log(asteriskCreator(counter));
    counter++
  }
}

warmup1(5);
warmup2(40);

console.log(max(10, 3));
console.log(min(10, 3));
console.log(celsiusToFahrenheit(50));
console.log(isEqual(10, 10));
console.log(applyTax(300, 0.1));
console.log(asteriskCreator(5));
triangleCreator(6);
