import type { Metadata } from "next";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/theheader/theheader";
import { TheFooter } from "@/components/thefooter/thefooter";
import { Providers } from "@/components/providers";
import Link from "next/link";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
