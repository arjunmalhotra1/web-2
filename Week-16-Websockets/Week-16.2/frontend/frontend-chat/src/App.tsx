import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [messages, setMessages] = useState([])
  const wsRef = useRef()

    useEffect(()=>{
      const ws = new WebSocket("http:localhost:3000");
      ws.onmessage = (event) => {
        setMessages(m => [...m, event.data])
      }

      wsRef.current = ws
    },[])
    

  return (
    <div className='h-screen bg-black'>
      <div className='h-[95vh]' ></div>
      <div className='w-full bg-white flex'>
        <input className='flex-1 p-4'></input>
        <button className='bg-purple-600 text-white p-4'>Send Message</button>
      </div>
    </div>
  )
}

export default App
