import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing";


const ralway = Raleway({
  variable: "--font-raleway",
  display: 'swap',
  subsets: ['latin'],
  weight: 'variable' // Uncomment if using variable font'
})

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
    <html lang="en" className={`${ralway.variable}`}>
      <body
        className={`antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
