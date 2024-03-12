import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

export const metadata: Metadata = {
  title: "BattleForSupremacy.TV",
  description: "Welcome to BattleForSupremacy.TV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
