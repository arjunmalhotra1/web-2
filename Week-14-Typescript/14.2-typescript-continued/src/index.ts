
/*
Union (|): A union type in TypeScript means that the value can be one of several types. In your example, UserOrAdmin is a union type, meaning that a UserOrAdmin can be either a User or an Admin, but not necessarily both at the same time.

When you define type UserOrAdmin = User | Admin;, this means UserOrAdmin can be a type of User or Admin, but not both simultaneously.
Effect of the Union: If a value is of type UserOrAdmin, TypeScript sees it as either a User or an Admin, but it can't guarantee that it has all the properties from both types. Hence, when you're dealing with user: UserOrAdmin, TypeScript can only safely access properties that exist on both User and Admin—in this case, the name property is common to both, but age is only available on User and permissions is only available on Admin.
Intersection (&): An intersection type combines multiple types into one. A value of an intersection type must satisfy all the requirements of the types involved.

For example, if you wrote type UserAndAdmin = User & Admin;, it means that the value has to have all properties from both User and Admin. So a value of type UserAndAdmin would need:

name, age, and permissions (all properties from both User and Admin).
Effect of the Intersection: If you were to use an intersection (&), you would be able to access both age and permissions on a value of that type, because the value would necessarily contain both.
*/
interface Admin {
    name: string;
    permissions: string;
}

interface User {
    name: string;
    age: number
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin) {
    // console.log(user.age) // This is an error because user can be a User or and Admin.
    console.log(user.name)
}

type UserAndAdmin = User & Admin;

function greet2(user: UserAndAdmin) {
    console.log(user.age);        // Works: `age` is now guaranteed to exist
    console.log(user.permissions); // Works: `permissions` is guaranteed to exist
}