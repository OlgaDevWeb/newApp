import { prisma } from "@/lib/prisma";

export async function getTems() {
  try {
    const list = await prisma.teamsHigh.findMany();
    return { loading: false, ok: true, error: false, list: list };
  } catch (e) {
    return { loading: false, ok: false, error: true };
  }
}
