"use client";

import { delWord } from "../cardсall/action";

type Tprops = {
  rus: string;
  port: string;
  user: string;
};

const DellButton = ({ rus }: Tprops) => {
  return (
    <button
      style={{
        fontSize: 25,
        padding: 0,
        margin: 0,
        borderRadius: 40,
        width: 40,
        height: 40,
      }}
      onClick={() => delWord(rus)}
    >
      -
    </button>
  );
};

export { DellButton };
