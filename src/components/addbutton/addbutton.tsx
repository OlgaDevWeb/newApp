"use client";

import { addWord } from "../cardсall/action";
import { useEffect, useState } from "react";
import styles from "./addbutton.module.css";

type Tprops = {
  rus: string;
  port: string;
  user: string;
};

const AddButton = ({ rus, port }: Tprops) => {
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [ok, setOk] = useState(false);

  const handleclick = async (rus: string, port: string) => {
    const ok = await addWord(rus, port);
    setResponse(ok);
    setOk(true);
  };

  useEffect(() => {
    if (ok === true) {
      document.addEventListener("click", hendlerClick);
    }
    if (ok === false) {
      document.removeEventListener("click", hendlerClick);
    }
  }, [ok]);

  const hendlerClick = () => {
    setOk(false);
  };

  return (
    <div>
      <button
        style={{
          fontSize: 25,
          padding: 0,
          margin: 0,
          borderRadius: 40,
          width: 40,
          height: 40,
        }}
        onClick={() => handleclick(rus, port)}
      >
        +
      </button>
      {ok && <div className={styles.box}>{response?.message}</div>}
    </div>
  );
};

export { AddButton };
