import {Client} from "pg"

// This below initializes a new object fo the class "Client"
//const pgClient = new Client("postgresql://my-postgres_owner:<password>@ep-super-field-a5cdyk0n.us-east-2.aws.neon.tech/my-postgres?sslmode=require")

const pgClient  = new Client({
    user:"my-postgres_owner",
    password:"<password>",
    port:5432,
    host:"ep-super-field-a5cdyk0n.us-east-2.aws.neon.tech",
    database: "my-postgres",
    ssl:true,
})

async function main() {
    await pgClient.connect();

    const response  = await pgClient.query("update * from users;")
    console.log(response.rows)
}

main()