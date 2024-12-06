import { prisma } from "@/lib/prisma";
export async function getTems(idh: string) {
  try {
    const list = await prisma.teams.findMany({ where: { idh } });
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}

export async function getTemsH(id: string) {
  try {
    const list = await prisma.teamsHigh.findMany({ where: { id } });
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}
