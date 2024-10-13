import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
  return <div>

  </div>
}

function ToggleBulbState() {
  return <div>
    <button> Toggle the button </button>
  </div>
}

export default App
