import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}


function BulbState() {
  const [bulbOn, setBulbOn] = useState(true)
  return <div>
    {bulbOn ? "Bulb on":"Bulb off"}
  </div>
}

function ToggleBulbState() {
  return <div>
    <button> Toggle the button </button>
  </div>
}

export default App
