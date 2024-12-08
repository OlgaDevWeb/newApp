import { signOut } from "@/configs/auth";
import styles from "./exitbutton.module.css";

export function ExitButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button className={styles.but} type="submit">
        Выйти из кабинета
      </button>
    </form>
  );
}

/*"use client";
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

export { ExitButton };*/
