import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

// This library will take care of all the authentication needs.
const handler = NextAuth({
        providers:[
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                  username: { label: 'email', type: 'text', placeholder: '' },
                  password: { label: 'password', type: 'password', placeholder: '' },
                },
                async authorize(credentials: any) {
                    
                    // Here we do a db request to check if the username and the password are correct.
                    const user = {
                        name :"name",
                        id:"1",
                        username: "username"
                    }
                    if (user) {
                        return user
                    } else {
                        return null
                    }
                },
              })
        ],
        // secret: process.env.NEXTAUTH_SECRET
    })


// default login - http://localhost:3001/api/auth/signin
// const handler = NextAuth({
//     providers: [
//       CredentialsProvider({
//           name: 'Login with email',
//           credentials: {
//             username: { label: 'email', type: 'text', placeholder: '' },
//             password: { label: 'password', type: 'password', placeholder: '' },
//           },
//           async authorize(credentials,req) {
//               return {
//                 username:"username",
//                 id: "user1",
//             };
//           }
//         })
//     ],
//     secret: process.env.NEXTAUTH_SECRET
//   })
  
// export { handler as GET, handler as POST }
export const GET = handler;
export const POST = handler;
