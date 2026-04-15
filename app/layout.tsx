import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Helio — Work in sessions. Not fragments.";
const DESCRIPTION =
  "A project rotation system for people with more projects than time. Schedule focused sessions, capture context at the end, and pick up where you left off.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gethelio.app"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Helio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://gethelio.app/",
    siteName: "Helio",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/appicon.png",
        width: 1024,
        height: 1024,
        alt: "Helio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/appicon.png"],
  },
  icons: {
    icon: "/appicon.png",
    apple: "/appicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
