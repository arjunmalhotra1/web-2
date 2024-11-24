import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[95vh] bg-red-300' ></div>
      <div className=''>
        <input type='text w-full p-4'></input>
      </div>
    </div>
  )
}

export default App
