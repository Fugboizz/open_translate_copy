import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import AntdStyledComponentsRegistry from "@/app/repository/registry/AntdStyledComponentsRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI LIT Education",
  description: "AI Rewriter",
};

interface LayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>{children}</AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
