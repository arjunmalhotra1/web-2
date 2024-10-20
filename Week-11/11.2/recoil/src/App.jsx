import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterAtom } from './store/atoms/counter'




function App() {
  return (
   <>
   <RecoilRoot>
   <Counter/>
   </RecoilRoot>
   </>
  )
}



function Counter() {
  const [count,setCount] = useState(0)
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

// currentCount component has now subscribed to the counterAtom
function CurrentCount() {
  const count = useRecoilValue(counterAtom)
    return <div>
      {count}
    </div>
}

function Decrease() {

  function decrease() {
    setCount(c => c-1)
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase() {

  function increase() {
    setCount(c => c+1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
