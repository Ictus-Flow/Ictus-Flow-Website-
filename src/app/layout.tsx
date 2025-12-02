import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ictus Flow | AI Consultancy for Construction SMEs",
  description: "Operationalising AI for small-to-medium construction firms. Eliminate site waste through intelligent automation of site diaries, RAMS analysis, and verbal instructions.",
  keywords: ["AI construction", "construction technology", "RAMS automation", "site diary automation", "construction consultancy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
