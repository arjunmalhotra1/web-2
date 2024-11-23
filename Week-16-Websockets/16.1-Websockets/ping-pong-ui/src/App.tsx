import { useEffect } from 'react'
import './App.css'

// We want to connect to the web socket server when the App mounts
// Not on every render.
function App() {

  function sendMessage() {

  }

  useEffect(() =>{

  },[])

  return (
    <div>
      <input type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
