import "./globals.css";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ФКТиПМ",
  description: "Факультет компьютерных технологий и прикладной математики",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>ФКТиПМ</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
