import { useState, useEffect  } from "react";


function App() {

  const [currentTab, SetCurrentTab] = useState(1)
  const [tabData, SetTabData] = useState({})

  // When a user clicks on any of the button the screen on Linkedin changes for which we need a useEffect for the request to go out to the backend. We can lazily load the data from the backend, that is after the user 
  // click the tab we send a fetch request.
  useEffect(function(){
    console.log("send request to backend to get data for tab " + currentTab)
    
    // We can send a request to the backend using Fetch inside useEffect.
    fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab).then(async res => {
      const json = await res.json()
      SetTabData(json)
    })

  }, [currentTab])

  // Note onClick takes a function.
  return <div>
    <button onClick={function(){SetCurrentTab(1)}} style={{color: currentTab==1? "red": "black"}}>Todo #1</button>
    <button onClick={function(){SetCurrentTab(2)}} style={{color: currentTab==2?"red":"black"}}>Todo #2</button>
    <button onClick={function(){SetCurrentTab(3)}} style={{color: currentTab==3?"red":"black"}}>Todo #3</button>
    <button onClick={function(){SetCurrentTab(4)}} style={{color: currentTab==4?"red":"black"}}>Todo #4</button>

  <br></br>
    {/* Fetch requests fetches the data from the backend */}
    {tabData.title}
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
