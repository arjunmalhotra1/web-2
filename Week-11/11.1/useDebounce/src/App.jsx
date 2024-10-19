import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const fn = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalfn, 200)
  }
  return fn  
}

function App() {

  const [inputVal, setInputval] = useState("")

  const debouncedValue = useDebounce(inputVal)


  function change(eventVariable) {
    setInputval(eventVariable.target.value) //eventVariable.target.value is the value in the input box
  }

  useEffect(() => {
    //expensive operation
    //fetch
  },[inputVal])


  return (
    <>
   <input type="text" onChange={change}></input>
   </>
  )
}

export default App
