// Directions:
// Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

// For example, if...

// var shirtWidth = 23; // size L (large)
// var shirtLength = 30; // size L (large)
// var shirtSleeve = 8.71; // size L (large)
// Then print L to the console.

// Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.

// If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. For example, if...

// var shirtWidth = 18; // size S (small)
// var shirtLength = 29; // size M (medium)
// var shirtSleeve = 8.47; // size M (medium)
// Then print N/A to the console because the measurements don't all match up with one particular size.

// TIP: Make sure to test your code with different values. For example,

// If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
// If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
// If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console.

// Your Code:

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 28;
var shirtLength = 35;
var shirtSleeve = 10.13;

// your code goes here
if (((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38))) {
  console.log("S");
} else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))) {
  console.log("M");
} else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))) {
  console.log("L");
} else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))) {
  console.log("XL");
} else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))) {
  console.log("2XL");
} else if (((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13))) {
  console.log("3XL");
} else {
  console.log("N/A");
  }