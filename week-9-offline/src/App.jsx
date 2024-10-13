import { useState  } from "react";
import { PostComponent } from "./Post";



// These codes don't have side effects. without the setInterval
function App() {

  // In the last section we were trying to increment every one second.
  // This is a side effect, it has nothing to do with the component's rendering
  // we are starting a clock independently. This is what is called a side effect.
  // Another side effect could be fetching data from an api.
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
