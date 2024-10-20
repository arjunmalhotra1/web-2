import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { memo } from 'react'



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
    },1000)
  },[])


  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}



const CurrentCount = memo(function () {
    return <div>
      1
    </div>
})


const Decrease = memo(function () {
  function decrease() {
  
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})



const Increase = memo(function() {
  function increase() {

  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App
