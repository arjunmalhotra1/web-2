const express = require('express')
const app = express()

let requestCount = 0

// This is not a middleware but close to middleware.
function requestIncreaser(req,res, next) {
    requestCount = requestCount + 1
    if (req.body.cookie === "google") {
        next
    } else {
        res.json( {
            message: "You are not allowed"
        })
    }
    console.log("Total number of requests = "+requestCount)

    // The next function will be called. If no next() then the next function will not be called.
    next();

}


function realSumHandler(req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    console.log(req.name)
    res.json({
        ans: a+b
    })
}


// The express framework is nothing but a chain of middlewares.
// In the last function we handle the request or send a response.
app.get('/sum',requestIncreaser, realSumHandler)

app.get('/multiply', function (req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
    
})

app.get('/subtract', function (req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a-b
    })
})

app.get('/division', function (req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a/b
    })
})



app.listen(3009)