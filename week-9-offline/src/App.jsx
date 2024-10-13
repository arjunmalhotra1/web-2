import { useState  } from "react";
import { PostComponent } from "./Post";


function App() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount(count+1)
  }

  setInterval(increaseCount, 1)
  
  return <div>
    {count}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
