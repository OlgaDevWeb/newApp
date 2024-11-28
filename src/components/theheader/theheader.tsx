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
      <NavLinks></NavLinks>
    </header>
  );
};
