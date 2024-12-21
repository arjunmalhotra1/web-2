import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
  <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
      Todo Application
      <button onClick={()=>{
        router.push("/signin")
      }}>Sign in</button>
    </div>
    <br/>

  </div>
  );
}
