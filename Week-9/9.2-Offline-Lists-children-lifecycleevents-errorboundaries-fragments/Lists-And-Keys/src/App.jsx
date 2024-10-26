import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Even with this simple code we see the error.
// "Each" child in a list should have a unique key property.
// Whatever children we are passing in the array, needs to have a key which uniquely identifies the element
function App() {
  
  return (
    <div>
      {[
        // When we add keys the error goes away
        // Even though we are not using the key attribute, but still when we are using React and when 
        // We are rendering a list we need to pass in a "key" as an input and it should uniquely identify 
        // that specific TODO.
        // On Linkedin the key could be "Post-1", "Post-2" etc.
        <Todo key={"asdkhdka"} title={"Go to gym"} done={false}/>,
        <Todo key={1} title={"eat food"} done={false}/>
      ]}
    </div>
  )
}
function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done!" : "Not Done!"}
  </div>
}

export default App
