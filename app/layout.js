import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping List",
  description:
    "A simple shopping list app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dracula" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
