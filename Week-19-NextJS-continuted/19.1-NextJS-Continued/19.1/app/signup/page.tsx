"use client"
import axios from "axios"
import { useState } from "react";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" onChange={e=>{setUsername(e.target.value)}}></input>
            <input type="password" placeholder="password" onChange={e=>{setPassword(e.target.value)}}></input>

            <button onClick={()=>{
                axios.post("http:localhost:3000/api/v1/signup",{
                    username, 
                    password
                })
            }}>Signup </button>
        </div>

    </div>
}