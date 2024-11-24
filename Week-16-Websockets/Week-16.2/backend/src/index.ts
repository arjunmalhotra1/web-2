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
            allSockets.push({
                socket,
                room:parsedMesssage.payload.roomId
            })

        }

        if (parsedMesssage.type === "chat") {

            // This is one way
            // const currentUSerRoom = allSockets.find((x)=>x.socket===socket)?.room
            let currentUSerRoom = null;

            for (let i=0;i<allSockets.length;i++){
                if (allSockets[i].socket === socket) {
                    currentUSerRoom = allSockets[i].room
                }
            }
            
        }
    })

})