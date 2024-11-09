"use strict";
// function greet(firstName:string) {
//     console.log("Hello "+firstName)
// }
// greet("firstName")
// function sum(a:number,b :number) {
//     return a+b
// }
// let ans=sum(1,2)
// console.log(ans)
// let x:any =1;
// x=true
// x="firstName"
// x="random"
// function sum2(a:number,b :number):number {
//     return a+b
// }
// let ans2=sum2(1,2)
// let ans3:number=sum2(1,2)
// console.log(ans)
// fn: ()=>void - means the function passed doesn't take any arguments and doesn't return anything
function delayCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
delayCall(function () {
    console.log("hello");
});
function delayCall2(anotherFn) {
    setTimeout(() => { anotherFn("John"); }, 1000);
}
function greet(name) {
    console.log("Hello: " + name);
}
delayCall2(greet);
