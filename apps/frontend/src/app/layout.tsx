import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forjnot | Modern Project Starter Kit",
  description: "Launch your next project faster with Forjnot - A professional, customizable and clean starting point featuring modern tech stack and best practices",
  authors: {
    name: "Aman Sharma",
    url: "https://github.com/aman-sharma-dev"
  },
  keywords: [
    "project starter",
    "boilerplate",
    "template",
    "next.js",
    "react",
    "nest.js",
    "tailwindcss",
    "shadcn/ui",
    "typescript"
  ],
  creator: "Aman Sharma",
  publisher: "Forjnot",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forjnot.vercel.app/",
    title: "Forjnot - Modern Project Starter Kit",
    description: "Launch your next project faster with Forjnot - A professional, customizable and clean starting point featuring modern tech stack and best practices",
    siteName: "Forjnot",
    images: [{
      url: '/forjnot.png',
      width: 1200,
      height: 630,
      alt: 'Forjnot Logo'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Forjnot - Modern Project Starter Kit",
    description: "Launch your next project faster with Forjnot - A professional, customizable and clean starting point featuring modern tech stack and best practices",
    creator: "@builtbyaman",
    images: ['/forjnot.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
  children,
}: Readonly<{
  children: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="sLvfizXzY4GNyn2deFnySXKRmvLbpXGrhtSHeQJiq2E" />
        <link rel="canonical" href="https://forjnot.vercel.app/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="sLvfizXzY4GNyn2deFnySXKRmvLbpXGrhtSHeQJiq2E" />
        <link rel="canonical" href="https://forjnot.vercel.app/" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
