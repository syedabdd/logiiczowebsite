import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import ClientLayoutWrapper from "./_components/ClientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efiicient | Tech",
  description: "Efficient offers innovative business and consulting solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
         <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
        
      </h2>

      <p className="mt-3 max-w-md text-center text-gray-400">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      </div>
        {/* <Navbar />
        <main className="flex-1">
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </main>
        <Footer /> */}
      </body>
    </html>
  );
}
