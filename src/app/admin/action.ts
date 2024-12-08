"use server";

import { prisma } from "@/lib/prisma";
import { tems } from "@/components/util/team";
import { slova } from "@/components/util/slova";
import { teamm } from "@/components/util/fraz";
import { verboall } from "@/components/util/glag";
import { verb } from "@/components/util/glag";
type Ttem = {
  name: string;
};

type Ttems = {
  name: string;
  idh: string;
};
type Tslov = {
  name: string;
  rus: string;
  port: string;
  idt: string;
};
type TFraz = {
  rus: string;
  port: string;
  idt: string;
};

export async function addTem() {
  try {
    const team = tems.reverse();

    let nom = team.length - 1;

    const listteam: Ttem[] = [];

    while (nom > -1) {
      listteam.push({
        name: team[nom].name,
      });
      nom = nom - 1;
    }

    await prisma.teamsHigh.createMany({
      data: listteam,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addTemf() {
  try {
    const team = teamm;
    let nom = team.length - 1;

    const listteam: Ttem[] = [];

    while (nom > -1) {
      listteam.push({
        name: team[nom].name,
      });
      nom = nom - 1;
    }

    await prisma.teamsFraz.createMany({
      data: listteam,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addTems() {
  try {
    const team = tems;
    let nom = team.length - 1;
    const listteam: Ttems[] = [];

    while (nom > -1) {
      const name = team[nom].name;
      const namet = await prisma?.teamsHigh.findMany({ where: { name } });
      const idh = namet[0].id;
      let col = team[nom].nom.length - 1;

      while (col > -1) {
        listteam.push({
          name: team[nom].nom[col],
          idh: idh,
        });
        col = col - 1;
      }
      nom = nom - 1;
    }
    await prisma.teams.createMany({
      data: listteam,
    });

    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addWords() {
  try {
    const list = slova;
    let nom = list.length - 1;

    const listslov: Tslov[] = [];

    while (nom > -1) {
      let col = list[nom].dict.length - 1;
      const name = list[nom].name;

      const namet = await prisma?.teams.findMany();

      let idt = "";
      namet.map((item) => {
        if (item.name === name) {
          idt = item.id;
        }
      });

      while (col > -1) {
        listslov.push({
          name: list[nom].name,
          rus: list[nom].dict[col].ru,
          port: list[nom].dict[col].port,
          idt: idt,
        });
        col = col - 1;
      }
      nom = nom - 1;
    }
    await prisma.words.createMany({
      data: listslov,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addFraz() {
  try {
    const tem = teamm;

    let nom = tem.length - 1;

    const listslov: TFraz[] = [];

    while (nom > -1) {
      let col = tem[nom].list.length - 1;
      const name = tem[nom].name;

      const namet = await prisma?.teamsFraz.findMany();

      let idt = "";

      namet.map((item) => {
        if (item.name === name) {
          idt = item.id;
        }
      });

      while (col > -1) {
        listslov.push({
          rus: tem[nom].list[col].ru,
          port: tem[nom].list[col].port,
          idt: idt,
        });
        col = col - 1;
      }
      nom = nom - 1;
    }
    await prisma.fraz.createMany({
      data: listslov,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addTemv() {
  try {
    const team = verb.reverse();
    let nom = team.length - 1;

    const listteam: Ttem[] = [];

    while (nom > -1) {
      listteam.push({
        name: team[nom].name,
      });
      nom = nom - 1;
    }

    await prisma.teamsVerb.createMany({
      data: listteam,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}

export async function addVerb() {
  try {
    const list = verboall;
    const tem = verb.reverse();
    const all = verboall.length;
    let nom = 0;

    const listslov: TFraz[] = [];

    while (nom < tem.length) {
      let col = 0;
      const name = tem[nom].name;
      const namet = await prisma?.teamsVerb.findMany();
      let idt = "";

      namet.map((item) => {
        if (item.name === name) {
          idt = item.id;
        }
      });

      while (col < 50) {
        if (nom * 50 + col < all - 1) {
          listslov.push({
            rus: list[nom * 50 + col].rus,
            port: list[nom * 50 + col].port,
            idt: idt,
          });
        }
        col = col + 1;
      }
      nom = nom + 1;
    }
    await prisma.verb.createMany({
      data: listslov,
    });
    return { error: "ok", ok: true };
  } catch {
    return { error: "Something went wrong", ok: false };
  }
}
