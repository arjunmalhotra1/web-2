const express = require('express')
const app = express()

let requestCount = 0

// This is not a middleware but close to middleware.
function requestIncreaser(req,res) {
    requestCount = requestCount + 1
    console.log("Total number of requests = "+requestCount)
    req.requestCount = requestCount
}



// The express framework is nothing but a chain of middlewares.
app.get('/sum',requestIncreaser, function (req, res) {
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)

    res.json({
        ans: a+b
    })
})

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