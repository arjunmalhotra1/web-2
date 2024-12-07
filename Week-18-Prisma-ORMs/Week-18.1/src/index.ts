
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()


async function createUser() {
    await client.user.create({
        data: {
            username:"username",
            password: "password",
            age: 42,
            city: "city"
        }
    })    
}

createUser()

