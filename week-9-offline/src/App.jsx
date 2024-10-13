import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)
  
  // Whatever code we write inside the function that is taken as an argument by useEffect, only runs
  // when the components mounts/renders for the very first time.
 useEffect(function(){
  console.log("above set interval")
  setInterval(increaseCount, 1000)
 },[])
  
 
 function increaseCount() {
    setCount(count+1)
  }

  return <div>
    {count}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
