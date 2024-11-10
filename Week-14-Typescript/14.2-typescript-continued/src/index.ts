// Interfaces and types


interface User {
    name: string;
    age: number;
    address:{
        city: string;
        country: string;
        pincode: number;
    };
}

// We do not want "office address to be repeated"
interface Office {
    address: {
        city: string;
        country: string;
        pincode: number;
        houseNumber: string
    }
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


let user2:User = {
    name: "rama",
    age :22,
}


function isLegalToVote(user: User): boolean {
    return user.age >= 18;
}

console.log(isLegalToVote(user))