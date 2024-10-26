import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return <div style={{display:'flex'}}>
    {/* This is a better way to pass the children */}
    <Card>
      <div style={{color: "green"} }>
        What do you want to post? <br/><br/>
        <input type={"text"} />
      </div>
    </Card>
    <Card children={ "hi There"} />
  </div>
}

function Card({ innerContent }) {
  return <div style={{background: "black", borderRadius: 10, color:"white" }}>
    {innerContent}
  </div>
}

export default App
