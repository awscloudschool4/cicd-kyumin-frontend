import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UIProvider } from "../utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AWESOME WIKI",
  description: "AWS Cloud School CI/CD 3조",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen relative`}
      >
        <UIProvider>
          <Navigation />

          <main className="flex flex-col flex-grow justify-center items-center w-full pb-20">
            {children}
          </main>

          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
