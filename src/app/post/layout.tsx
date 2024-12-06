import type { Metadata } from "next";

import { TheHeaderMov } from "@/components/theheadermov/theheadermov";

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговорящих. Учим фразы на карточках",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TheHeaderMov name={"Отзывы"} team={""} link={"/"}></TheHeaderMov>
      <>{children}</>
    </div>
  );
}
