// let firstName ="John"
// const age = 30

// var isStudent = true

// console.log(firstName)
// console.log(age)
// console.log(isStudent)


// var isStudent = true
// isStudent = "hello"
// isStudent = 10

// console.log(isStudent)

// Don't use var. Use let and const to declare a variable.

// let isStudent = true

// const firstName = "hello"
// // This is not allowed
// firstName = 10


// Data types
// let number = 42

// let users = ["hello","raman","asd"] 
// console.log(users[4])


// Operators
// let sum = 10 + 5;
// console.log(sum);
// let isEqual = (10===10);
// console.log(isEqual);

// let age = 19;

// let canVote = (age > 18);


// Functions

// function greet(name) {
//     return "Hello, " + name;
// }

// let message = greet("John")
// console.log(message)

function sum(a, b) {
    let totalSum = a+b
    return totalSum
}

ans = sum(1,2)
console.log(ans)

console.log(sum("Hello",2))


// Assignment #2
// function canVote(age) {
//     if (age >=18) {
//         return true
//     }
//     return false
// }

// ans = canVote(19)

// console.log(ans)
// users = ["one","two","three"]
// for (let i = 0;i<3;i++) {
//     console.log(users[i])
// }

// for (let i = 0;i<users.length;i++) {
//     console.log(users[i])
// }

let user = {
    name:"One",
    age: 19,
    gender: "male"
}

console.log(user.age,user.name)
console.log(user["age"],user["name"])



function greet(user) {
    console.log("Hi "+ user.name + " your age is " + user["age"] +  user["gender"])
}

greet(user)


let arr = ["hello",21,{
    name:"heloo1",
    age:21,
    cities: ["delhi","chandigarg","banglore",{
        country: "malaysia",
        city: "kuala lumpur",
    }]
}];

const val1 = arr[2]

const val2 = {
    name:"hello3",
    age:21,
}


console.log(val1)
console.log(val2)
console.log("arr[2].cities[3].city: ",arr[2].cities[3].city)


function usersArray2(arr) {
    for (let i=0;i<arr.length;i++) {
        if (arr[i].age > 18 && arr[i].gender==="male") {
            console.log("usersArray: ",arr[i].name)
        }
    }
}

function usersArray(arr) {
    let arr2 = []
    for (let i=0;i<arr.length;i++) {
        if (arr[i].age > 18 && arr[i].gender==="male") {
            //console.log("usersArray: ",arr[i].name)
            arr2.push(arr[i])
        }
    }

    return arr2
}



const users = [{
    name:"hello",
    age:21,
    gender:"male",
},{
    name:"hi",
    age:21,
    gender:"female",
},{
    name:"end",
    age:21,
    gender:"male"
}]

usersArray(users)

// I think for filter to work, the function should return an array.
const result = users.filter(usersArray)
const result2 = users.filter(usersArray2)
console.log("result: ",result)
console.log("result2: ",result2)
