// // Arrow function
// function sum(a, b){
//     return a+b
// }

// const sum2 = (a, b)=>{
//     return a+b
// }

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
// Given an input array, return all the even values from it.
const input = [1,2,3,4,5] // output is - 2,4
const newArr= []
for (let i=0;i<input.length;i++) {
    if (input[i]%2==0) {
        newArr.push(input[i])
    }
}
console.log(newArr)

