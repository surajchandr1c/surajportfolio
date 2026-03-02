import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "surajchandr1c",
    template: "%s | Suraj Portfolio",
  },
  description:
    "Portfolio of Suraj, a full-stack developer and UI/UX designer building performance-focused websites, web apps, and brand content.",
  keywords: [
    "Suraj",
    "full-stack developer",
    "web developer portfolio",
    "UI UX designer",
    "React developer",
    "Next.js developer",
    "WordPress developer",
    "freelance web developer",
    "video editing",
    "digital marketing",
  ],
  authors: [{ name: "Suraj" }],
  creator: "Suraj",
  category: "technology",
  applicationName: "Suraj Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Suraj | Full-Stack Developer & UI/UX Designer",
    description:
      "Explore Suraj's portfolio featuring modern websites, web applications, design systems, and digital creative services.",
    siteName: "Suraj Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/surajpic.png",
        width: 1200,
        height: 1200,
        alt: "Suraj profile photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj | Full-Stack Developer & UI/UX Designer",
    description:
      "Modern, scalable web development and design services by Suraj.",
    images: ["/surajpic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${ibmPlexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
