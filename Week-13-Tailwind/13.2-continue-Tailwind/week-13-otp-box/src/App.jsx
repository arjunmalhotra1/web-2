
import { useState } from 'react'
import './App.css'
import { SidebarClass1 } from './components/answers/1-basic-project'
import { Sidebar2Transition } from './components/sidebars/Sidebar2Transition'

function App() {

  const [darkMode, setDarkMode ] = useState(true)

  return (
    // by default background color is white but in dark mode it's black
    <div className='h-screen bg-white dark:bg-black'>
      <h1 className='text-black dark:text-white'>Hi There</h1>
    </div>
  )
}

export default App
