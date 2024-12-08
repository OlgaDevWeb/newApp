"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/configs/auth";
import { revalidatePath } from "next/cache";

async function getUser() {
  const session = await auth();

  if (session) {
    if (session.user?.email) {
      return session.user.email;
    }
    return null;
  }
  return null;
}

export async function checkWord(rus: string, port: string) {
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
  }
}

export async function addWord(rus: string, port: string) {
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
        await prisma.word.create({
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

export async function delWord(rus: string) {
  const userall = await getUser();
  let authorId = "n";
  let id = "";

  if (userall !== null) {
    authorId = userall;
    const list = await prisma.word.findMany({ where: { authorId } });
    list.map((item) => {
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
