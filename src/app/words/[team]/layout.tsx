import type { Metadata } from "next";
import { TheHeaderLearn } from "@/components/theheaderlearn/theheaderlearn";
import { tems } from "../../../components/util/team";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговоряших. Учим слова и спряжения глаголов",
};
type Props = {
  params: {
    team: string;
  };
};
export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ team: string; word: string }>;
}>) {
  let name = "";
  const { team } = await params;

  const result = tems.filter((word) => word.sach === team);
  if (result) {
    name = result[0].name;
  }

  return (
    <div>
      <TheHeaderMov name={""} team={name} link={"/words"}></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
