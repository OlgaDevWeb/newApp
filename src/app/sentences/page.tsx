import styles from "./page.module.css";
import Link from "next/link";
import Azul from "@/components/azul/azul";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTems } from "./action";

export default async function Sentences() {
  const result = await getTems();
  if (result.list) {
    const teamm = result.list;
    return (
      <div style={{ minHeight: "90vh", margin: "0", padding: "0" }}>
        <TheHeaderMov
          name="Карточки с фразами"
          team={""}
          link="/"
        ></TheHeaderMov>
        <div className="list">
          {teamm.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/sentences/${item.id}`}
                className={styles.link}
              >
                <Azul name={item.name} imga={`/imgaz${index}.png`}></Azul>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <TheHeaderMov
          name="Карточки с фразами"
          team={""}
          link="/"
        ></TheHeaderMov>
        <p>что-то не так</p>
      </div>
    );
  }
}
