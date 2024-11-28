import type { Metadata } from "next";
import { TheHeaderLearn } from "@/components/theheaderlearn/theheaderlearn";
import { verb } from "../../../components/util/glag";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

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

  const result = verb.filter((word) => word.sach === `/${verbone}`);
  console.log(verbone);
  if (result) {
    name = result[0].name;
  }

  return (
    <div>
      <TheHeaderMov
        name={"Карточки с глаголами: "}
        team={name}
        link={"/verb"}
      ></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
