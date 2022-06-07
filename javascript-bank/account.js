/* exported Account */
// implement constructor function Account with two parameters number and holder
// assign value of number to number property of this object
// assign value of holder to holder property of this object
// assign value of empty array to transactions property of this object
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// add a function deposit to Account prototype with one parameter amount
// initalize a new Transaction constructor object and assign to variable depositTransaction
// if amount is a positive integer, then push depositTransaction object to transactions array of this object and return true
// else return false
Account.prototype.deposit = function (amount) {
  var depositTransaction = new Transaction('deposit', amount);
  if (depositTransaction.amount > 0 && Number.isInteger(depositTransaction.amount)) {
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }
};

// add a function withdraw to Account prototype with one parameter amount
// initalize a new Transaction constructor object and assign to variable withdrawTransaction
// if amount is a positive integer, then push withdrawTransaction object to transactions array of this object and return true
// else return false
Account.prototype.withdraw = function (amount) {
  var withdrawTransaction = new Transaction('withdrawal', amount);
  if (withdrawTransaction.amount > 0 && Number.isInteger(withdrawTransaction.amount)) {
    this.transactions.push(withdrawTransaction);
    return true;
  } else {
    return false;
  }
};

// add a function getBalance to Account prototype with no parameter
// initalize variable balance with value 0
// for each index i from 0 to less than length property of transactions property of this object
// if type property of transactions at i of this object is strictly equal to string deposit, add amount to balance
// else if type property of transactions at i of this object is strictly equal to string withdrawal, subtract amount from balance
// return balance
Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
