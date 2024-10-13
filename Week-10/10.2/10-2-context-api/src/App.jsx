import { useState } from 'react'

import './App.css'


// Context is created outside the component chain, usually in a separate file.
const BulbContext = React.createContext()


function App() {
  const [bulbOn, setBulbOn] = useState(true) 

  return <div>
    <BulbContext.Provider>
      <Light />
    </BulbContext.Provider>
  </div>
}

function Light({bulbOn, setBulbOn}) {
  
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}


function LightBulb({bulbOn}) {
  const bulbOn = getContext(BulbContext)

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
