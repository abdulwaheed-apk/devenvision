import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";


const ralway = Raleway({
  variable: "--font-raleway",
    display:'swap',
    subsets:['latin'],
    weight:'variable'
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
    <html lang="en">
      <body
        className={`${ralway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
