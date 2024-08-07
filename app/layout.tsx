import GoogleAdsense from "../components/GoogleAdsense";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "LearnToCodebooks",
  description: "Created By ByteBrush",
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
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <GoogleAdsense pId="4739302499828467" />
    </html>
  );
}
