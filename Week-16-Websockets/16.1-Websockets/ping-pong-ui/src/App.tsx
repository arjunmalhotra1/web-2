import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function sendMessage() {
    
  }

  return (
    <div>
      <input type='text' placeholder='Message...'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
