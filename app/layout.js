import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projekt Autura",
  description: "A Projekt cars Product",
  icons: {
    icon: "/diamond.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <Header />
          <main className="min-h-screen ">{children}</main>
          <Toaster richColors />
          <footer className="bg-black py-12">
            <div className="container mx-auto px-4 text-center text-gray-600 ">
              Re-imagined by{" "}
              <a
                href="https://github.com/aniket30i"
                className="font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-amber-500"
              >
                Aniket Saha
              </a>
              with ❤
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
