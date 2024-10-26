import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Even with this simple code we see the error.
// "Each" child in a list should have a unique key property.

function App() {
  
  return (
    <div>
      {[
        <Todo title={"Go to gym"} done={false}/>,
        <Todo title={"eat food"} done={false}/>
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
