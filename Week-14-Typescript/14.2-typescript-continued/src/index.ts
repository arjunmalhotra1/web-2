interface people {
    name: string,
    age:number,
    // Greet is a function that doesn't take anything as input and returns a "string"
    // Both below are same.
    greet: () => string,
    greet2(): () => string,
}