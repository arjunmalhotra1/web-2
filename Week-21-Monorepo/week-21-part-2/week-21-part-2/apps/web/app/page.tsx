
export default function Home() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems:"center"

    }}>
      <div style={{
        display:"flex",
        justifyContent: "center",
        flexDirection:"column",
    }}>
  
    <TextInput></TextInput>
  
      <input type="text" />
      <button>Join Room</button>
      </div>
    </div>
  );
}
