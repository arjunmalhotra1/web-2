import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)


  
  // Whatever code we write inside the function that is taken as an argument by useEffect, only runs
  // when the components mounts/renders for the very first time.

  // If we want to use a stateVariable inside useEffect then we have to put it inside the 
  // array as a dependency.
  // Another way is online 23, we pass in the function to setCount which gets the current value as an input
 useEffect(function(){
  console.log("above set interval")
  setInterval(increaseCount, 1000)
 },[])
  
 
 function increaseCount() {
  console.log("increase count called")
    setCount(function(currentValue){
      return currentValue+1
    })
  }

  return <div>
    {count}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
