// GOODNESS this is a lot of functions!
// Don't panic. Most of these should have solutions that are only 1 line long.

let tasks = [
  {
    name: "Finish creating To-Do list app",
    description: "I need to write the code for several functions.",
    isDone: false,
  },
];

// This function should add a new item to the end of your To-Do list
let createNewItem = (name, description) => {
  tasks.push({ name, description });
};

// This function should change the name for nth item in the list
let modifyItemName = (n, newName) => {
  tasks[n].name = newName;
};

// This function should change the description for nth item in the list
let modifyItemDescription = (n, newDescription) => {
  tasks[n].description = newDescription;
};

// This function should return the name of the nth item in the list.
let getItemName = (n) => {
  return tasks[n].name;
};

// This function should return the description of the nth item in the list.
let getItemDescription = (n) => {
  return tasks[n].description;
};

// This function should return the total number of items in your list.
let getNumberOfItems = () => {
  return tasks.length;
};

// This function should mark the item as completed.
let markItemAsDone = (n) => {
  tasks[n].isDone = true;
};

// This function should return whether or not the item is completed.
let isItemDone = (n) => {
  return tasks[n].isDone;
};

// This should delete the nth item in the list.
let deleteItem = (n) => {
  // Arrays have a method called ".splice()"
  // You should look up this method for inspiration.
  tasks.splice(n, 1);
};
