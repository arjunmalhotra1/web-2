"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    // Here the rendering is on the client.
    useEffect(()=>{
        axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then(response => {
            setData(response.data);
            setLoading(false)
        })
    },[])

if (loading) {
    return <div>
        Loading....
    </div>
}


    return <div>
        User Page
        {data.name}
        {data.email}
    </div>
}