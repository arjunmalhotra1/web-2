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

[
    {socket:socket, room: "room1"},
    {socket:socket2, room: "room2"},
    {socket:socket3, room: "room1"},
]

wss.on("connection",(socket)=>{
    allSockets.push(socket)

    userCount = userCount+1
    console.log("user connected #"+userCount)

    socket.on("message",(message)=>{
        console.log("message received "+message.toString())
        for (let i=0;i<allSockets.length;i++) {
            const s = allSockets[i]
            s.send(message.toString() + ": sent from server")    
        }
        
    })

    socket.on("disconnect",()=> {
        allSockets = allSockets.filter(x => x!=socket)
    })
})