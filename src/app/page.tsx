import styles from "./page.module.css";
import Fon from "@/components/fon/fon";
import { mainteam } from "@/components/util/team";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2 style={{ textAlign: "center", margin: "auto" }}>
        ПОРТУГАЛЬСКИЙ НА КАРТОЧКАХ
      </h2>

      <div className={styles.main}>
        {mainteam.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Fon name={item.name} imga={item.img} link={item.link}></Fon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
