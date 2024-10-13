import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)

 useEffect(function(){
  setInterval(increaseCount, 1000)
 },[]) //This effect will run on mount because the array is empty.
  
 
 function increaseCount() {
    setCount(currentValue => currentValue+1)
  }

  return <div>
    {count}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
