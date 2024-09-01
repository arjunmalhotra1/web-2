const express = require('express')
const app = express()

let requestCount = 0

// This is not a middleware but close to middleware.
function requestIncreaser(req,res, next) {
    requestCount = requestCount + 1
    console.log("Total number of requests = "+requestCount)
    res.json({
        message:"Request ended early"
    })
    // The next function will be called. If no next() then the next function will not be called.
    next();
}

app.get("/admin",realSumHandler)

app.use(requestIncreaser)


function realSumHandler(req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
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