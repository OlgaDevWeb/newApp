"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/configs/auth";

async function getUser() {
  const session = await auth();
  if (session) {
    if (session.user?.email) {
      return session.user.email;
    }
    return null;
  }
  return null;
}

export async function getAllwords() {
  const userall = await getUser();
  let authorId = "n";
  if (userall !== null) {
    authorId = userall;
  }
  return prisma.word.findMany({
    where: { authorId },
  });
}
