// // Arrow function
// function sum(a, b){
//     return a+b
// }

// const sum2 = (a, b)=>{
//     return a+b
// }

const sum3 = (a, b) => a+b
console.log("sum3(2,5): ",sum3(2,5))


// Map & filter
// Given an array give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5] 
// [2,4,6,8,10]


// OPTION 1

// const input = [1,2,3,4,5]
// const newArray = []
// for (let i=0;i<input.length;i++) {
//     newArray.push(input[i]*2)
// }
// console.log(newArray)

// another way to solve the same problem
// map(arr, function)
// map(input, transform) // [2,4,6,8,10]
// OPTION 2
 
// const input = [1,2,3,4,5]
// function trasformby2(i) {
//     return i * 2
// }
// const ans2 = input.map(trasformby2)
// console.log(ans2)


// OPTION 3
// const input = [1,2,3,4,5]
// const ans2 = input.map(function (i) {
//     return i * 2
// })
// console.log(ans2)

// FILTERING
// OPTION 1
// Given an input array, return all the even values from it.
// const input = [1,2,3,4,5] // output is - 2,4
// const newArr= []
// for (let i=0;i<input.length;i++) {
//     if (input[i]%2==0) {
//         newArr.push(input[i])
//     }
// }
// console.log(newArr)

// OPTION 2 - Filtering way
// If the filetering logic wants to include "n" in the final array, then it returns true.
// function fileringLogic(n) {
//     if (n%2==0) {
//         return true
//     } else {
//         return false
//     }
// }
// Filter(arr, fileringLogic)

const input = [1,2,3,4,5] // output is - 2,4
// Map & Filter is very important in React
// function filterLogic(n) {
//     if (n %2==0) {
//         return true
//     } else {
//         return false
//     }
// }

// const ans = input.filter(filterLogic)
// console.log("ans with filtering logic: ",ans)


// Most of the times we'll be doing like below:
const ans2 = input.filter(function filterLogic(n) {
    if (n %2==0) {
        return true
    } else {
        return false
    }
})

console.log("ans2: ",ans2)

const input2 = ["habcd","rabcd","pabcd"]

const ans3 = input2.filter(function(n){
    if (n.startsWith("h")) {
        return true
    } else {
        return false
    }
})

console.log("ans3",ans3)

// Merging all 3 together - map, filter and arrow functions:

const arr4 = [1,2,3,4]
const ans = arr4.filter((n)=> {
    if (n%2 == 0) {
        return true
    } else {
        return false
    }
});


// From week 8 - user.js in routes folder "/purchases" endpoint
const arr = [1,2,3,4]
const result = arr.map(x => x*2)
console.log("result: ",result)


