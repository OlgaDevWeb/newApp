import type { Metadata } from "next";
import { tems } from "../../../components/util/team";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { slova } from "../../../components/util/slova";
export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговоряших. Учим слова и спряжения глаголов",
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ word: string }>;
}>) {
  const { word } = await params;

  const teamw = word.split("_");
  const result = tems.filter((word) => word.sach === teamw[0]);
  const nom = teamw[1];
  let slovo = "Местоимения";

  if (result && Number(nom)) {
    const listt = result[0].nom;
    slovo = listt[Number(nom)];
  }

  const resultlist = slova.filter((item) => item.name === slovo);

  return (
    <div>
      <TheHeaderMov
        name={"Карточки по теме:"}
        team={resultlist[0].name}
        link={`/words/${result[0].sach}`}
      ></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
