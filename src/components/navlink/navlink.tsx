"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function NavLinks() {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className={styles.main}>
      {session?.data && pathname !== "/profile" && (
        <Link href={"/profile"}>
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
      {!session?.data && <Link href={"/api/auth/signin"}>Sign In</Link>}
    </div>
  );
}
