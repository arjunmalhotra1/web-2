const express = require("express");
const app = express();

app.get("/test", function(req, res) {
    res.json({
     "a": "hello",
    })
 });


 app.listen(3009)
 