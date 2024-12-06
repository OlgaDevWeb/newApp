import { shuffleArray } from "@/components/util/utils";
import Play from "@/components/play/play";
import { getWords } from "../action";

type Props = {
  params: Promise<{
    word: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { word } = await params;
  const resultlist = await getWords(word);
  let list: {
    ru: string;
    port: string;
  }[] = [];
  if (resultlist.list) {
    list = resultlist.list.map((item) => {
      return {
        ru: item.rus,
        port: item.port,
      };
    });
    list = shuffleArray(list);
  }

  return (
    <div className="main" style={{ paddingTop: "60px" }}>
      <Play list={list}></Play>
    </div>
  );
}
