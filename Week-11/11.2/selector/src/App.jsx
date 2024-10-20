import { useState } from 'react'

import {atom, RecoilRoot, selector, useRecoilValue, useSetRecoilState} from 'recoil'

import './App.css'


export const counterAtom = atom({
  default: 0,
  key: "counter"
})

const evenSelector = selector ({
  key: "isEvenSelector",
  // default: 0 selector cannot have this since this s a derived state
  get: function({get}) {
    const currentCount = get(counterAtom); // We can depend on multiple Atoms as well
    const isEven = (currentCount %2==0)
    return isEven
  }
})


function App() {
  return <div>
    <RecoilRoot>
      <Buttons/>
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}


function Buttons() {

  const setCount = useSetRecoilState(counterAtom)

  function increase() {
    setCount(c => c+2)
  }

  function decrease() {
    setCount(c => c-1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>
}

function IsEven() {
  console.log("inside IsEven")
  const even = useRecoilValue(evenSelector)
  console.log("even: ",even)
    return <div>
      {even ? "Even":"Odd"}
    </div>
}

export default App