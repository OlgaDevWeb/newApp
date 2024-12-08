import styles from "./page.module.css";
import Cardсall from "@/components/cardсall/cardсall";
import { getWords } from "../action";
import { auth } from "@/configs/auth";

type Props = {
  params: Promise<{
    verbone: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { verbone } = await params;
  const session = await auth();
  let userID = "";
  let authl = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      authl = true;
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
