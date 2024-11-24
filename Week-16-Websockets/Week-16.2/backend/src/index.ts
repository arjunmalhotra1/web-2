import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8798})

let userCount = 0
let allSockets = []

wss.on("connection",(socket)=>{
    allSockets.push(socket)
    
    userCount = userCount+1
    console.log("user connected #"+userCount)

    socket.on("message",(message)=>{
        console.log("message received "+message.toString())
        setTimeout(()=>{
            socket.send(message.toString() + ": sent from server")    
        },1000)
        
    })
})