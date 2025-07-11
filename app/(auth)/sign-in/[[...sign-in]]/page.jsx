"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/"; // Default fallback to "/"

  return <SignIn />;
};

export default SignInPage;
