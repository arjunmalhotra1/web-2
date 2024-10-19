

import './App.css'
import { usePostTile } from './hooks/useFetch'

function App() {
  
  const postTitle = usePostTile()

  return (
    <div>
       Title after hook in hooks folder: {postTitle}
    </div>
  )
}



export default App
