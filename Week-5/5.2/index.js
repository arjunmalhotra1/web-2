const express = require("express");

const app = express();

// app.use(express.json());

let middleware = express.json()
app.use(middleware)


// In express if you want to send json data we need to first parse the json data.
app.post("/sum", function(req, res) {
    console.log(req.body)
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        ans: a + b
    })
});





app.listen(3009);