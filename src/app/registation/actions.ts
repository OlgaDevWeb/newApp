"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function createUser(data: FormData) {
  const { name, email } = Object.fromEntries(data) as Omit<User, "id">;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  redirect("/api/auth/signin");
}
