import { useEffect } from 'react'
import './App.css'

// We want to connect to the web socket server when the App mounts
// Not on every render.
function App() {

  function sendMessage() {

  }

  useEffect(() =>{
    // This is how we did it with http request using Fetch
    // fetch("http://localhost:3000/users")
    const ws = new WebSocket("ws://localhost:8798")

    ws.onmessage = () => {
      
    }

    ws.onerror = () => {

    }

    ws.onclose = () => {
      
    }

    ws.onopen = () => {
      
    }
  },[])

  return (
    <div>
      <input type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
