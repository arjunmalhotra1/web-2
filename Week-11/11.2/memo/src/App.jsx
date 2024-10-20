import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'



function App() {
  return (
   <>
   <Counter/>
   </>
  )
}

function Counter() {
  
  const [count,setCount] = useState(0)
  useEffect(() => {
    setInterval(()=> {
      setCount(c=>c+1)
    })
  },[])


  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCount() {
    return <div>
      1
    </div>
}


function Decrease() {

  function decrease() {
  
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}



function Increase() {


  function increase() {

  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
