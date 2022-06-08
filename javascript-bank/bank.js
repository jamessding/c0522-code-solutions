/* exported Bank */

// implement constructor function with two parameters nextAccountNumber and accounts
// assign 1 to nextAccountNumber property of this object
// assign empty array to accounts property of this object
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

// add function openAccount with two parameters holder and balance to Bank prototype
// if balance is a positive integer, create a new Account constructor object
// call the deposit function of newAccount object with argument balance
// push newAccount object into accounts property of this object
// increment nextAccountNumber property of this object
// return number property of newAccount object
// else return null
Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

// add function getAccount with parameter number to Bank prototype
// for each index i from 0 to less than length of accounts property of this object
// if number property of accounts at i of this object is strictly equal to number
// return accounts at i from this object
// return null at the end of the function
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

// add function getTotalAssets to Bank prototype
// if length of accounts property of this object is strictly equal to 0, return 0
// initalize sum variable with value 0
// for each index from 0 to less than length of accounts property of this object,
// add the balance of each account to sum variable
// return sum
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    sum += this.accounts[i].getBalance();
  }
  return sum;
};
