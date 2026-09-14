import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.vercel.app"),
  title: {
    default: "Nimbus — Panel de control para SaaS",
    template: "%s · Nimbus",
  },
  description:
    "Ingresos, clientes y tráfico conectados en un panel que se lee de un vistazo.",
  openGraph: {
    title: "Nimbus — Panel de control para SaaS",
    description:
      "Ingresos, clientes y tráfico conectados en un panel que se lee de un vistazo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimbus — Panel de control para SaaS",
    description:
      "Ingresos, clientes y tráfico conectados en un panel que se lee de un vistazo.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html
        lang="es"
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        <body className="bg-canvas font-sans text-ink antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}