import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','400','500','600', '700', '300'],
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
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
