import styles from "./page.module.css";
import { auth } from "@/configs/auth";
import Link from "next/link";
import ExcelUploader from "@/components/dropfile/dropfile";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export default async function Page() {
  let userID = "";
  const session = await auth();
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
    }
  }
  return (
    <div style={{ minHeight: "100vh" }}>
      <TheHeaderMov name={" "} team="" link="/profile"></TheHeaderMov>
      <div className={styles.main}>
        <Link href={"/profile/addword"}>
          <h2> Загрузить слова из файла xlsx</h2>
        </Link>

        <ExcelUploader userId={userID}></ExcelUploader>
      </div>
    </div>
  );
}
