import type { Metadata } from "next";
import { TheHeaderMov } from "@/components/theheadermov/theheadermov";
import { getTemsH } from "./action";

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
  params: Promise<{ team: string }>;
}>) {
  let name = "";
  const { team } = await params;
  const result = await getTemsH(team);
  if (result.list) {
    name = result.list[0].name;
  }
  return (
    <div>
      <TheHeaderMov name={""} team={name} link={"/words"}></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
