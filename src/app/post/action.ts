import { prisma } from "@/lib/prisma";

export async function getPost(id: string) {
  try {
    const list = await prisma.post.findMany({ where: { id } });
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}

export async function getPosts() {
  try {
    const list = await prisma.post.findMany();
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}
