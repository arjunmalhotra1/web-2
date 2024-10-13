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
    let clock = setInterval(() => {
      console.log("from inside clock")
      setSeconds(prev => prev +1);
    }, 1000)


    // useEffect can return a cleanup function
    return function() {
      clearInterval(clock) 
      // Just like setInterval function that Javascript provides
      // We get a clearInterval. When the Timer component unmounts because of line 15 this code is run
    }


    // One more use case is if on the UI you are on a tab that is subscribe to the web sockets and when you change the UI tab, you need to run the code to unsubscribe form the web socket because the user 
    // is no more on the tab that uses the web sockets. We want the clean up function to run and stop the subscription of the web sockets.
    // Like in gather.town When we are in a room we want to be subscribe to any other person coming into the room
    // When we move to another room we have to resubscribe to the Room2 but also unsubscribe from Room1.

  }, [])

  return <div>{seconds} seconds elapsed</div>

}





// Structuring you app into components
// Defining a state of your application
export default App
