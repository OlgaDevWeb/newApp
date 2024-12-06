import Link from "next/link";
import styles from "./page.module.css";
import { getPosts } from "./action";

export default async function Page() {
  const resultlist = await getPosts();

  if (resultlist.list) {
    return (
      <div style={{ minHeight: "100vh", paddingBottom: "80px" }}>
        <Link href={"/post/newpost"} className="box">
          <h2>оставить отзыв</h2>
        </Link>
        <div>
          {resultlist.list.map((item, index) => {
            return (
              <div
                key={index}
                className="box"
                style={{ justifyContent: "flex-start" }}
              >
                <h2>{item.title}</h2>
                <h3>{item.body}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <p>Пока ничего нет оставьте первый отзыв</p>
        <Link href={"/post/newpost"}></Link>
      </div>
    );
  }
}
