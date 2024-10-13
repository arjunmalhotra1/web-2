import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)
  
 useEffect(function(){
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
