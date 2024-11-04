import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import 'remixicon/fonts/remixicon.css'

export const metadata: Metadata = {
  title: "Clase practica",
  description: "Clase demostrativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
