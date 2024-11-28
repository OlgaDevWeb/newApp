import Link from "next/link";
import styles from "./theheader.module.css";
import NavLinks from "../navlink/navlink";

export const TheHeader = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
  ];
  return (
    <header className={styles.main}>
      <NavLinks links={links}></NavLinks>
    </header>
  );
};
