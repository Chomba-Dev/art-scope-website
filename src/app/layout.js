import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Art Scope Enterprises Limited - Empowering Artists and Creatives",
  description: "Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship. Unleashing creative potential through arts, culture, technology, and business integration.",
  keywords: "art, creativity, innovation, Africa, youth empowerment, entrepreneurship, sustainable development",
  authors: [{ name: "Art Scope Enterprises Limited" }],
  icons: {
    icon: [
      { url: '/images/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/logo.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
    other: [
      {
        rel: 'icon',
        type: 'image/jpeg',
        url: '/images/logo.jpg',
      },
    ],
  },
  openGraph: {
    title: "Art Scope Enterprises Limited - Empowering Artists and Creatives",
    description: "Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Art Scope Enterprises Limited',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="shortcut icon" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
