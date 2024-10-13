import { useState, useEffect  } from "react";


function App() {

  const [currentTab, SetCurrentTab] = useState("feed")

  // When a user clicks on any of the button the screen on Linkedin changes for which we need a useEffect for the request to go out to the backend.
  useEffect(function(){
    console.log("send request to backend to get data for tab " + currentTab)
  }, [currentTab])

  // Note onClick takes a function.
  return <div>
    <button onClick={function(){SetCurrentTab("feed")}} style={{color: currentTab=="feed"? "red": "black"}}>Feed</button>
    <button onClick={function(){SetCurrentTab("notifications")}} style={{color: currentTab=="notifications"?"red":"black"}}>Notifications</button>
    <button onClick={function(){SetCurrentTab("messages")}} style={{color: currentTab=="messages"?"red":"black"}}>Messages</button>
    <button onClick={function(){SetCurrentTab("jobs")}} style={{color: currentTab=="jobs"?"red":"black"}}>Jobs</button>
  </div>
}




// Structuring you app into components
// Defining a state of your application
export default App
