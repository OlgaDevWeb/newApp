import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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

    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
  },
};
