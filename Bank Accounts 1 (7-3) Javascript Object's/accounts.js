// Directions:
// Using the given object:

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   }
// };
// add a printAccountSummary() method that returns the following account message:

// Welcome!
// Your balance is currently $1000 and your interest rate is 1%.
// Your Code:


/*
 * Programming Quiz: Bank Accounts 1 (7-3) Javascript Object's
 */

let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function(){
      return ("Welcome!/n Your balance is currently $1000 and your interest rate is 1%.");
  }
};

console.log(savingsAccount.printAccountSummary());
