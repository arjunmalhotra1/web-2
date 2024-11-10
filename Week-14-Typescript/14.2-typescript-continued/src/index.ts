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


// When we define a custom type & we don't give pincode, then we get a compile time error.
let user:User = {
    name: "harkirat",
    age :21,
    address: {
        city: "Chandigarh",
        country: "India"
    }
}

// function isLegalToVote(): boolean {

// }