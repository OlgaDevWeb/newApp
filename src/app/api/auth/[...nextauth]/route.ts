import { handlers } from "@/configs/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;

/*import { authOptions } from "@/configs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };*/
