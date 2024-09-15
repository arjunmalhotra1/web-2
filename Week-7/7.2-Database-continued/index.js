const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const {z} = require("zod")

// const JWT_SECRET = "s3cret";
const { auth, JWT_SECRET } = require("./auth");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://username:ou7O7yf06WjkKomD@some-name-mongodb.sx1v0.mongodb.net/todo-app-database-postman-2")
// mongodb+srv://username:ou7O7yf06WjkKomD@some-name-mongodb.sx1v0.mongodb.net/

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    // Input validation with zod
    // validation - our required body should be an oject with email as string .....
    // req.Body {
    //     email: string,
    //     password: string,
    //     name: string
    // }

    const requiredBody = z.object ({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(10)
    })

    // const parsedData = requiredBody.parse(req.Body) // This will throw an error and we will have to catch in try catch.
    const parsedDataWithSuccess = requiredBody.safeParse(req.Body)
    
    // 1. How to show the user the exact error

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    const hasedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
        email: email,
        password: hasedPassword,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});



app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    
    const response = await UserModel.findOne({
        email: email,
    });

    const passwordMatch = await bcrypt.compare(password, response.password);
    if (response && passwordMatch) {
        const token = jwt.sign({
            userId: response._id.toString()
        },JWT_SECRET)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

app.post("/todo", function(req, res) {
    // title: String,
    // done: Boolean,
    // userId: ObjectId,
    const userId = req.userId;

    res.json({
        userid: userId,
    })

    
});


app.get("/todos", auth, function(req, res) {
    // const title = req.body.title;
    // const done = req.body.done;
    // const userId = req.userID;

    const userId = req.userI;
    console.log("userId: ",userId)
    res.json({
        userid: userId,
    })

});

app.listen(3087);