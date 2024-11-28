import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "@/configs/auth";
import Link from "next/link";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import ArrowRun from "@/components/ut/arrowrun/arrowrun";
import { ExitButton } from "@/components/exitbutton/exitbutton";

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
  return (
    <div className={styles.main}>
      <TheHeaderMov name={""} team="" link="/"></TheHeaderMov>
      <h1>Личный кабинет {session?.user?.email}</h1>
      <div className={styles.list}>
        <Link href={"/profile/listword"}>
          <h2> Мой список слов</h2>
          <ArrowRun size={40}></ArrowRun>
        </Link>
        <Link href={"/profile/addword"}>
          <h2> Загрузить слова из файла </h2>
          <ArrowRun size={40}></ArrowRun>
        </Link>

        <div style={{ alignSelf: "center", justifySelf: "flex-end" }}>
          <ExitButton></ExitButton>
        </div>
      </div>
    </div>
  );
}
