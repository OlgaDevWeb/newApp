"use client";
import { conv } from "../util/convert";
import styles from "./speak.module.css";
import Image from "next/image";

export const speak = (name: string, rate: number) => {
  const synth = window.speechSynthesis;
  const voice = new SpeechSynthesisUtterance(name);
  voice.lang = "pt-PT";
  voice.pitch = 1;
  voice.rate = rate;
  synth.speak(voice);
};

type Tprops = {
  text: string;
};
const Speak = (props: Tprops) => {
  return (
    <div>
      <button
        onClick={() => speak(conv(props.text), 0.8)}
        style={{
          padding: 0,
          margin: 0,
          borderRadius: 40,
          width: 40,
          height: 40,
        }}
      >
        <Image
          src={"/speak.png"}
          alt="speak"
          className={styles.image}
          width={25}
          height={25}
          priority
        />
      </button>
    </div>
  );
};

export default Speak;
