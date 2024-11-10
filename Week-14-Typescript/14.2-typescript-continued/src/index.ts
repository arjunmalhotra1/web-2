interface people {
    name: string,
    age:number,
    // Greet is a function that doesn't take anything as input and returns a "string"
    greet: () => string,
}

let person: people = {
    name:"har",
    age:21,
    greet:() => {
        return "hi har"
    }
}

let greeting = person.greet()
console.log("greeting: ",greeting)