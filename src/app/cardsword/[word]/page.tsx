import styles from "./page.module.css";
import Link from "next/link";
import Cardсall from "@/components/cardсall/cardсall";
import { auth } from "@/configs/auth";
import { getWords } from "./action";
import Image from "next/image";

type Props = {
  params: Promise<{
    word: string;
  }>;
};
export default async function Word({ params }: Props) {
  const { word } = await params;

  const session = await auth();

  let userID = "";
  let authl = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      authl = true;
    }
  }

  const resultlist = await getWords(word);
  if (resultlist.list) {
    return (
      <div>
        <div className={styles.list}>
          <Link href={`/cardsword/${word}/show`} className={styles.link}>
            <Image
              className={styles.logo}
              src={"/test.png"}
              alt="Portugal"
              width={300}
              height={300}
              priority
            />
          </Link>
          {resultlist.list.map((item, index) => {
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
        <p> Что-то не так</p>
      </div>
    );
  }
}
