import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projekt Autura",
  description: "A Projekt cars Product",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <Header />
          <main className="min-h-screen ">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              Build with Next.js
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
