"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
// We want to connect to the web socket server when the App mounts
// Not on every render.
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    const inputRef = (0, react_1.useRef)();
    // question how ill ws reach here? Answer we create a state.
    function sendMessage() {
        if (!socket) {
            return;
        }
        //const message = inputRef.current.value
        // @ts-ignore
        socket.send("ping");
    }
    (0, react_1.useEffect)(() => {
        // This is how we did it with http request using Fetch
        // fetch("http://localhost:3000/users")
        const ws = new WebSocket("ws://localhost:8798");
        // This is how we receive a message
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
        ws.onerror = () => {
        };
        ws.onclose = () => {
        };
        ws.onopen = () => {
        };
    }, []);
    return (<div>
      <input ref={inputRef} type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </div>);
}
exports.default = App;
