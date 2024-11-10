function getMax(nums: number[]) {
    let maxValue = -10000000000

}

getMax([1,2,3,4,5])


interface Address {
    city: string;
    pincode: string
}


// interface User {
//     name: string;
//     age: number;
//     addresses: {
//         city: string;
//         state: string;
//     }[]
// }

interface User {
    name: string;
    age: number;
    addresses: Address[]
}