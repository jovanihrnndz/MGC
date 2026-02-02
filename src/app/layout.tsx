import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { GoogleAnalytics } from "@/components/analytics/ga";
import { siteConfig } from "@/lib/site";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Murrieta's General Construction",
    template: "%s | Murrieta's General Construction"
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png"
  },
  openGraph: {
    type: "website",
    title: "Murrieta's General Construction",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Murrieta's General Construction"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-white font-body">
        <GoogleAnalytics />
        <LocalBusinessJsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
