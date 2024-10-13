import { useState, useEffect  } from "react";

// Problem with this code is, if we ever unmount the Timer component, we remove Timer component
// Clock still remains active. Timer doesn't stop the clock if it gets unmounted.
function App() {

  <div>
    <Timer />
  </div>

  const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
      setInterval(() => {
        setSeconds(prev => prev +1);
      }, 1000)
    }, [])

    return <div>{seconds} seconds elapsed</div>

  }

}




// Structuring you app into components
// Defining a state of your application
export default App
