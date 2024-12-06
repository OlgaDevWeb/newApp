import type { Metadata } from "next";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTem } from "../action";

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговорящих. Учим фразы на карточках",
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ fraz: string }>;
}>) {
  const { fraz } = await params;

  const resultlist = await getTem(fraz);
  let name = "";

  if (resultlist.name) {
    name = resultlist.name;
  }

  return (
    <div>
      <TheHeaderMov
        name={"Карточки по теме: "}
        team={name}
        link={"/sentences"}
      ></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
