import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
const workSans = localFont({
  src: "../public/assets/fonts/WorkSans-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "FAQ Accordion Card",
  description: "Frontend Mentor Challenge: FAQ Accordion Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
