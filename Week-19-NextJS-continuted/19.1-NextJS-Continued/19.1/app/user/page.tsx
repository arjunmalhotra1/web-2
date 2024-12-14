import axios from "axios";
import { useEffect, useState } from "react";

export default async function User() {
    
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    const data = response.data

    await new Promise(r => setTimeout(r, 5000))
 
    console.log("hi")
    return <div>
        User Page
        {data.name}
        {data.email}
    </div>
}