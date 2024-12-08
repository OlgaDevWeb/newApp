"use client";
import styles from "./page.module.css";
import { useState } from "react";
import {
  addFraz,
  addTem,
  addTemf,
  addTems,
  addTemv,
  addVerb,
  addWords,
} from "./action";

export default function Page() {
  const [tt, settt] = useState("");
  const [ttr, setttr] = useState("");
  const [tts, settts] = useState("");

  const [ft, settft] = useState("");
  const [fall, settfall] = useState("");

  const [vt, settvt] = useState("");
  const [vall, settvall] = useState("");

  const handleSubmit = async () => {
    const ok = await addTems();

    if (ok.ok) {
      settt("ok");
    } else {
      settt("nou");
    }
  };
  const handleSubmitr = async () => {
    const ok = await addWords();

    if (ok.ok) {
      setttr("ok");
    } else {
      setttr("nou");
    }
  };

  const handleSubmits = async () => {
    const ok = await addTem();

    if (ok.ok) {
      settts("ok");
    } else {
      settts("nou");
    }
  };
  const handleSubmitft = async () => {
    const ok = await addTemf();

    if (ok.ok) {
      settft("ok");
    } else {
      settft("nou");
    }
  };
  const handleSubmitfall = async () => {
    const ok = await addFraz();

    if (ok.ok) {
      settfall("ok");
    } else {
      settfall("nou");
    }
  };
  const handleSubmitvt = async () => {
    const ok = await addTemv();

    if (ok.ok) {
      settvt("ok");
    } else {
      settvt("nou");
    }
  };
  const handleSubmitvall = async () => {
    const ok = await addVerb();

    if (ok.ok) {
      settvall("ok");
    } else {
      settvall("nou");
    }
  };

  return (
    <div className={styles.main}>
      <button onClick={handleSubmits}>Загрузить все темы верх</button>
      <p>{tts}</p>
      <button onClick={handleSubmit}>Загрузить все темы</button>
      <p>{tt}</p>
      <button onClick={handleSubmitr}>Загрузить все слова</button>
      <p>{ttr}</p>
      <p>Загрузка фраз</p>
      <button onClick={handleSubmitft}>Загрузить все темы верх</button>
      <p>{ft}</p>
      <button onClick={handleSubmitfall}>Загрузить все фразы</button>
      <p>{fall}</p>
      <p>Загрузка глаголов</p>
      <button onClick={handleSubmitvt}>Загрузить все глаголы верх</button>
      <p>{vt}</p>
      <button onClick={handleSubmitvall}>Загрузить все глаголы</button>
      <p>{vall}</p>
    </div>
  );
}
