"use client";
import { signIn, signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { addWord } from "../cardсall/action";
import { useEffect, useState } from "react";
import styles from "./exitbutton.module.css";

const ExitButton = () => {
  return (
    <div>
      <button
        className={styles.but}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Выйти из кабинета
      </button>
    </div>
  );
};

export { ExitButton };
