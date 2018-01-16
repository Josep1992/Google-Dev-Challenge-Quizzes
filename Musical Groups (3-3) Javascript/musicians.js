// Musical groups have special names based on the number of people in the group.

// For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

// Directions:
// Write a series of conditional statements that:

// prints "not a group" if musicians is less than or equal to 0
// prints "solo" if musicians is equal to 1
// prints "duet" if musicians is equal to 2
// prints "trio" if musicians is equal to 3
// prints "quartet" if musicians is equal to 4
// prints "this is a large group" if musicians is greater than 4
// TIP: Make sure to test your code with different values. For example,

// If musicians equals 3, then trio should be printed to the console.
// If musicians equals 20, then this is a large group should be printed to the console.
// If musicians equals -1, then not a group should be printed to the console.


/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

// your code goes here

if (musicians <= 0) {
  console.log("not a group");
}
if (musicians === 1) {
  console.log("solo");
}
if (musicians === 2) {
  console.log("duet");
}
if (musicians === 3) {
  console.log("trio");
}
if (musicians === 4) {
  console.log("quartet");
}
if (musicians > 4) {
  console.log("this is a large group");
}