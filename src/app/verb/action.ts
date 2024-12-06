"use server";
import { prisma } from "@/lib/prisma";

export async function getTems() {
  try {
    const list = await prisma.teamsVerb.findMany();
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}
export async function getWords(idt: string) {
  try {
    const list = await prisma.verb.findMany({ where: { idt } });
    return { ok: true, error: false, list: list };
  } catch {
    return { ok: false, error: true };
  }
}

export async function getTem(id: string) {
  try {
    const list = await prisma.teamsVerb.findMany({ where: { id } });
    let name = "Слова";
    if (list) {
      name = list[0].name;
    }
    return { ok: true, error: false, name: name };
  } catch {
    return { ok: false, error: true };
  }
}
