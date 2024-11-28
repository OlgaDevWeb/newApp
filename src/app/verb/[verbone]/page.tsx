import styles from "./page.module.css";
import Cardсall from "@/components/cardсall/cardсall";
import { verboall } from "../../../components/util/glag";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
type Props = {
  params: {
    verbone: string;
  };
};
export default async function Page({ params: { verbone } }: Props) {
  const listnom = verbone.split("_");
  const nom = Number(listnom[1]);
  const list = verboall.slice(nom - 50, nom);
  const session = await getServerSession(authOptions);
  let userID = "";
  let auth = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      auth = true;
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.list}>
        {list.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Cardсall
                rus={item.rus}
                port={item.port}
                verb={true}
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
