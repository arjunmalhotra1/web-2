import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [post, setPost] = useState({})



// In react function to useEffect cannot be async hence we take that function out.
  useEffect(async () => {
    getPosts();
  })

  return (
    <div>
       hi there
    </div>
  )
}



export default App
