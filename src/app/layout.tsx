import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dexter Foundation - Navodaya Coaching",
  description: "Dexter Foundation Navodaya Coaching Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
