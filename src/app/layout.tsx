import type { Metadata } from "next";

import { Raleway } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/theheader/theheader";
import { TheFooter } from "@/components/thefooter/thefooter";
//import { Providers } from "@/components/providers";
import { auth } from "@/configs/auth";

const raleway = Raleway({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Учим европейский португальский",
  description:
    "Европейский портуральский для русскоговорящих. Учим слова и спряжения глаголов",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  let userID = "";
  let authl = false;
  if (session) {
    if (session.user?.email) {
      userID = session.user?.email;
      authl = true;
    }
  }
  return (
    <html lang="en">
      <body
        className={`${raleway.className} `}
        style={{
          backgroundImage: 'url("/fon.png")',
        }}
      >
        <TheHeader name={userID} auth={authl}></TheHeader>
        {children}
        <div id="modal-root" />
        <TheFooter></TheFooter>
      </body>
    </html>
  );
}

/*export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} `}
        style={{
          backgroundImage: 'url("/fon.png")',
        }}
      >
        <Providers>
          <TheHeader></TheHeader>
          {auth}
          {children}
          <div id="modal-root" />
          <TheFooter></TheFooter>
        </Providers>
      </body>
    </html>
  );
}*/
