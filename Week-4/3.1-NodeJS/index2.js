const path = require("path")

console.log(__dirname)
console.log(__dirname+"../../../index2.js")
console.log(path.join(__dirname,"../../../index2.js"))


/*
node index2.js 
/Users/arjunmalhotra/Documents/repos/self-learning/web-2-kirat/Week-3/3.1-NodeJS
/Users/arjunmalhotra/Documents/repos/self-learning/web-2-kirat/Week-3/3.1-NodeJS../../../index2.js
/Users/arjunmalhotra/Documents/repos/self-learning/index2.js
 */

// We don't commit node_modules