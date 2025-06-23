import React from "react";
export default async function CarDetailsPage({ params }) {
  const { id } = await params;
  //   const result = await getCarById(id);

  //   if (!result.success) {
  //     notFound();
  //   }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <CarDetails car={result.data} testDriveInfo={result.data.testDriveInfo} /> */}
      CarPage: {id}
    </div>
  );
}
