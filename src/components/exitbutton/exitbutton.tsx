"use client";
import { signOut } from "next-auth/react";
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
