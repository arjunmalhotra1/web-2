import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return <div style={{display:'flex'}}>
    <Card innerContent={ "hi There"} />
    <Card innerContent={ <div style={{color: "green"}}>hello there</div>} />
  </div>
}

function Card({ innerContent }) {
  return <span style={{background: "black", borderRadius: 10, color:"white", padding:10, margin: 10 }}>
    {innerContent}
  </span>
}

export default App
