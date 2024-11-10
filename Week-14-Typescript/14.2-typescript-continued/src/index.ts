// Interfaces and types

interface Address {
    city: string;
    country: string;
    pincode: number;

}

interface User {
    name: string;
    age: number;
    address: Address
   
}

// We do not want "office address to be repeated"
interface Office {
    address: Address
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