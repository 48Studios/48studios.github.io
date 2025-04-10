import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "48 Studios",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>48 Studios</title>
        <meta name="description" content="48 Studios" />
        <meta name="author" content="Sarath 'Delta' Singh" />

        <meta property="og:title" content="48 Studios" />
        <meta property="og:description" content="48 Studios" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@48studios" />
        <meta
          name="twitter:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
