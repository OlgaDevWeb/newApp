import styles from "./page.module.css";
import Link from "next/link";
import Azul from "@/components/azul/azul";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTems } from "./action";

export default async function Sentences() {
  const result = await getTems();
  if (result.list) {
    const verb = result.list;
    return (
      <div>
        <TheHeaderMov
          name="Карточки с глаголами"
          team={""}
          link="/"
        ></TheHeaderMov>
        <div className="list">
          {verb.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/verb/${item.id}`}
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
        <p> Что-то не так</p>
      </div>
    );
  }
}
