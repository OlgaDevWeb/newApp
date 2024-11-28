import styles from "./fon.module.css";
import Image from "next/image";
import Link from "next/link";

type Tprops = {
  name: string;
  imga: string;
  link: string;
};

export default function Fon({ name, imga, link }: Tprops) {
  return (
    <Link className={styles.main} href={link}>
      <Image
        className={styles.logo}
        src={imga}
        alt="Portugal"
        width={300}
        height={300}
        priority
      />
      <h3 className={styles.name}>{name}</h3>
    </Link>
  );
}
