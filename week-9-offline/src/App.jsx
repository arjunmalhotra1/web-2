
function App() {
  return (
    <div style={{background: "#dfe6e9",height: "100vh" }}>
      <div style={{display:"flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div> 
      </div>
      </div>
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray",borderWidth:1, padding:20 }

function PostComponent() {
    return <div style={style}>
    <div style={{display:"flex "}}>
      <img src={"https://www.shutterstock.com/image-vector/chelsea-football-club-fc-icon-600nw-2276198713.jpg"}
      style={{
        width:40,
        height: 40,
        borderRadius: 200
      }}/>

      <div style={{fontSize: 10, marginLeft:10}}>
        <b>
          chelsea
        </b>
      <div>23,888 followers</div>
      <div>12m</div>
      </div>
    </div>

    <div style={{fontSize: 12}}>
    Win lose or tie.... The next match is vs Liverpool.
    </div>
</div>
}


// Structuring you app into components
// Defining a state of your application
export default App
