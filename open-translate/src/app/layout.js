import { Inter } from "next/font/google";
import "./globals.css";
import AntdStyledComponentsRegistry from "@/components/registry/AntdStyledComponentsRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI LIT Education",
  description: "AI Rewriter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>{children}</AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
