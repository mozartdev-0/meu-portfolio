import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mozart | Dev Fullstack",
  description: "Portfólio de um desenvolvedor apaixonado por tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">{children}</body>
    </html>
  );
}
