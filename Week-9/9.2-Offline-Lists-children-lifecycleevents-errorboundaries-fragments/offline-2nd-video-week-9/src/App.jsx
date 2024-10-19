import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return <div style={{display:'flex'}}>
    
    <Card children={ <div style={{color: "green"} }>
      What do you want to post?
      <input type={"text"} />
    </div>} />
    <Card children={ "hi There"} />
  </div>
}

function Card({ children }) {
  return <div style={{background: "black", borderRadius: 10, color:"white", padding:10, margin: 10 }}>
    {children}
  </div>
}

export default App
