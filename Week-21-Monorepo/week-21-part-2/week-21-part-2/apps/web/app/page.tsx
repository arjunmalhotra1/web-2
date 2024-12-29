import {TextInput} from "@repo/ui/text-input"


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
  
    <TextInput ></TextInput>
      <button>Join Room</button>
      </div>
    </div>
  );
}
