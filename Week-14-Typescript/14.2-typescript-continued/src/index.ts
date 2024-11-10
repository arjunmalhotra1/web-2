// Interfaces and types


interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    };
}



let user:User = {
    name: "harkirat",
    age :21,
    address: {
        city: "Chandigarh",
        country: "India",
        pincode: 1506994
    }
}

// How to make address an optional field?
let user2:User = {
    name: "rama",
    age :22,
    
}


function isLegalToVote(user: User): boolean {
    return user.age >= 18;
}

console.log(isLegalToVote(user))