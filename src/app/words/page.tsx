import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
//import { tems } from "../../components/util/team";
import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";
import { getTems } from "./action";

export default async function Words() {
  const tems = await getTems();

  if (tems.list) {
    return (
      <div>
        <TheHeaderMov
          name={"Карточки со словами"}
          team=""
          link="/"
        ></TheHeaderMov>
        <div className="list">
          {tems.list.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/words/${item.id}`}
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
        <p>Что то не так</p>
      </div>
    );
  }
}
