interface people {
    name: string,
    age:number,
    isLegal():boolean
}


// Class give us additional thing like inheritance etc.
class Manager implements people{
    name:string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    isLegal() {
        return this.age > 18
    }
}

// This could be done but these objects cannot extend other classes.
let user2 = {
    name:"har",
    age: 21,
    isLegal():boolean {
        return user.age>18
    }
}

let user = new Manager("John",30)
console.log(user)

console.log(user.isLegal())
