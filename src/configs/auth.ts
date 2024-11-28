import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
//import { users } from "../../public/users";
import { pages } from "next/dist/build/templates/app-page";
import { prisma } from "@/lib/prisma";

function getAllUser(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        //const users = await getAllUser();
        const currentUser = await getAllUser(credentials.email);
        if (currentUser && currentUser.name === credentials.password) {
          const { name, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
  },
};
