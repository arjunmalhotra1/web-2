const express = require('express');
const mongoose = require("mongoose")
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

const app = express()
app.use(express.json());

app.use("/api/v1/user", userRouter)
app.use("api/v1/course", courseRouter)
app.use("api/v1/admin", adminRouter)

async function main() {
    await mongoose.connect()
    console.log("listening on port 3037")
    app.listen(3037)
}

main()
