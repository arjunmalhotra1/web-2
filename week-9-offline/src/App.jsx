import { useState  } from "react";
import { PostComponent } from "./Post";



function App() {

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
