import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIALS } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Technology Partner for Modern Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Technology Partner for Modern Businesses`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Technology Partner for Modern Businesses`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/company-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ambattur",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600053",
    addressCountry: "IN",
  },
  sameAs: SOCIALS.map((social) => social.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
