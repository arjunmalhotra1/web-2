import { useState, useEffect } from 'react'
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

  const debouncedValue = useDebounce(inputVal, 300)


  function change(eventVariable) {
    setInputval(eventVariable.target.value) //eventVariable.target.value is the value in the input box
  }

  useEffect(() => {
    //expensive operation
    //fetch
    fetch("api.amazon.com/search")
  },[debouncedValue]) // Do the expensive operation when the debouncedValue changes and not inputVal


  return (
    <>
   <input type="text" onChange={change}></input>
   </>
  )
}




const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};




export default App
