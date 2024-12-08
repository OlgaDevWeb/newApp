import styles from "./page.module.css";
import Cardсall from "@/components/cardсall/cardсall";
import { auth } from "@/configs/auth";

import { getWords } from "../action";
type Props = {
  params: Promise<{
    fraz: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { fraz } = await params;

  const session = await auth();
  let userID = "";
  let authl = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      authl = true;
    }
  }

  const resultlist = await getWords(fraz);
  if (resultlist.list) {
    const list = resultlist.list;
    return (
      <div style={{ minHeight: "90vh" }}>
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
                  min={false}
                ></Cardсall>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <p>что-то не так</p>
      </div>
    );
  }
}
