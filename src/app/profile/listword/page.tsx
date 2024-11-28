import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "@/configs/auth";
import { getAllwords } from "./actions";
import Cardсall from "@/components/cardсall/cardсall";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export default async function Page() {
  const session = await getServerSession(authOptions);

  let userID = "";
  let auth = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      auth = true;
    }
  }
  const list = await getAllwords();
  return (
    <div className={styles.main}>
      <TheHeaderMov
        name={"Мой список слов"}
        team=""
        link="/profile"
      ></TheHeaderMov>
      <div className={styles.list}>
        {list.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Cardсall
                rus={item.rus}
                port={item.port}
                verb={false}
                user={userID}
                auth={auth}
                min={true}
              ></Cardсall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
