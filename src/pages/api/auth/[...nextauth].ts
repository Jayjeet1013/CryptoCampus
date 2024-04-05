import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";

export const authOptions= {
        providers:[ 
                Google({
                clientId :process.env.GOOGLE_CLIENT_ID as string ,
                clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
        })
]
}

export default NextAuth(authOptions);