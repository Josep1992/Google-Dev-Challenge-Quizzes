// Directions:
// Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

// laugh(3);
// Returns: hahaha!

// Your Code:

// /*
//  * Programming Quiz: Laugh (5-4)
//  */

let laugh = function (num) {
  let ha = "";
  for (i = 0; i < num; i++) {
    ha += "ha";

  }

  return ha + "!";
};

console.log(laugh(3));