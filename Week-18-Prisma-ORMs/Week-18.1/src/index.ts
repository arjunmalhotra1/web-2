import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient()

app.get(req, res =>{
        
}) {

}


async function createUser() {
    const user = await client.user.findFirst({
        where: {
            id:1
        },
        include: {
            todos: true
        }
    })    

    console.log(user)
}

createUser()


/*
Output:

{
  id: 1,
  username: 'username',
  password: 'password',
  age: 42,
  city: 'city',
  todos: [
    {
      id: 1,
      title: 'gym',
      description: 'go to gym',
      done: false,
      userId: 1
    }
  ]
}
*/
