import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return <div>
    <Card innerContent={<div> hi There </div>} />
  </div>
}

function Card({ innerContent }) {
  return <div style={{background: "black", borderRadius: 10, color:"white" }}>
    {innerContent}
  </div>
}

export default App
