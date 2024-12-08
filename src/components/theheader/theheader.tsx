import styles from "./theheader.module.css";
import NavLinks from "../navlink/navlink";

type Tprops = {
  name: string;
  auth: boolean;
};
export const TheHeader = ({ name, auth }: Tprops) => {
  return (
    <header className={styles.main}>
      <NavLinks name={name} auth={auth}></NavLinks>
    </header>
  );
};
