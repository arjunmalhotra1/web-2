import {useState, useRef} from 'react'
import './App.css'

function App() {
  const [currentCount, setCurrentCount] = useState(0)
  
  const timer = useRef()

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c+1)
    }, 1000)
   timer.current = value
  }

  function stopClock() {
    // console.log(timer)
    clearInterval(timer.current)
  }

  return <div>
    {currentCount}
    <br/>
    <button onClick={startClock}>Start</button>
    <br/>
    <button onClick={stopClock}>Stop</button>
    </div>
}

export default App
