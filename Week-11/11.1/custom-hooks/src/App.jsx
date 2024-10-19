

import './App.css'
import { useFetch, usePostTile } from './hooks/useFetch'

function App() {
  
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/2")

  return (
    <div>
       useFetch: {JSON.stringify(finalData)}
    </div>
  )
}



export default App
