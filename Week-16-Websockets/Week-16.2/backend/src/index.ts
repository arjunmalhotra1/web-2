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
        //{"type"} we get a string and then we convert it into an object

        const parsedMessage = JSON.parse(message)
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room:parsedMessage.payload.roomId
            })
        }
        
    })

    socket.on("disconnect",()=> {
        allSockets = allSockets.filter(x => x!=socket)
    })
})