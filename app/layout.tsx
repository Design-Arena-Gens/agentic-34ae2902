import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mumbai Google LeadGen Control Hub",
  description:
    "End-to-end lead generation and qualification hub for Google services targeting Mumbai-based companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>{children}</body>
    </html>
  );
}
