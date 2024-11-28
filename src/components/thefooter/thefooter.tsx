import styles from "./thefooter.module.css";

export const TheFooter = () => {
  return (
    <footer className={styles.main}>
      <h4 style={{ alignSelf: "center" }}>
        Um novo idioma abre portas para novos mundos
      </h4>
      <p>@OlgaDev</p>
    </footer>
  );
};
