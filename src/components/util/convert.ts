import { string } from "prop-types";

export const conv = (slovo_1: string) => {
  const slovo = slovo_1.toLowerCase();
  slovo.trim();
  let slovon = "";
  let i = 0;
  let k = slovo.length;

  while (i < slovo.length) {
    if (slovo[i] === "(") {
      k = i;
    }
    i = i + 1;
  }
  let slovonm = slovo;
  slovonm = slovo.slice(0, k);

  return slovonm;
};

export const convert = (slovo_1: string) => {
  const slovo = slovo_1.toLowerCase();
  slovo.trim();
  let slovon = "";
  let i = 0;
  let k = 0;
  let l = slovo.length - 1;
  while (i < slovo.length) {
    if (slovo[i] === "(") {
      k = 1;
    }
    if (slovo[i] === ")") {
      k = 0;
    }

    if (i === l) {
      if (slovo[i] === " ") {
        k = 1;
      }
    }

    if (k !== 1) {
      switch (slovo[i]) {
        case "ó":
          slovon = slovon + "o";
          break;
        case "õ":
          slovon = slovon + "o";
          break;
        case "ô":
          slovon = slovon + "o";
          break;

        case "ê":
          slovon = slovon + "e";
          break;
        case "é":
          slovon = slovon + "e";
          break;

        case "ã":
          slovon = slovon + "a";
          break;
        case "á":
          slovon = slovon + "a";
          break;
        case "à":
          slovon = slovon + "a";
          break;

        case "ç":
          slovon = slovon + "c";
          break;
        case "ú":
          slovon = slovon + "u";
          break;
        case "í":
          slovon = slovon + "i";
          break;
        case ")":
          break;
        default:
          slovon = slovon + slovo[i];
      }
    }

    i = i + 1;
  }
  let slovonm = slovon;

  if (slovon[slovon.length - 1] === " ") {
    slovonm = slovon.slice(0, slovon.length - 1);
  }

  return slovonm;
};

export const convertpt = (slovo_1: string) => {
  const slovo = slovo_1.toLowerCase();
  slovo.trim();
  let slovon = "";
  let i = 0;
  let k = 0;
  let l = slovo.length - 1;
  while (i < slovo.length) {
    if (slovo[i] === "(") {
      k = 1;
    }
    if (slovo[i] === ")") {
      k = 0;
    }

    if (i === l) {
      if (slovo[i] === " ") {
        k = 1;
      }
    }

    if (k !== 1) {
      switch (slovo[i]) {
        case ")":
          break;
        default:
          slovon = slovon + slovo[i];
      }
    }

    i = i + 1;
  }
  let slovonm = slovon;

  if (slovon[slovon.length - 1] === " ") {
    slovonm = slovon.slice(0, slovon.length - 1);
  }

  return slovonm;
};

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle(array: object[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function randomInteger(min: number, max: number) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const divid = (slovoi: string) => {
  let i;
  slovoi.trim();
  type Tone = {
    sone: string;
    id: number;
    order: number;
  };
  const all_2 = slovoi.split(" ");
  const all_1: string[] = [];
  all_2.map((item) => {
    if (item !== "") {
      all_1.push(item);
    }
  });
  let nom = 0;
  let nomi = 0;
  let nomt: number[] = [];
  i = 1;
  while (i < all_1.length + 1) {
    nomt.push(i);
    i = i + 1;
  }
  nomt.sort(() => Math.random() - 0.5);
  const all: Tone[] = [];

  all_1.map((item) => {
    if (item) {
      nom = nom + 1;
      const one: Tone = {
        sone: item,
        id: nom,
        order: nomt[nomi],
      };
      all.push(one);
      nomi = nomi + 1;
    }
  });

  return all;
};
