// Directions:
// Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// Remember that the "Test Run" button will display any logged content, so feel free to use console.log() to test your code.

// Your Code:
// 💥 Quiz Update!

// Based on student feedback, we've completely updated this quiz (on June 29th). If you've already completed this quiz, your previous solution will now be incorrect. Please feel free to take the quiz again if you'd like. 😀



/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function (num, i, arr) {

  if (num % 3 === 0) {
    arr[i] = num += 100;
  }



});

console.log(test);