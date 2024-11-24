import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port: 8798})

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = []

wss.on("connection",(socket)=>{

    socket.on("message",(message)=>{
        const parsedMesssage = JSON.parse(message as unknown as string)
    })

})