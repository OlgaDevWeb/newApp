import { prisma } from "@/lib/prisma";

export async function getTems() {
  try {
    const list = await prisma.teamsFraz.findMany();
    return { ok: true, error: false, list: list };
  } catch (e) {
    return { ok: false, error: true };
  }
}
export async function getWords(idt: string) {
  try {
    const list = await prisma.fraz.findMany({ where: { idt } });
    return { ok: true, error: false, list: list };
  } catch (e) {
    return { ok: false, error: true };
  }
}

export async function getTem(id: string) {
  try {
    const list = await prisma.teamsFraz.findMany({ where: { id } });
    let name = "Слова";
    if (list) {
      name = list[0].name;
    }
    return { ok: true, error: false, name: name };
  } catch (e) {
    return { ok: false, error: true };
  }
}
