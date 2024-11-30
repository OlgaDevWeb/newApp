"use client";
import styles from "./modal.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <button
          className={styles.closeIcon}
          onClick={() => {
            router.back();
          }}
        >
          <Image
            src={"/clouse.png"}
            alt="Portugal"
            width={20}
            height={20}
            priority
          />
        </button>
        {children}
      </div>
    </div>
  );
}
