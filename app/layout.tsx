import Head from 'next/head';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4739302499828467" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4739302499828467"
          crossOrigin="anonymous"></script>
      </Head>
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
