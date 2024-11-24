import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port: 8798})

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = []

wss.on("connection",(socket)=>{

    socket.on("message",(message)=>{
        // @ts-ignore
        const parsedMesssage = JSON.parse(message)

        if (parsedMesssage.type === "join") {

        }

        if (parsedMesssage.type === "chat") {
            
        }
    })

})