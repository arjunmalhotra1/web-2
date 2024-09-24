// const express = require("express");
// const Router = express.Router;

const { Router } = require("express")
const { UserModel, purchaseModel, courseModel } = require("../db");
const bcrypt = require("bcrypt")
const userRouter = Router()
const jwt = require("jsonwebtoken")

const { JWT_USER_PASSWORD} = require("../config")
const { userMiddleware } = require('../middleware/user')

userRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await UserModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
    
        res.json({
            "message": "signup succeeded"
        })
        // TODO: Check if duplicate email then bad request.
    } catch (err) {
        res.status(500).json({
            "message": "internal server error"
        })
        console.log("error in user signup",err)
    }
    
   
})

userRouter.get("/signin", async function(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
        email: email,
    });

    const passwordMatch =  bcrypt.compare(password, user.password)

    if (user && passwordMatch) {
        const token = jwt.sign({
            userid: user._id
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

userRouter.get('/purchases',userMiddleware, async function(req, res) {
    const userid = req.userid
    const coursesPurchasedByUser = await purchaseModel.find({
        userid
    })

    let purchasedCourseIds = []
    for(let i=0;i<coursesPurchasedByUser.length;i++) {
        purchasedCourseIds.push(coursesPurchasedByUser[i].courseId)
    }
     // Another way to do this is with the "=>"
    const courseData = await courseModel.find({
        _id: {$in : purchasedCourseIds}
    })


    res.json({
        "coursesPurchasedByUser": coursesPurchasedByUser,
        "courseData": courseData
    })

   
    
})

module.exports = {
    userRouter: userRouter
}