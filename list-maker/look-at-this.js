const getTextBox = () => {
  return document.getElementById("text-box");
};

const resetState = () => {
  getErrorText().innerText = "";
  getTextBox().value = "";
};

const getErrorText = () => {
  return document.getElementById("error-text");
};

// This function should return the <ul> tag.
// How can you do that using DOM methods?
let getUlElement = () => {
  // displayError("You need to write the code for getUlElement()!");
  return document.getElementById("list-of-things");
};

// This function should return the string that is currently typed in the text
// box. The <textarea> DOM element has a field called .value
let getTextFromTextBox = () => {
  // displayError("You need to write the code for getTextFromTextBox()!");
  return getTextBox().value;
};

// This function should create and return a new <li> DOM Element that contains
// the given text.
let createLiElement = (str) => {
  // displayError("You need to write the code for createLiElement()!");
  const liElement = document.createElement("li");
  liElement.innerText = str;
  return liElement;
};

// This function will be called when the user presses the Remove button.
// It should remove the LAST item from the <ul> element. If the <ul> list is
// empty, this function should do nothing.
let removeHasBeenPushed = () => {
  let listElement = getUlElement();

  // Remove the last item from the list.
  // displayError("You need to write the code for removeHasBeenPushed()!");
  if (listElement.children.length > 0) {
    listElement.removeChild(listElement.lastChild);
  } else {
    getErrorText().innerText = "You need something to remove!";
    return;
  }

  resetState();
};

// This function will be called when the user presses the Add button.
// It should add a new <li> element to the <ul> element.
// The text of the <li> element should be what the user entered in the text-box.
let addHasBeenPushed = () => {
  let listElement = getUlElement();
  let message = getTextFromTextBox();
  let newLiElement = createLiElement(message);

  // add newLiElement to the list.
  // displayError("You need to write the code for addHasBeenPushed()!");

  if (message !== "") {
    listElement.append(newLiElement);
  } else {
    getErrorText().innerText = "You need to type something!";
    return;
  }

  resetState();
};
