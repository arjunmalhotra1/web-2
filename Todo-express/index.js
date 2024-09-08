const express = require('express');
const app = express();


/*
User {
    Username
    JWT - ??
    Todo {
        TaskName
    }
}
*/

const todos = []

app.post("/addtodo",addTodo);
function addTodo(req, res) {

}

app.post("/signup",signUp);
function signup(req, res) {
    const username = req.body.username
    const password = req.body.password

    todos.push({
        username,
        password
    })

    res.send({
        Message: `User has been added -> ${username}`
    })
}

app.post("/signin",signIn);
function signIn(req, res) {
    const username = req.body.username
    const password = req.body.password

    const todo = todos.find(todo => todo.username === username && todo.password === password);

   

    if(todo) {
        const token = jwt.sign({
            username: todo.username
        }, JWT_SECRET);

    }
}


app.listen(3654)