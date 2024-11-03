
import './App.css'
import { SidebarClass1 } from './components/answers/1-basic-project'
import { Sidebar2Transition } from './components/sidebars/Sidebar2Transition'

function App() {

  const [darkMode, setDarkMode ] = useState(true)

  return (
    <div className={`h-screen ${darkMode ? "bg-white":"bg-blue-700"}`}>
      {/* <SidebarClass1 />
      <Sidebar2Transition /> */}

      <button onClick={() => setDarkMode(!darkMode)}>Toggle theme</button>


    </div>
  )
}

export default App
