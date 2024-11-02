import './App.css'

function App() {

  return (
    <>
     {/* It looks like when the sm break point has been hit then render blue else red. But opposite happens
        When the screen is big then we see blue else we see red Why?
        Because Tailwind is mobile design.
        sm:bg-blue-300 is a prefix utility. Unprefix utilities take effect at all screen sizes and prefix one take place/appear at the break point and above.
       */}
     <div className='sm:bg-blue-300 bg-red-300'>
      hi there
     </div>
    </>
  )
}

export default App
