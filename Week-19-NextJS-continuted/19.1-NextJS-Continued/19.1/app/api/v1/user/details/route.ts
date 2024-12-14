import { NextResponse } from "next/server";

// This is how we create a Get request
export function GET() {
   
    return NextResponse.json({
        user:"name",
        email:"email@email.com"
    })
}

// This is how we create a POST request
export function POST() {
   
    return NextResponse.json({
        user:"name",
        email:"email@email.com"
    })
}

// This is how we create a PUT request
export function PUT() {
   
    return NextResponse.json({
        user:"name",
        email:"email@email.com"
    })
}

// We should know the difference between - "export default" & "export"