import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

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
        className={`${geistSans.variable, geistMono, AnekTelugu, "font-sans h-full bg-background text-foreground"} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
