import type { Metadata } from "next";
import { Raleway, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing";


const raleway = Raleway({
  variable: "--font-raleway",
  display: 'swap',
  subsets: ['latin'],
  weight: 'variable'
});

const oswald = Oswald({
  variable: "--font-oswald",
  display: 'swap',
  subsets: ['latin'],
  weight: 'variable'
});

export const metadata: Metadata = {
  title: "DevEnvision",
  description: "Software Development Company | Digital Solutions, Staffing, and Software - All Under One Roof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${oswald.variable}`}>
      <body
        className={`antialiased`}
      >
        <Header />
        {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        </div> */}
        {children}
      </body>
    </html>
  );
}
