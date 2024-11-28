import { prisma } from "@/lib/prisma";

export function getUsetByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export function getAllWord() {
  return prisma.user.findMany({
    include: {
      words: true,
    },
  });
}
