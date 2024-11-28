"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { addWord, delWord } from "../cardсall/action";
import { useEffect, useState } from "react";

type Tprops = {
  rus: string;
  port: string;
  user: string;
};

const DellButton = ({ rus, port, user }: Tprops) => {
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
      onClick={() => delWord(rus, port, user)}
    >
      -
    </button>
  );
};

export { DellButton };
