import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "@/configs/auth";
import Link from "next/link";
import ExcelUploader from "@/components/dropfile/dropfile";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export default async function Page() {
  const session = await getServerSession(authOptions);

  let userID = "";

  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
    }
  }
  return (
    <div className={styles.main}>
      <TheHeaderMov name={" "} team="" link="/profile"></TheHeaderMov>
      <div className={styles.list}>
        <Link href={"/profile/addword"}>
          <h2> Загрузить слова из файла xlsx</h2>
        </Link>
      </div>
      <ExcelUploader userId={userID}></ExcelUploader>
    </div>
  );
}
