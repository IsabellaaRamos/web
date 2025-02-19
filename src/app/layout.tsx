import './globals.css';
import type { Metadata } from "next";
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {

  title: "DevsTage",

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black  text-white">{children}</body>
    </html>
  );
}
