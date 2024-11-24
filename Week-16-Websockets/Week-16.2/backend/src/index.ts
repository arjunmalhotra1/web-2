import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port: 8798})

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = []

// wss.on("/join") - This is not possible in web sockets
wss.on("connection",(socket)=>{

    socket.on("message",(message)=>{
        
    })

    socket.on("disconnect",()=> {
        allSockets = allSockets.filter(x => x!=socket)
    })
})