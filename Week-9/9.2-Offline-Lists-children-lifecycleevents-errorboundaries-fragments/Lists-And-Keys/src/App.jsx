import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const todos =[{
    title: "Go To Gym",
    done: false
  },{
    title: "Eat Food",
    done: true
  }]

  const todosComponent = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

  return (
    <div>
      {todosComponent}
    </div>
  )
}
function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done!" : "Not Done!"}
  </div>
}

export default App
