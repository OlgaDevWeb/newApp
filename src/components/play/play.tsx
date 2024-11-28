"use client";

import Image from "next/image";
import Speak from "../speak/speak";
import styles from "./play.module.css";
import { useEffect, useState } from "react";
import SimpleCH from "../slaiderch/slaiderch";

type Tprops = {
  list: { ru: string; port: string }[];
};

const Play = ({ list }: Tprops) => {
  let nom = list.length;
  let i = 11;
  console.log(list.length);
  const listlist = [list.slice(0, 10)];
  const playlist = [
    {
      act: false,
      list: list.slice(0, 10),
    },
  ];
  if (nom > 10) {
    while (nom > 10) {
      if (list.slice(i, i + 9).length > 0) {
        listlist.push(list.slice(i, i + 9));
        playlist.push({
          act: false,
          list: list.slice(i, i + 9),
        });
        i += 10;
        nom -= 10;
      } else {
        i += 10;
        nom -= 10;
      }
    }
  }
  const [listplay, setListplay] = useState(listlist[0]);
  const [ok, setOk] = useState(0);
  const [fraz, setFraz] = useState("Знаешь слово?");
  const [act, setact] = useState(0);

  useEffect(() => {
    if (ok > 0) {
      if (ok < 5) {
        setFraz(`Опознано ${ok} слова`);
      } else {
        setFraz(`Опознано ${ok} слов `);
      }
    }
  }, [ok]);
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {playlist.map((item, index) => {
          if (index === act) {
            return (
              <div key={index}>
                <Image
                  className={styles.logoa}
                  src={`/icc${index}.png`}
                  alt={`portugal ${index}`}
                  width={100}
                  height={100}
                  priority
                />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <Image
                  className={styles.logo}
                  src={`/icc${index}.png`}
                  alt={`portugal ${index}`}
                  width={80}
                  height={80}
                  priority
                  onClick={() => {
                    setListplay(item.list);
                    setact(index);
                  }}
                />
              </div>
            );
          }
        })}
      </div>

      <div className={styles.box}>
        <h3>{fraz}</h3>
      </div>
      <div className={styles.box} key={act}>
        <SimpleCH list={listplay} calc={setOk} ok={ok}></SimpleCH>
      </div>
    </div>
  );
};

export default Play;
