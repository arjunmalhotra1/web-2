import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useDebounce(originalfn) {
  const currentClock = useRef() // Because we don't want the component to change.

  const fn = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalfn, 200)
  }
  return fn  
}

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search")
  }

  const debouncedFn = useDebounce(sendDataToBackend)

  return (
    <>
   <input type="text" onChange={debouncedFn}></input>
   </>
  )
}

export default App
