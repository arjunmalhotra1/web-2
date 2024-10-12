
function App() {
  return (
    <div style={{background: "#dfe6e9",height: "100vh" }}>
      <div style={{display:"flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent 
             image = "https://www.shutterstock.com/image-vector/chelsea-football-club-fc-icon-600nw-2276198713.jpg"
             subtitle = "23,888 followers"
             time = "12m"
              name = {"chelsea"}
            />
            <br />
          </div>
          <div>
            <PostComponent 
             image = "https://www.shutterstock.com/image-vector/chelsea-football-club-fc-icon-600nw-2276198713.jpg"
             subtitle = "Promoted"
              name = {"chelsea"}
            />
            <br />
          </div>
      </div>
      </div>
    </div>
  )
}

const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray",borderWidth:1, padding:20 }


function PostComponent({name, subtitle, time, image, description}) {
    return <div style={style}>
    <div style={{display:"flex "}}>
      <img src={image}
      style={{
        width:40,
        height: 40,
        borderRadius: 200
      }}/>

      <div style={{fontSize: 10, marginLeft:10}}>
        <b>
          {name}
        </b>
      <div>{subtitle}</div>
     {time!== undefined && <div style={{display: 'flex'}}>
        <div>{time}</div>
        <img src={"https://i.etsystatic.com/19543171/r/il/cd0d78/4477428278/il_570xN.4477428278_i2tn.jpg"}
        style={{width: 12  , height: 12}} />
      </div>}
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
