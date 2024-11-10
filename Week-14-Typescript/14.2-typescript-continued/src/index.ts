// Types

interface User2 {
    name: string
    age: number
}

type User = {
    name:string;
    age: number
}


function isLegal(user:User) {
    return user.age > 18 
}

// We can't implement a type
// Types let us do "Unions" & "Intersections"

