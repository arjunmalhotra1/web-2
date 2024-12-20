import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { counterAtom } from './store/atoms/counter'
import { RecoilRoot, useRecoilValue,useSetRecoilState } from 'recoil'


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
  // If we have these lines of code then as described in the snapshot, 
  // when a component re-renders then all it's children re render as well.
  // const [count,setCount] = useState(0)
  // useEffect(() => {
  //   setInterval(()=> {
  //     setCount(c=>c+1)
  //   },1000)
  // },[])


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

// Decrease component is not subscribed to the value but subscribed to the setter
function Decrease() {
  const setCount = useSetRecoilState(counterAtom)
  function decrease() {
    setCount(c => c-1)
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


// Decrease component is not subscribed to the value but subscribed to the setter
function Increase() {
  const setCount = useSetRecoilState(counterAtom)

  function increase() {
    setCount(c => c+1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
