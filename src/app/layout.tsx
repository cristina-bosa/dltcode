import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/assets/scss/main.scss";

const inter = Inter({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DLT Code - Ciberseguridad, blockchain e innovación",
  description: "DLTCode es una empresa de servicios profesionales, que opera en consultoría estratégica, ciberseguridad y formación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
