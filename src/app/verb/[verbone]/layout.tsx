import type { Metadata } from "next";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTem } from "../action";

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговорящих. Учим глаголы и их спряжения на карточках",
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ verbone: string }>;
}>) {
  let name = "";
  const { verbone } = await params;
  const resultlist = await getTem(verbone);
  if (resultlist.name) {
    name = resultlist.name;
  }

  return (
    <div>
      <TheHeaderMov
        name={"Глаголы: "}
        team={name}
        link={"/verb"}
      ></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
