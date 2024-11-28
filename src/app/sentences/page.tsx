import styles from "./page.module.css";
import { teamm } from "../../components/util/fraz";
import Link from "next/link";
import Azul from "@/components/azul/azul";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
export default function Sentences() {
  return (
    <div className={styles.main}>
      <TheHeaderMov name="Карточки с фразами" team={""} link="/"></TheHeaderMov>
      <div className={styles.list}>
        {teamm.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/sentences/${item.sach}`}
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
