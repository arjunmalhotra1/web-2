// Promise class gives us a promise that I will return you something in the future.
// setTimeout(fn, 3000) - This "fn" was called after 3 seconds.

// function logName() {
//     console.log("Testing")
// }

// setTimeout(logName, 3000)

// setTimeout - fn promises to call "logName" after 3 seconds.
// We can do Asynch operations using:
// 1. We can use a callback based approach OR
// 2. Use Promise based approach.

// Defining a promise is hard but using a promise is easy.
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// setTimeout(main, 3000) is an Asynch operation
// Calling Main() is the eventual completion.

// This is the callback way, main function here is the callback.
// function main() {
 
// }
// setTimeout(main, 3000)

// Promises way
// Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.

// Promisified version
// We first call the function that returns a promise on that we call .then and pass in a callback
// For now assume setTimeoutPromisified already exists.
// After setTimeoutPromisified promise is done then call the callback.
// setTimeoutPromisified(3000).then(callback)

// We need Promises because of Callbackhell. Promises are a better way. Promises fix CallbackHell.

// This returns a new instance/object of the promise class.
// ms here represents milliseconds.
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p

    // return new Promise(resolve => setTimeout(resolve, ms));
}
  
function callback() {
    console.log("3 seconds have passed");
}
 
// // Promisified version has ".then"
// setTimeoutPromisified(3000).then(callback)

// // Callback
// setTimeout(3000,callback)

// We can also do 
// setTimeoutPromisified(3000).then(function () {
//     console.log("3 seconds have passed");
// });

  
let p = setTimeoutPromisified(5000);
console.log("p: ",p)