interface people {
    name: string,
    age:number,
}


// Class give us additional thing like inheritance etc.
class Manager implements people{
    name:string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let user = new Manager("John",30)
console.log(user)
