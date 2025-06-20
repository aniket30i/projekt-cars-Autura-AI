import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { CarFront, Heart, Layout } from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      {/* <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      <nav className="mx-auto px-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"}>
          <Image
            src={"/logo.png"}
            alt="Projekt Cars"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdmin && (
            <span className="text-xs font-extralight">Hello this is admin</span>
          )}
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/saved-cars">
              <Button>
                <Heart size={18} />
                <span className="hidden md:inline">Saved Cars</span>
              </Button>
            </Link>
            {!isAdmin ? (
              <Link href="/reservations">
                <Button variant="outline">
                  <CarFront size={18} />
                  <span className="hidden md:inline">My Reservations</span>
                </Button>
              </Link>
            ) : (
              <Link href="/admin">
                <Button variant="outline">
                  <Layout size={18} />
                  <span className="hidden md:inline">Admin Portal</span>
                </Button>
              </Link>
            )}
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
