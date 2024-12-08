import styles from "./page.module.css";
import { auth } from "@/configs/auth";
import { getAllwords } from "./actions";
import Cardсall from "@/components/cardсall/cardсall";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export default async function Page() {
  const session = await auth();

  let userID = "";
  let authl = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      authl = true;
    }
  }
  const list = await getAllwords();
  return (
    <div style={{ minHeight: "100vh" }}>
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
                auth={authl}
                min={true}
              ></Cardсall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
