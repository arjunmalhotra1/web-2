import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-12'> 
        <div className='bg-green-300 col-span-4'>
        child 1
        </div>
        <div className='bg-red-300 col-span-6'>
        child 2
        </div>
        <div className='bg-green-300 col-span-2'>
        child 3
        </div>
      </div>
    </>
  )
}

export default App
