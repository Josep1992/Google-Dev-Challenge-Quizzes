// Directions:
// Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

// if flavor is set to vanilla or chocolate and
// if vessel is set to cone or bowl and
// if toppings is set to sprinkles or peanuts
// If the above conditions are true, then print out:

// I'd like two scoops of __________ ice cream in a __________ with __________.
// Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,

// I'd like two scoops of vanilla ice cream in a cone with peanuts.
// TIP: Make sure to test your code with different values. For example,

// If flavor equals "chocolate", vessel equals "cone" and toppings equals "sprinkles", then "I'd like two scoops of chocolate ice cream in a cone with sprinkles." should be printed to the console.

// Your Code:

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "cookies";

// Add your code here

if (flavor === "vanilla" || flavor === "chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "sprinkles" || toppings === "peanuts") {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + " .");
}