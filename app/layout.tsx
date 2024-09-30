import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Mikael Very - Developper Fullstack",
  description: "Welcome to my portfolio website, where you can explore my projects and skills as a Fullstack Developer."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(geistSans.variable, geistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
