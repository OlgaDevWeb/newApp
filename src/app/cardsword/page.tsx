import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { tems } from "../../components/util/team";
import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";

export default function Words() {
  return (
    <div className={styles.main}>
      <TheHeaderMov
        name={"Карточки со словами"}
        team=""
        link="/"
      ></TheHeaderMov>
      <div className={styles.list}>
        {tems.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/words/${item.sach}`}
              className={styles.link}
            >
              <Azul name={item.name} imga={item.img}></Azul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
