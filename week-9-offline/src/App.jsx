import { useState, useEffect  } from "react";

// Problem with this code is, if we ever unmount (goes away from the DOM) the Timer component, we remove Timer component
// Clock still remains active. Timer doesn't stop the clock if it gets unmounted.
function App() {
  const [showTimer, setShowTimer] = useState(true)

  useEffect(() => {
    setInterval(function () {
      setShowTimer(currentValue => !currentValue)
    }, 5000)
  }, [])
  
 return  <div>
   {showTimer && <Timer />}
  </div>
}


const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  // Problem with this code is, even if the timer code un-renders(Goes away from the DOM/not on the screen), the clock doesn't stop.
  useEffect(()=>{
    setInterval(() => {
      console.log("from inside clock")
      setSeconds(prev => prev +1);
    }, 1000)


    // useEffect can return a cleanup function
    return function() {
      
    }


  }, [])

  return <div>{seconds} seconds elapsed</div>

}





// Structuring you app into components
// Defining a state of your application
export default App
