// function sum(a, b) {
//     return a+b
// }

// let ans = sum(20,30)

// console.log(ans)

// function sum1(n) {
//     let sum = 0
//     for (let i=1;i<=n;i++) {
//         sum += i
//     }

//     return sum
// }

// console.log(sum1(123))

// function sum2(n) {
    
//     return (n *(n+1))/2
// }

// console.log(sum2(123))



// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);


// Reading file a.txt
// const fs = require("fs")

// const contents = fs.readFileSync("a.txt","utf-8")
// console.log(contents)

// const contentsb = fs.readFileSync("b.txt", "utf-8")
// console.log(contentsb)

const fs = require("fs");

// const contents = fs.readFile("a.txt","utf-8");
// console.log(contents)

const contentsb = fs.readFileSync("b.txt","utf-8");
console.log(contentsb)


// function sum(a, b) {
//     return a+b
// }


// function doOperation(a,b,op) {
//     return op(a,b)
// }

// console.log(doOperation(1,2,sum))


// const { time } = require("console");
// const fs = require("fs");

// // afterFileRead is the callback function.
// function afterFileRead(err, data) {
//     console.log(data)
// }

/*
better way to write the afterFileRead function.
function afterFileRead(err, data) {
    if (err) {
        console.log("File not found!")
    } else {
        console.log(data)
    }
}
*/

// fs.readFile("a.txt","utf-8",afterFileRead);
// fs.readFile("b.txt","utf-8",afterFileRead);
// console.log("Done");


/* 
// This is how the designers of readFile might have written the function as
function readFile(filePath, encoding, op) {
    // read file and then call the callback with an error if there is an error & then with the 
    // actual contents of the file.

    op("Error","hi there")
}
*/

// this is from the - http://latentflip.com/loupe/
function timeout() {
    console.log("click the button!")
}
console.log("Hi!")
setTimeout(timeout, 1)
console.log("Welcome to loupe.")
let c = 0;
for (let i=0;i<10000000000;i++){
    c = c+1;
}

console.log("Expensive operation done");

/*
Note: "click the button!" prints after "Expensive operation done".
Hi!
Welcome to loupe.
Expensive operation done
click the button!
*/