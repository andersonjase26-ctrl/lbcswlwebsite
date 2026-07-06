import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LBCSWL",
  description: "Lean Bean Cream Squad Wiffleball League",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
