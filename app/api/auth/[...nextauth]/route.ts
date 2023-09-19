import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) : Promise<any> {

        try {

          const { email, password } = credentials;
  
          const users = await prisma.user.findMany();
  
          if (users.length === 0) {
            return Response.json({
              message: "No users found",
            });
          }
  
          const user = await prisma.user.findUnique({
            where: {
              email,
  
            }
          });
  
          if (!user) {
            return Response.json({
              message: "User not found",
            });
  
          }
  
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {

            return Response.json({
              message: "Password is incorrect",
            });
          }

          return user;

        } catch (error) {
          return Response.json({
            message: "Error",
            status: 500,
          });
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
}



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}