import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

const siteUrl = "https://dexterfoundation.in";

export const metadata: Metadata = {
  title: {
    default: "Dexter Foundation – Free Navodaya Coaching for Rural Students in Rajasthan",
    template: "%s | Dexter Foundation",
  },
  description:
    "Dexter Foundation provides free Navodaya entrance exam coaching to underprivileged rural students across Rajasthan. Over 114 students trained in 2024-2025 across 4 districts with offline classroom training, mock tests, and PTMs.",
  keywords: [
    "Dexter Foundation",
    "Navodaya coaching",
    "free coaching Rajasthan",
    "Navodaya entrance exam",
    "rural education India",
    "Navodaya Vidyalaya coaching",
    "free education for poor students",
    "Dexter Foundation Rajasthan",
    "Navodaya exam preparation",
    "NGO education India",
    "Barefoot English Training",
    "Dexter Capital Foundation",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dexter Foundation",
    title: "Dexter Foundation – Free Navodaya Coaching for Rural Students",
    description:
      "Empowering rural students through free Navodaya entrance exam coaching across Rajasthan. 114+ students trained, 4 locations, 250+ hours of structured training.",
    images: [
      {
        url: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/hero%20bg.webp",
        width: 1200,
        height: 630,
        alt: "Dexter Foundation – Empowering Rural Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter Foundation – Free Navodaya Coaching for Rural Students",
    description:
      "Empowering rural students through free Navodaya entrance exam coaching across Rajasthan.",
    images: [
      "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/homepage/hero%20bg.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Dexter Foundation",
              url: siteUrl,
              logo: "https://ey5228l95bqwogyb.public.blob.vercel-storage.com/Dexter%20Foundation%20logo.svg",
              description:
                "Dexter Foundation provides free Navodaya entrance exam coaching to underprivileged rural students across Rajasthan, India.",
              foundingDate: "2023",
              areaServed: {
                "@type": "State",
                name: "Rajasthan",
                containedInPlace: { "@type": "Country", name: "India" },
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
