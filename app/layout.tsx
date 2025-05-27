import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igreja AD Capão - CADCAF - Transformando Vidas Através do Amor",
  description:
    "Uma comunidade de fé dedicada a espalhar esperança através de ações concretas. Participe da nossa campanha Marmitas da Esperança e ajude famílias necessitadas.",
  keywords:
    "igreja, AD Capão - CADCAF, doação, marmitas, voluntariado, comunidade, fé, solidariedade",
  authors: [{ name: "Igreja AD Capão - CADCAF" }],
  openGraph: {
    title: "Igreja AD Capão - CADCAF - Transformando Vidas Através do Amor",
    description:
      "Participe da nossa missão de espalhar esperança e amor. Faça parte da campanha Marmitas da Esperança.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, fontFamily: "Roboto, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
