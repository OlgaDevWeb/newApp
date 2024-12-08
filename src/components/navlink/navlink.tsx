"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";

import Image from "next/image";
import { useState } from "react";

type Tprops = {
  name: string;
  auth: boolean;
};

export default function NavLinks({ name, auth }: Tprops) {
  const [act, setact] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.main}>
      {auth && pathname !== "/profile" && (
        <Link
          href={"/profile"}
          onMouseEnter={() => setact(true)}
          onMouseLeave={() => setact(false)}
          onClick={() => setact(false)}
        >
          <Image
            className={styles.logo}
            src="/man.png"
            alt="Portugal"
            width={40}
            height={40}
            priority
          />
        </Link>
      )}
      {!auth && <Link href={"/api/auth/signin"}>Sign In</Link>}
      {act && <div className={styles.box}>{name}</div>}
    </div>
  );
}
