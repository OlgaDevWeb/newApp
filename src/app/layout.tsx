import type { Metadata } from "next";

import { Raleway } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/theheader/theheader";
import { TheFooter } from "@/components/thefooter/thefooter";
import { Providers } from "@/components/providers";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговорящих. Учим слова и спряжения глаголов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  page`}>
        <Providers>
          <TheHeader></TheHeader>
          <>{children}</>
          <TheFooter></TheFooter>
        </Providers>
      </body>
    </html>
  );
}
