import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, Session } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) : Promise<any> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
        
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({session, token}: {session: Session, token: any}) {
      session.user = token.name;
      return session;
    },
  }
}



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}