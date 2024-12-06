import styles from "./page.module.css";
import Fon from "@/components/fon/fon";
import { mainteam } from "@/components/util/team";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ paddingTop: "40px" }}>
      <div className={styles.main}>
        <div className={styles.tit}>
          <Image
            className={styles.logo}
            src={"/icon.png"}
            alt="Portugal"
            width={300}
            height={300}
            priority
          />
          <h2 className={styles.name}>НА КАРТОЧКАХ</h2>
        </div>
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
