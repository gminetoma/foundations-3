"use strict";

// WRITE YOUR CODE HERE

// Warmup
function withdraw(toWithdraw = 0) {
  this.balance -= toWithdraw;
}

function deposit(toDeposit = 0) {
  this.balance += toDeposit;
}

function checkStatus() {
  console.log(`Hello ${this.name}, Your current balance is ${this.balance}`);
}

function openBankAccount(name = "") {
  return {
    name,
    balance: 0,
    withdraw: withdraw,
    deposit: deposit,
    checkStatus: checkStatus,
  };
}

let account = openBankAccount("Zeke");
account.deposit(16000);
account.withdraw(78);
account.checkStatus(); // Hello, Zeke! Your current balance is 15922
