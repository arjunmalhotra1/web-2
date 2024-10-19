import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// custom Hook - A function which has repeated/reuse logic encapsulated
// custom hook uses another hook and starts with "use"
function useCounter() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count+1)
    // Another way to do it setCount(c => c+1)
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}

// Component now becomes clean
function App() {

  return (
    <div>
        <Counter />
        <Counter />
        <Counter />
    </div>
  )
}


function Counter() {
  const {count, increaseCount} = useCounter()
  return <div>
        <button onclick={increaseCount}>Increase {count} </button>
        <Counter />
    </div>
}

export default App
