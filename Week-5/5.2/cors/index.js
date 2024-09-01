// Assignment
// 1. Create backend server that returns a sum endpoint
// 2. Write an HTML file that hits the backend server using the fetch api

const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());


app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    console.log(a+b)

    res.json({
        ans: a + b
    })
});

app.listen(3009);