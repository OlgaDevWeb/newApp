import type { Metadata } from "next";
import { TheHeaderLearn } from "@/components/theheaderlearn/theheaderlearn";
import { teamm } from "../../../components/util/fraz";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

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
  let name = "";
  const { fraz } = await params;

  const result = teamm.filter((word) => word.sach === fraz);
  if (result) {
    name = result[0].name;
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
