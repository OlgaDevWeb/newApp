import styles from "./page.module.css";
import Azul from "@/components/azul/azul";
import Link from "next/link";
import Cardсall from "@/components/cardсall/cardсall";
import { teamm } from "../../../components/util/fraz";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
type Props = {
  params: {
    fraz: string;
  };
};
export default async function Page({ params }: Props) {
  const { fraz } = await params;
  let list = teamm[0].list;
  const result = teamm.filter((word) => word.sach === fraz);

  if (result) {
    list = result[0].list;
  }

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
                rus={item.ru}
                port={item.port}
                verb={false}
                user={userID}
                auth={auth}
              ></Cardсall>
            </div>
          );
        })}
      </div>
    </div>
  );
}
