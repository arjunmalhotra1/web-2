import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

/**
 * 
 * memo let's you reduce re-renders with useState and without the Atom
 */

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
    <MemoizedCurrentCount />
    <Increase />
    <Decrease />
  </div>
}

// const MemoizedCurrentCount = memo(CurrentCount)

// function CurrentCount() {
//     return <div>
//       1
//     </div>
// }

// Another way to do this
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
