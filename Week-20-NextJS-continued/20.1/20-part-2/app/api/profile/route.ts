import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    // const headers = req.headers
    // const authorizationHeader = headers["authorization"]


    return NextResponse.json({
        avatarURL :"https://image.url/cat.png"
    })
}