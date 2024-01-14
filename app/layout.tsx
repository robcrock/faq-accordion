import type { Metadata } from "next";
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
      <body className={`${workSans.className} bg-[#e6d9f1] relative`}>
        {children}
      </body>
    </html>
  );
}
