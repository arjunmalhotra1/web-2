import { useState  } from "react";
import { PostComponent } from "./Post";



function App() {

  function increaseCount() {
    setCount(count + 1)
  }


  setInterval(increaseCount, 1000)

  const [count, setCount] = useState(1)

  return <div>
  <div style={{display: "flex"}}>
    <div style={{background: "red",borderRadius: 20, width:20, height: 25 , paddingLeft: 10, paddingTop: 5}}>
      {count}
    </div>
  </div>
  <img style={{cursor: "pointer"}} src={"https://cdn-icons-png.flaticon.com/512/472/472371.png"} width={40} />

  
  </div>

  
}




// Structuring you app into components
// Defining a state of your application
export default App
