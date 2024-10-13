import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return <div>
    <Light />
  </div>
}

// bulbOn is a prop to the bulb state component
// bulbOn, setBulbOn are props to the ToggleBulbState component.
function Light() {
  const [bulbOn, setBulbOn] = useState(true)
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
