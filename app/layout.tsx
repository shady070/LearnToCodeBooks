import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleAdsense from "@/components/GoogleAdsense";
import Script from "next/script";
import type { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "LearnToCodebooks",
  description: "Created By ByteBrush.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LKLN8BZ5VX"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LKLN8BZ5VX');
          `}
        </Script>
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://learntocodebooks.com" />
        <meta property="og:type" content="website" />
      </head>
      <body className={cn("min-h-screen bg-black font-sans antialiased bg", fontSans.variable, poppins.className)}>
        <NavBar />
        {children}
        <Footer />
        <GoogleAdsense pId="4739302499828467" />
      </body>
    </html>
  );
}
