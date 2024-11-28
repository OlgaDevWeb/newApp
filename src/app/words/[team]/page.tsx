import { tems } from "../../../components/util/team";
import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";

type Props = {
  params: {
    team: string;
  };
};
export default async function Team({ params }: Props) {
  const { team } = await params;

  const result = tems.filter((word) => word.sach === team);
  let list = tems[0].nom;
  let stt = team;
  if (result) {
    list = result[0].nom;
  }
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {list.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/cardsword/${stt}_${index}`}
              className={styles.link}
            >
              <Azul name={item} imga={`/pl${index}.png`}></Azul>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
