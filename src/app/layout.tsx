import "@/styles/global.css";
import "@/styles/global.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--montserrat-font",
});

export const metadata: Metadata = {
  title: "Taskina Assignment",
  description: "Author : Sarathi Nanavati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${montserrat.variable}`}>
      <head></head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
