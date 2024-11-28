import Link from "next/link";
import styles from "./theheadermov.module.css";
import Image from "next/image";
type Tprops = {
  name: string;
  team: string;
  link: string;
};

export const TheHeaderMov = ({ name, team, link }: Tprops) => {
  return (
    <header className={styles.main}>
      <Link href={link} className={styles.link}>
        Назад
      </Link>
      <p className={styles.text}>{`${name} ${team}`}</p>
      <div className={styles.box}>.</div>
      <Link className={styles.logo} href={"/"}>
        <Image
          className={styles.img}
          src={"/logo.png"}
          alt="Portugal"
          width={80}
          height={80}
          priority
        />
      </Link>
    </header>
  );
};
