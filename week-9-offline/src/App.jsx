import { useState  } from "react";
import { PostComponent } from "./Post";


// Every time the app component rerenders the fetch and the setInterval functions are run again.
// It can have unnecessary or duplicated effects.
// Inconsistent behavior.
// Performance issues. Could also cause excessive rerendering.
function App() {

  setInterval()
  fetch()

  setInterval(increments, 1000)
  return <div>
    hi there
    <Greeting name={"harkirat"} />
    <Greeting name={"raman"} />
  </div>  
}

function Greeting(props) {
  return <div>
    Hi There {props.name}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
