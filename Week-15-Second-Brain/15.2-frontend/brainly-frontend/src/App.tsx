import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/plusIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Button startIcon={<PlusIcon />} size='md' variant='primary' text='Share' />
   <Button variant='secondary' text='Add Content' />
  )
}

export default App
