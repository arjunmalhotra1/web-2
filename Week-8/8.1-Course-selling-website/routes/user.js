// const express = require("express");
// const Router = express.Router;

const { Router } = require("express")
const { UserModel } = require("../db");
const bcrypt = require("bcrypt")
const userRouter = Router()

const { JWT_USER_PASSWORD} = require("../config")

userRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: Put Try catch
    await UserModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        "message": "signup succeeded"
    })
   
})

userRouter.post("/signin",async function(req, res) {
    const { email, password } = req.body;

    // TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({
        email: email,
        password: password
    }); //[] if we use find

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // Do cookie logic

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

userRouter.post('/purchases',function(req, res) {
    res.json({
        message: "all purchased couses"
    })
})

module.exports = {
    userRouter: userRouter
}