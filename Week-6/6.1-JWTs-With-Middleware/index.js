const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = "randomsecretvalue";
app.use(express.json());


const users = []

function auth(req, res, next) {
    console.log("Inside the auth middleware")
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log("jwt verification failed")
                res.status(401).send({
                    message: "Unauthorized, jwt token failed"
                })
            } else {    
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            "message":"Unauthorized"
        })
    }
}

app.post("/signup",(req, res)=>{
    const username = req.body.username
    const password = req.body.password

    users.push({
        username,
        password
    })

    res.send({
        Message: "You have signed up"
    })
});

app.post("/signin",(req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username === username && user.password === password);
     
    if (user) {
        // const token = generateToken();
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        // We don't need to store the token as well.
        // user.token = token; 
        res.send({
            token
        })
        console.log(users)
    } else {
        res.status(403).send({
            message: "Invalid username and password"
        })
    }

});

app.get("/me", auth, (req,res) => {
    const user = req.user;
    res.send({
        username: user.username,
        message: "response from /me"
    })
})



app.listen(3087)
