import { getCarById } from "@/actions/car-listing";
import { notFound, redirect } from "next/navigation";
import React from "react";
import { CarDetails } from "./_components/car-details";
import { auth } from "@clerk/nextjs/server";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const result = await getCarById(id);

  if (!result.success) {
    return {
      title: "Car not Found | Projekt Cars",
      description: "The requested car could not be found",
    };
  }

  const car = result.data;

  return {
    title: `${car.year} ${car.make} ${car.model} | Projekt Cars`,
    description: car.description.substring(0, 160),
    openGraph: {
      images: car.images?.[0] ? [car.images[0]] : [],
    },
  };
}
export default async function CarPage({ params }) {
  const { userId } = await auth();

  if (!userId) {
    redirect(`/sign-in?redirect_url=/cars/${params.id}`);
  }
  const { id } = await params;
  const result = await getCarById(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <CarDetails car={result.data} testDriveInfo={result.data.testDriveInfo} />
    </div>
  );
}
