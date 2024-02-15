import { Inter } from "next/font/google";
import globals from './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "급식식단정보",
  description: "Copyright 2024. Park All pictures cannot be copied without permission.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
