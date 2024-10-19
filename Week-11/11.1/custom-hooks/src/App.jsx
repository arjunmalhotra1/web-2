import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [post, setPost] = useState({})
  
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json();
    setPost(json)
  }


// In react function to useEffect cannot be async hence we take that function out.
  useEffect(() => {
    getPosts();
  })

  return (
    <div>
       {post.title}
    </div>
  )
}



export default App
