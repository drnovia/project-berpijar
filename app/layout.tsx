import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yayasan Berpijar Indonesia",
  description: "Berpijar bergerak melalui pendidikan, life skill, dan pemberdayaan anak.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Yayasan Berpijar Indonesia",
    description: "Menyalakan potensi. Membuka masa depan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Berpijar Indonesia",
    description: "Menyalakan potensi. Membuka masa depan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"><body>{children}</body></html>
  );
}
