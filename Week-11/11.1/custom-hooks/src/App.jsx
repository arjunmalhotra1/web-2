

import { useState } from 'react'
import './App.css'
import { useFetch, usePostTile } from './hooks/useFetch'

function App() {

  const [currentPost, setCurrentPost] = useState(1)
  
  const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost)

  if (loading) {
    return <div>
      Loading...........
    </div>
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
       useFetch: {JSON.stringify(finalData)}
    </div>
  )
}



export default App
