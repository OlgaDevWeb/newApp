import styles from "./theheader.module.css";
import NavLinks from "../navlink/navlink";

export const TheHeader = () => {
  return (
    <header className={styles.main}>
      <NavLinks></NavLinks>
    </header>
  );
};
