"use client";

import styles from "./azul.module.css";

import Image from "next/image";

type Tprops = {
  name: string;
  imga: string;
};

export default function Azul({ name, imga }: Tprops) {
  return (
    <div className={styles.main}>
      <Image
        className={styles.logo}
        src={imga}
        alt={name}
        width={150}
        height={150}
        priority
      />
      <p className={styles.textt}>{name}</p>
    </div>
  );
}
