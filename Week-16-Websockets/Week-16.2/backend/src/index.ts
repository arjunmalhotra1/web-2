import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port: 8798})

// One way
// let allSockets ={
//     "room1":[socket1,socket2]
//     "12334":[socket],
// }

interface User {
    socket: WebSocket,
    room: string
}

let allSockets: User[] = []

// [
//     {socket:socket, room: "room1"},
//     {socket:socket2, room: "room2"},
//     {socket:socket3, room: "room1"},
// ]

wss.on("connection",(socket)=>{
    allSockets.push(socket)

    socket.on("message",(message)=>{
        
    })

    socket.on("disconnect",()=> {
        allSockets = allSockets.filter(x => x!=socket)
    })
})