import styles from "./page.module.css";
import { verb } from "../../components/util/glag";
import Link from "next/link";
import Azul from "@/components/azul/azul";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
export default function Sentences() {
  return (
    <div className={styles.main}>
      <TheHeaderMov
        name="Карточки с глаголами"
        team={""}
        link="/"
      ></TheHeaderMov>
      <div className={styles.list}>
        {verb.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/verb/${item.sach}`}
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
