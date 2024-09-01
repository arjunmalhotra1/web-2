const express = require('express')
const app = express()

let request = 0

app.get('/sum', function (req, res) {
    request = request + 1
    console.log("Total number of requests = "+request)

    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)

    res.json({
        ans: a+b
    })
})

app.get('/multiply', function (req, res) {
    request = request + 1
    console.log("Total number of requests = "+request)

    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
    
})

app.get('/subtract', function (req, res) {
    request = request + 1
    console.log("Total number of requests = "+request)

    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a-b
    })
})

app.get('/division', function (req, res) {
    request = request + 1
    console.log("Total number of requests = "+request)
    
    const a = parseInt(req.query.a)
    const b  = parseInt(req.query.b)
    res.json({
        ans: a/b
    })
})



app.listen(3009)