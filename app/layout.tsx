import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helio — Work in sessions. Not fragments.",
  description:
    "A project rotation system for people with more projects than time. Schedule focused sessions, capture context at the end, and pick up where you left off.",
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
