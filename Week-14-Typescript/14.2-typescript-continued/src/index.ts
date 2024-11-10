
// Intersection 
type Employee = {
    name:string;
    startDate: string
}

type Manager = {
    name: string;
    department: string
}

type TeamLead = Employee & Manager

let e: Employee = {
    name:"harkirat",
    startDate: "01-02-2004"
}

// Union
let m: Manager = {
    name:"harkirat",
    department: "electricity"
}

let t: TeamLead = {
   name:"harkirat", 
   startDate:"01-02-2020",
   department: "electicity"
}


type GoodUser = {
    name: string;
    gift: string
}

type BadUser = {
    name: string;
    ip: string
}

type User = GoodUser | BadUser;

const user: User = {
    name:"harkirat",
    ip:"123.112.112"
}
