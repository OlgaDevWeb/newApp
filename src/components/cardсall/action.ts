"use server";

import { authOptions } from "@/configs/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

/*function getUser(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}*/
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

export async function checkWord(rus: string, port: string, user: string) {
  const userall = await getUser();
  let authorId = "n";

  if (userall !== null) {
    authorId = userall;
    const list = await prisma.word.findMany({ where: { authorId } });
    const ok = list.filter(
      (word) => word.rus === rus && word.port === port
    ).length;
    if (ok > 0) {
      return false;
    } else {
      return true;
    }
    return false;
  }
}

export async function addWord(rus: string, port: string, user: string) {
  const userall = await getUser();

  let authorId = "n";

  if (userall !== null) {
    authorId = userall;
    const list = await prisma.word.findMany({ where: { authorId } });

    const ok = list.filter(
      (word) => word.rus === rus && word.port === port
    ).length;
    if (ok > 0) {
      return {
        success: false,
        message: `Слово уже есть в вашем списке`,
      };
    } else {
      if (list.length < 100) {
        const word = await prisma.word.create({
          data: {
            rus,
            port,
            authorId,
          },
        });
        return {
          success: true,
          message: `Слово ${port} успешно добавлено в ваш список`,
        };
      } else {
        return {
          success: false,
          message: "В вашем списке уже 100 слов, удалите выученные",
        };
      }
    }
  } else {
    return { success: false, message: "Ой, ошибка" };
  }
}

export async function delWord(rus: string, port: string, user: string) {
  const userall = await getUser();
  let authorId = "n";
  let id = "";

  if (userall !== null) {
    authorId = userall;
    const list = await prisma.word.findMany({ where: { authorId } });
    list.map((item, index) => {
      if (item.rus === rus && item.port) {
        id = item.id;
      }
    });
  }
  if (id !== "") {
    await prisma.word.delete({
      where: {
        id,
      },
    });
    revalidatePath("/listword");
  } else {
    return {
      success: false,
      message: "Ой, ошибка",
    };
  }
}
