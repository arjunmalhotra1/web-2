import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(1)

 useEffect(function(){
  setInterval(increaseCount, 5000)
  setInterval(decreaseCount, 8000)
 },[])


 useEffect(function(){
  console.log("the count has been updated to: " + count)
 },[count]) // This effect runs on mount and every time when the count changes. This is what dependency array tracts. It doesn't run when count2 change.
  
 
 function increaseCount() {
    setCount(currentValue => currentValue+1)
  }

  function decreaseCount() {
    setCount2(currentValue => currentValue-1)
  }


  return <div>
    {count} {count2}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
