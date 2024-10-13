import { useState, useEffect  } from "react";


function App() {
  const [count, setCount] = useState(1)

 useEffect(function(){
  setInterval(increaseCount, 1000)
 },[]) //This effect will runs only on mount because the array is empty.


 useEffect(function(){
  console.log("the count has been updated to: " + count)
 },[count]) // This effect runs every time count changes. This is what dependency array tracts.
  
 
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
