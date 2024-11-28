"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";

async function getUser() {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user?.email) {
      return session.user.email;
    }
    return null;
  }
  return null;
}

export async function getAllwords(authorIdn: string) {
  const userall = await getUser();
  let authorId = "n";
  if (userall !== null) {
    authorId = userall;
  }
  return prisma.word.findMany({
    where: { authorId },
  });
}
