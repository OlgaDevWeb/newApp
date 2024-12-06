import { getTems } from "./action";
import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";

type Props = {
  params: Promise<{
    team: string;
  }>;
};
export default async function Team({ params }: Props) {
  const { team } = await params;
  const result = await getTems(team);
  if (result.list) {
    return (
      <div>
        <div className="list">
          {result.list.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/cardsword/${item.id}`}
                className={styles.link}
              >
                <Azul name={item.name} imga={`/pl${index}.png`}></Azul>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <p>....Ops</p>
      </div>
    );
  }
}
