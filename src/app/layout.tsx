import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default:
      "Five Star STR Cleaning | Las Vegas Short-Term Rental Cleaning",
    template: "%s | Five Star STR Cleaning",
  },
  description:
    "Las Vegas's most trusted cleaning service for Airbnb, VRBO, and short-term rental properties. Fast turnovers, five-star results.",
  keywords: [
    "Las Vegas Airbnb cleaning",
    "short-term rental cleaning",
    "STR turnover cleaning",
    "VRBO cleaning service Las Vegas",
    "Airbnb cleaning Las Vegas",
    "vacation rental cleaning",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: "Five Star STR Cleaning | Las Vegas Short-Term Rental Cleaning",
    description:
      "Las Vegas's most trusted cleaning service for Airbnb, VRBO, and short-term rental properties.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  description:
    "Las Vegas's most trusted cleaning service for Airbnb, VRBO, and short-term rental properties.",
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
