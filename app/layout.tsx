import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import { NavBar } from "../components/navbar";

export const metadata: Metadata = {
  title: "Tune Rank",
  description: "Ranking your favorite tunes",
};

const font = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} antialiased dark`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
