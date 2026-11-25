import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteFooter from "@/components/footer";
import Header from "@/components/header";

// Preferred canonical domain. Relative canonical/OG URLs on each page resolve against this.
const SITE_URL = "https://www.adesojifagadesolicitors.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adesoji Fagade Solicitor | Commercial Legal Advice",
  description:
    "Independent commercial legal advice for business owners, founders and organisations.",

  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
