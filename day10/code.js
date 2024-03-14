"use strict";

// WRITE YOUR CODE HERE

// function speak() {
//   console.log("Hello");
// }

// function sleep() {
//   console.log(this.name + ", signing off!");
// }

// function wakeUp() {
//   console.log(this.name + ", reporting for duty");
// }

// function work() {
//   console.log("Working...");
// }

// let robot = {
//   speak: speak,
//   sleep: sleep,
//   wakeUp: wakeUp,
//   work: work,
// };

class Robot {
  #name = "";

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Hello");
  }

  sleep() {
    console.log(this.name + ", signing off!");
  }

  wakeUp() {
    console.log(this.name + ", reporting for duty");
  }

  work() {
    console.log("Working...");
  }
}

class EvilRobot extends Robot {
  constructor (name) {
    super(name);
  }

  wakeUp() {
    super.wakeUp();
  }

  work(){
    console.log("Killing all humans! Beep Boop.")
  }
}

function startRobot(robot) {
  if (robot instanceof Robot ) return console.log("That's not a robot!");


    console.log(robot.name)
  robot.wakeUp();
  robot.speak();
  robot.work();
  robot.sleep();
}

function createRobot(name) {
  // let robot = {
  //   name: name,
  //   speak: speak,
  //   sleep: sleep,
  //   wakeUp: wakeUp,
  //   work: work,
  // };

  return new Robot(name);
}

function createEvilRobot(name) {
  return new EvilRobot(name);
}

const robot1 = createRobot("TK421");
const robot2 = createRobot("MX120");
const robot3 = {};
const robot4 = createEvilRobot("EvilDOT3000")

startRobot(robot1);
console.log("-----------------------");
startRobot(robot2);
console.log("-----------------------");
startRobot(robot3);
console.log("-----------------------");
startRobot(robot4);
