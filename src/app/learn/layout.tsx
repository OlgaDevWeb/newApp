import type { Metadata } from "next";
import { TheHeaderLearn } from "@/components/theheaderlearn/theheaderlearn";

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговоряших. Учим слова и спряжения глаголов",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TheHeaderLearn></TheHeaderLearn>
      <>{children}</>
    </div>
  );
}
