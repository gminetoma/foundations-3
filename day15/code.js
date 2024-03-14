"use strict";

// WRITE YOUR CODE HERE

const createButton = () => {
  const button = document.createElement("button");

  let counter = 0;

  const increment = () => {
    counter++;
    button.innerText = counter;
  };

  const decrement = () => {
    if (counter > 0) {
      counter--;
      button.innerText = counter;
    }
  };

  const buttonHandle = (event) => {
    if (event.shiftKey) {
      decrement();
    } else {
      increment();
    }
  };

  button.innerHTML = "Click Me!";
  button.addEventListener("click", (event) => buttonHandle(event));

  return { html: button, increment, decrement };
};

const keyboardHandle = (event, button) => {
  if (event.code === "ArrowUp") {
    button.increment();
  } else if (event.code === "ArrowDown") {
    button.decrement();
  }
};

const main = (event) => {
  const button = createButton();
  document.body.append(button.html);

  window.addEventListener("keydown", (event) => keyboardHandle(event, button));
};

window.addEventListener("load", (event) => main(event));
