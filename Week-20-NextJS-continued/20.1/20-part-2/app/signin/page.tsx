"use client"
import axios from "axios"

export default function() {
    return <div>
        Signing Page <br></br>
        <input></input>
        <input></input>
        <button onClick={()=>{
            const res = await axios.post("http://localhost:3000/api/signin",{
                username:"",
                password:""
            })

            localStorage.setItem("token",res.data.token)
        }}>Sign in</button>
    </div>
}