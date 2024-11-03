
import { useState } from 'react'
import './App.css'
import { SidebarClass1 } from './components/answers/1-basic-project'
import { Sidebar2Transition } from './components/sidebars/Sidebar2Transition'

function App() {

  const [darkMode, setDarkMode ] = useState(true)

  return (
    // If the machine is in Dark mode then this will be dark else light.
    <div className="h-screen bg-white dark:bg-blue-800 text-black dark:text-white">
      {/* <SidebarClass1 />
      <Sidebar2Transition /> */}

      <button onClick={() => setDarkMode(!darkMode)}>Toggle theme</button>


    </div>
  )
}

export default App
