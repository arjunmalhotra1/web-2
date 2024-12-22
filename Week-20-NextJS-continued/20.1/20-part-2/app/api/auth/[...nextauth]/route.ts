import NextAuth from "next-auth";

// This library will take care of all the authentication needs.
const handler = NextAuth({})

export const GET = handler;
export const POST = handler;