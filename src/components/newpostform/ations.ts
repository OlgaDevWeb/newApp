"use server";

import { redirect } from "next/navigation";
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

export async function creatPost(data: FormData) {
  const { title, body } = Object.fromEntries(data) as {
    title: string;
    body: string;
  };
  const userall = await getUser();

  let authorId = "n";

  if (userall !== null) {
    authorId = userall;

    await prisma.post.create({
      data: {
        title,
        body,
        authorId,
      },
    });
    redirect("/post");
  }
}
