// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM has loaded");
// }); // this will be printed after the dom has been loaded
//
// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// // ); // no event listener here ,
// Code your solution in index.js. First, set up a DOMContentLoaded event in order to detect when the HTML page has loaded, and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
//
// Note: Using the innerText property to modify DOM element content will not work for this lab. Use textContent or innerHTML instead.
//
// Test your event in the browser to confirm that it is working.

document.addEventListener("DOMContentLoaded", function(e) {
  let paragraph = document.querySelector("#text")
  paragraph.textContent = "This is really cool!"
 });
