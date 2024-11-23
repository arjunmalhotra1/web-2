import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8789})



// app.get("/users",(req,res)=>{
    
// })
// On a new connection call the function. Give me the "socket" of the person. This is like
// "req, res"
// This is an Event handler
wss.on("connection",function(socket){
    console.log("user connected")
    setInterval(()=>{
        socket.send("Current price of Solana is"+Math.random())
    },500)

    socket.on("message",(e)=>{
        console.log(e)
    })
    
})


