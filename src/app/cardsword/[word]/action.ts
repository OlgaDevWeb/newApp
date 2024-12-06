import { prisma } from "@/lib/prisma";

export async function getWords(idt: string) {
  try {
    const list = await prisma.words.findMany({ where: { idt } });
    return { ok: true, error: false, list: list };
  } catch (e) {
    return { ok: false, error: true };
  }
}

export async function getTems(id: string) {
  try {
    const list = await prisma.teams.findMany({ where: { id } });
    let name = "Слова";
    let idh = "Слова";
    if (list) {
      name = list[0].name;
      idh = list[0].idh;
    }
    return { ok: true, error: false, name: name, idh: idh };
  } catch (e) {
    return { ok: false, error: true };
  }
}
