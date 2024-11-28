import Link from "next/link";
import styles from "./theheaderlearn.module.css";
import Image from "next/image";
type Tprops = {
  name: string;
  link: string;
};

export const TheHeaderLearn = ({ name, link }: Tprops) => {
  return (
    <header className={styles.main}>
      <Link href={link}> {name} </Link>
    </header>
  );
};
