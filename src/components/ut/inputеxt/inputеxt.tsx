"use client";
import styles from "./inputеxt.module.css";
import open from "../../images/Vector.png";
import { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";
import { useUpdateEffect } from "../../util/utils";
import { AnimatePresence, motion } from "framer-motion";

type TInput = {
  func: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  impotant: boolean;
  valor: string;
};
function InputText({ func, name, impotant, valor }: TInput) {
  const errortext = `Please enter a ${name}`;
  const [text, setText] = useState(valor);
  const [error, setError] = useState(false);
  const [first, setFirst] = useState(false);
  const [top, settop] = useState(0);
  const [oldtop, setoldtop] = useState(-35);
  const [font, setfont] = useState(17);
  const inp = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (impotant) {
      if (first) {
        if (text === "") {
          setError(true);
        } else {
          setError(false);
        }
      }
    }
  }, [text]);

  const handleChange = (e: any) => {
    setText(e.target.value);
    func(e.target.value);
    setFirst(true);
  };

  const handleClick = (e: any) => {
    settop(-35);
    setFirst(true);

    if (inp.current !== null) {
      inp.current.focus();
    }
  };

  const handleBlur = (e: any) => {
    if (text === "") {
      settop(0);
    }
  };
  if (text === "") {
    return (
      <div className={styles.main}>
        <AnimatePresence>
          <motion.label
            className={styles.label}
            htmlFor="cheese"
            onClick={handleClick}
            style={{ top: `${top}px`, fontSize: `${font}px` }}
            initial={{ opacity: 0, top: oldtop }}
            exit={{ opacity: 0, top: oldtop }}
            animate={{ opacity: 1, top: top }}
            transition={{
              delay: 0,
              duration: 0.4,
            }}
          >
            {name}
          </motion.label>
        </AnimatePresence>
        <motion.input
          className={styles.userBox}
          type={"text"}
          value={text}
          name="password"
          onChange={handleChange}
          ref={inp}
          onBlur={handleBlur}
        />

        {error && (
          <div className={styles.error}>
            <img className={styles.icon} src={"/alert.png"} alt="closeeye" />
            {errortext}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <AnimatePresence>
          <motion.label
            className={styles.label}
            htmlFor="cheese"
            onClick={handleClick}
            style={{ top: `${oldtop}px`, fontSize: `${font}px` }}
            initial={{ opacity: 0, top: oldtop }}
            exit={{ opacity: 0, top: oldtop }}
            animate={{ opacity: 1, top: oldtop }}
            transition={{
              delay: 0,
              duration: 0.4,
            }}
          >
            {name}
          </motion.label>
        </AnimatePresence>
        <motion.input
          className={styles.userBox}
          type={"text"}
          value={text}
          name="password"
          onChange={handleChange}
          ref={inp}
          onBlur={handleBlur}
        />

        {error && (
          <div className={styles.error}>
            <img className={styles.icon} src={"/alert.png"} alt="closeeye" />
            {errortext}
          </div>
        )}
      </div>
    );
  }
}

export default InputText;
