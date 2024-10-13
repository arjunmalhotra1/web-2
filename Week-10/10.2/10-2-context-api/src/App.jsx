import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bulbOn, setBulbOn] = useState(true)  

  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function Light({bulbOn, setBulbOn}) {
  
  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}


function LightBulb({bulbOn}) {
  
  return <div>
    {bulbOn ? "Bulb on":"Bulb off"}
  </div>
}



function LightSwitch({bulbOn, setBulbOn}) {

  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}> Toggle the bulb </button>
  </div>
}



export default App
