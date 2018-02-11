// Directions:
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
// Your Code:

/*
 * Programming Quiz: Facebook Friends (7-5) Javascript Object's
 */

// your code goes here



let facebookProfile = {
  name: "Josep",
  friends: 250,
  messages: ["lorem ipsum ", "lorem ipsum ", "lorem ipsum ", "lorem ipsum "],
  postMessage: function (message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    return facebookProfile.friends++;
  },
  removeFriend: function () {
    return facebookProfile.friends--;
    }
  };