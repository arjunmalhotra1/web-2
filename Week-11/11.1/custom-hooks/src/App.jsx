import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count+1)
    // Another way to do it setCount(c => c+1)
  }

  return (
    <div>
        <button onclick={increaseCount}>Increase</button>
    </div>
  )
}

export default App
