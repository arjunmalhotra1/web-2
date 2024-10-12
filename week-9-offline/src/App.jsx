import { useState  } from "react";
function App() {
  return (
    <div style={{background: "#dfe6e9",height: "100vh" }}>
      <ToggleMessage />
    </div>
  )
}

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false); //defining a new state variable
    // When the value of the state variable changes the component aht uses the state variable, re-renders
    // useState return an array of 2 things: [true, function] 

    // const isVisible = true; // This is  not a state variable
  function toggle() {
    // isVisible = !isVisible // We should never update a state variable like this
    // We should always update the state variables values using the second variable
    // const [isVisible, setIsVisible] = useState(false);
    setIsVisible(!isVisible)
  }

    return (
        <div>
            <button onClick={toggle}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};

// Not a state variable. This doesn't toggle. The component isn't re-rendering because we don't use a 
// state variable.
// const ToggleMessage = () => {
//   let isVisible = true; // This is  not a state variable

//   function toggle() {
//     isVisible = !isVisible
//   }

//   return (
//       <div>
//           <button onClick={toggle}>
//               Toggle Message
//           </button>
//           {isVisible && <p>This message is conditionally rendered!</p>}
//       </div>
//   );
// };






// const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray",borderWidth:1, padding:20 }
// 
// 
// function PostComponent({name, subtitle, time, image, description}) {
    // return <div style={style}>
    {/* <div style={{display:"flex "}}> */}
      {/* <img src={image} */}
      // style={{
        // width:40,
        // height: 40,
        // borderRadius: 200
      // }}/>
{/*  */}
      {/* <div style={{fontSize: 10, marginLeft:10}}> */}
        {/* <b> */}
          {/* {name} */}
        {/* </b> */}
      {/* <div>{subtitle}</div> */}
     {/* {time!== undefined ? <div style={{display: 'flex'}}> */}
        {/* <div>{time}</div> */}
        {/* <img src={"https://i.etsystatic.com/19543171/r/il/cd0d78/4477428278/il_570xN.4477428278_i2tn.jpg"} */}
        // style={{width: 12  , height: 12}} />
      {/* </div>:null} */}
      {/* </div> */}
    {/* </div> */}
{/*  */}
    {/* <div style={{fontSize: 12}}> */}
    {/* Win lose or tie.... The next match is vs Liverpool. */}
    {/* </div> */}
{/* </div> */}
// }


{/* <div style={{display:"flex", justifyContent: "center"}}>
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
      </div> */}


// Structuring you app into components
// Defining a state of your application
export default App
