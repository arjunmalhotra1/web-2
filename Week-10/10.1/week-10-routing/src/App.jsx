import {useState} from 'react'
import './App.css'

function App() {
  const [currentCount, setCurrentCount] = useState(0)
  const [timer, setTimer] = useState(0)

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c+1)
    }, 1000)
    setTimer(value)
  }

  function stopClock() {
    console.log(timer)
    clearInterval(timer)
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
