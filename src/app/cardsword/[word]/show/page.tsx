import { tems } from "@/components/util/team";
import { slova } from "@/components/util/slova";
import styles from "./page.module.css";
import { shuffleArray } from "@/components/util/utils";
import Play from "@/components/play/play";

type Props = {
  params: Promise<{
    word: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { word } = await params;
  const teamw = word.split("_");
  const result = tems.filter((word) => word.sach === teamw[0]);
  const nom = teamw[1];

  let slovo = "Местоимения";

  if (result && nom) {
    const listt = result[0].nom;

    if (nom === "") {
      slovo = listt[0];
    } else {
      slovo = listt[Number(nom)];
    }
  }

  const resultlist = slova.filter((word) => word.name === slovo);
  let list = slova[0].dict;
  if (resultlist[0]) {
    list = shuffleArray(resultlist[0].dict);
  }

  return (
    <div className={styles.main}>
      <Play list={list}></Play>
    </div>
  );
}
