import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kishanwedsgayatri.com"),
  title: "Kishan Weds Gayatri — The Royal Wedding Invitation",
  description:
    "॥ श्री गणेशाय नमः ॥ सप्रेम आमंत्रण — Join us in celebrating the royal Rajasthani wedding of Kishan & Gayatri on 22 November 2026.",
  openGraph: {
    title: "Kishan Weds Gayatri — Royal Wedding Invitation",
    description:
      "Two hearts, one sacred bond, a lifetime of togetherness. 22 November 2026. Explore our royal wedding celebration and celebrations timeline.",
    images: [
      {
        url: "/images/couple-portrait-1.jpeg",
        width: 1080,
        height: 1440,
        alt: "Kishan & Gayatri Royal Wedding",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Weds Gayatri — Royal Wedding Invitation",
    description: "Two hearts, one sacred bond, a lifetime of togetherness. 22 November 2026.",
    images: ["/images/couple-portrait-1.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#713C43",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Noto+Serif+Devanagari:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#F7F0E3] text-[#41171D] antialiased selection:bg-[#A84B40] selection:text-[#FAF6EE]">
        {children}
      </body>
    </html>
  );
}
