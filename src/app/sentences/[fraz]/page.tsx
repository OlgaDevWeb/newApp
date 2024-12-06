import styles from "./page.module.css";
import Cardсall from "@/components/cardсall/cardсall";
import { teamm } from "../../../components/util/fraz";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { getWords } from "../action";
type Props = {
  params: Promise<{
    fraz: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { fraz } = await params;

  const session = await getServerSession(authOptions);
  let userID = "";
  let auth = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      auth = true;
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
                  auth={auth}
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
