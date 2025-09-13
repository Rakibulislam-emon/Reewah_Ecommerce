import { Footer } from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";
StoreProvider
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reewah",
  description: "Ecommerce website",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased">
        <StoreProvider>
          <Toaster/>
            <Navbar />
            {children}
            <Footer />
        </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
