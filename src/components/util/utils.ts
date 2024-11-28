import { useEffect, useRef } from "react";

export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;

export function isEmailValid(value: string) {
  return EMAIL_REGEXP.test(value);
}

export function shuffleArray(
  array: {
    ru: string;
    port: string;
  }[]
) {
  for (let i = array.length - 1; i > 0; i--) {
    // Случайный индекс от 0 до i (включительно)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Обмен элементов местами
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
