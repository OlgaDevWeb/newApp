import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "@/configs/auth";
import Image from "next/image";
import Link from "next/link";
import FileDrop from "@/components/filedrop/filedrop";
import ExcelUploader from "@/components/dropfile/dropfile";
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
