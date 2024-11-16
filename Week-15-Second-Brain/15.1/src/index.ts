import express from "express"

import mongoose from "mongoose"

import jwt from "jsonwebtoken"
import { UserModel } from "./db";

const app = express();

app.post("/api/v1/signup", (req, res) => {
    // zod validation & Hashpassword
    const username = req.body.username
    const password = req.body.password

    await UserModel.create({
        username:username,
        password:password
    })

    res.json({
        message: "User signed up"
    })

})

app.post("/api/v1/signin", (req, res) => {

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})