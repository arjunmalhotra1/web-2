import {useState} from 'react'
import './App.css'

function App() {
  const [currentCount, setCurrentCount] = useState(0)
  // This is wrong because - it does one more re-rendering
  // We are also not using the timer in our html and we still do a re-render
  // even though the content of the html doesn't change so we don't need to do extra re rendering.
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
