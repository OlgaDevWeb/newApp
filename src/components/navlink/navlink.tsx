"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./navlink.module.css";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ButtonRode from "../ut/buttonrode/buttonrode";

type Tprops = {
  links: {
    name: string;
    link: string;
  }[];
};

export default function NavLinks({ links }: Tprops) {
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

/*className={clsx(`${styles.activenot}`, {
  "`${styles.activenot}`": pathname === link,
})}*/
/*{links.map((item, index) => {
  return (
    <Link
      key={item.name}
      href={item.link}
      className={clsx(`${styles.activenot}`, {
        [`${styles.active}`]: pathname === item.link,
        [`${styles.activen}`]: pathname !== item.link,
      })}
    >
      {item.name}
    </Link>
  );
})}*/
