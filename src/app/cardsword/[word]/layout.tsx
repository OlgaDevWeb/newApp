import type { Metadata } from "next";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTems } from "./action";
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

  const resultlist = await getTems(word);
  let name = "";
  let idh = "";
  if (resultlist.name) {
    name = resultlist.name;
    idh = resultlist.idh;
  }

  return (
    <div>
      <TheHeaderMov name={""} team={name} link={`/words/${idh}`}></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
