import { tems } from "../../../components/util/team";
import { slova } from "../../../components/util/slova";
import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";
import Cardсall from "@/components/cardсall/cardсall";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";

type Props = {
  params: {
    word: string;
  };
};
export default async function Word({ params }: Props) {
  const { word } = await params;
  const teamw = word.split("_");
  const result = tems.filter((word) => word.sach === teamw[0]);
  const session = await getServerSession(authOptions);
  let userID = "";
  let auth = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      auth = true;
    }
  }

  let nom = teamw[1];

  let slovo = "Местоимения";

  if (result && nom) {
    const listt = result[0].nom;

    if (nom === "") {
      slovo = listt[0];
    } else {
      slovo = listt[Number(nom)];
    }
  }

  const resultlist = slova.filter((word) => word.name === slovo);
  let list = slova[0].dict;
  if (resultlist[0]) {
    list = resultlist[0].dict;
  }

  return (
    <div className={styles.main}>
      <Link href={`/cardsword/${word}/show`}>Пpoверь себя</Link>
      <div className={styles.list}>
        {list.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Cardсall
                rus={item.ru}
                port={item.port}
                verb={false}
                user={userID}
                auth={auth}
                min={false}
              ></Cardсall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
