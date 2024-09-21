// const express = require("express");
// const Router = express.Router;

const { Router } = require("express")
const userRouter = Router()


userRouter.post('/signup',function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

userRouter.get('/signin',function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.post('/purchases',function(req, res) {
    res.json({
        message: "all purchased couses"
    })
})

module.exports = {
    userRouter: userRouter
}