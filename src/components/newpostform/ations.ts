"use server";

import { redirect } from "next/navigation";
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

export async function creatPost(data: FormData) {
  //const title = data.get("title") as string;
  const { title, body } = Object.fromEntries(data) as {
    title: string;
    body: string;
  };
  const userall = await getUser();

  let authorId = "n";

  if (userall !== null) {
    authorId = userall;

    const post = await prisma.post.create({
      data: {
        title,
        body,
        authorId,
      },
    });
    redirect("/post");
  }
}
