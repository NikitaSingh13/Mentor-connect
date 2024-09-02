import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "connecto",
  description: "Your Future, Your Career, Your Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>

        {/* Main content in the middle, taking up available space */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
