import styles from "./page.module.css";
import Cardсall from "@/components/cardсall/cardсall";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { getWords } from "../action";
type Props = {
  params: Promise<{
    verbone: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { verbone } = await params;

  const session = await getServerSession(authOptions);
  let userID = "";
  let auth = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      auth = true;
    }
  }

  const resultlist = await getWords(verbone);
  if (resultlist.list) {
    const list = resultlist.list;

    return (
      <div>
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
  } else {
    return (
      <div className={styles.main}>
        <p>что-то не так</p>
      </div>
    );
  }
}
