"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default async function User() {
    
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    const data = response.data

    return <div>
        User Page
        {data.name}
        {data.email}
    </div>
}