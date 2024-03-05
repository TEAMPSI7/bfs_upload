import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";

export const metadata: Metadata = {
  title: "BattleForSupremacy.TV",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
