"use client";
import { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import Speak from "../speak/speak";
import styles from "./card.module.css";
import { conv } from "../util/convert";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
type Tprops = {
  rus: string;
  port: string;
  calc: Dispatch<SetStateAction<number>>;
  ok: number;
};
const speak = (name: string, rate: number) => {
  const synth = window.speechSynthesis;
  const voice = new SpeechSynthesisUtterance(name);
  voice.lang = "pt-PT";
  voice.pitch = 1;
  voice.rate = rate;
  synth.speak(voice);
};

const Card = ({ rus, port, calc, ok }: Tprops) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  return (
    <div className={styles.mainbox}>
      <div className={styles.box}>
        <div>{rus}</div>
      </div>

      <div className={styles.box}>
        <Image
          className={styles.logo}
          src={"/yes.png"}
          alt={"yes"}
          width={50}
          height={50}
          priority
          onClick={() => {
            setYes(true);
            setNo(false);
            calc(ok + 1);
          }}
        />
        <Image
          className={styles.logo}
          src={"/no.png"}
          alt={"no"}
          width={50}
          height={50}
          priority
          onClick={() => {
            setNo(true);
            setYes(false);
            speak(conv(port), 0.8);
          }}
        />
      </div>
      {!yes && !no && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            <Image
              className={styles.what}
              src={"/what.png"}
              alt={"no"}
              width={100}
              height={100}
              priority
            />
          </motion.div>
        </AnimatePresence>
      )}
      {no && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            <Image
              className={styles.icon}
              src={"/okw.png"}
              alt={"no"}
              width={60}
              height={60}
              priority
            />
            <div style={{ fontSize: "30px" }}>{port}</div>
          </motion.div>
        </AnimatePresence>
      )}
      {yes && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            <Image
              className={styles.icon}
              src={"/ok.png"}
              alt={"ok"}
              width={60}
              height={60}
              priority
            />
            <div style={{ fontSize: "30px" }}>{port}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Card;
